import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useEffect, useState} from "react";
import Cookies from 'universal-cookie/lib';
import { v4 as uuid} from 'uuid';
import axios from "axios";
import ChatMessage from "../../components/chatbot/ChatMessage";
import {TextField} from "@mui/material";

const cookies = new Cookies();

function ChatBot () {
  const [messages, setMessages] = useState([]);
  const [isOnline, setIsOnline] = useState(false);

  let messagesEnd;

  if (cookies.get('userID') === undefined){
    cookies.set('userID', uuid(), {path: '/'});
  }
  console.log(cookies.get('userID'));

  async function dfTextQuery (text) {
    let says = {
      speaks: 'me',
      msg: {
        text: {
          text: text
        }
      }
    };

    setMessages(messages => [...messages,  says]);

    const res = await axios.post('/api/df_text_query', {text: text, userID: cookies.get('userID')});


    res.data.fulfillmentMessages.forEach(msg => {
      console.log(JSON.stringify(msg));
      let says = {
        speaks: 'bot',
        msg: msg
      };
      setMessages(messages => [...messages, says]);
    });
  }

  async function dfEventQuery(event) {
    const res = await axios.post('api/df_event_query', {event: event, userID: cookies.get('userID')});

    for (let msg of res.data.fulfillmentMessages) {
      let says = {
        speaks: 'bot',
        msg: msg
      }
      setMessages(messages => [...messages, says]);
    }

  }

  useEffect(() => {
    messagesEnd.scrollIntoView({ behavior: 'smooth' });
    if (isOnline === false) {
      dfEventQuery('Welcome');
    }
    setIsOnline(true);
  }, [dfEventQuery, messagesEnd]);

  function renderMessages (stateMessages) {
    if (stateMessages) {
      return stateMessages.map((message, i) => {
        if (message.msg && message.msg.text && message.msg.text.text ) {
          return <ChatMessage key={i} speaks={message.speaks} text={message.msg.text.text}/>
        }
      })
    }
  }

  function handleInputKeyPress (e) {
    if (e.key === 'Enter') {
      dfTextQuery(e.target.value);
      e.target.value= '';
    }
  }

  return (
   <Container maxWidth="md">
     <Box sx={{
       display: "flex",
       alignItems: 'center',
       flexDirection: "column",
       marginTop: 2,
       backgroundColor: 'primary.dark',
       borderRadius: 5,
       height: '100%',
       width: '100%'
     }}>
       <Box>
         <h2>Chatbot</h2>
       </Box>
       <Box style={{backgroundColor: 'black', width: '100%', paddingTop: 4}}>
         {renderMessages(messages)}
       </Box>
       <div
         ref={(el) => {
           messagesEnd = el;}}
         style={{ float: 'left', clear: 'both'}}>
       </div>
       <div>
         <TextField
           id="standard-basic"
           label="Scrivi un messaggio.."
           variant="standard"
           onKeyPress={handleInputKeyPress}
           style={{ margin: 24, backgroundColor: 'white', padding: 2, borderRadius: 2, width: '100%'}}
         />
       </div>
     </Box>
   </Container>
 )
}

export default ChatBot;