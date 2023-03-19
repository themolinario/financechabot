import {Avatar, Grid} from "@mui/material";

function ChatMessage(props) {
  return(
      <Grid container style={{ padding: 24, backgroundColor: '#6fbf73', borderRadius: 8, marginBottom: 5, justifyContent: 'center'}}>
        <Grid item xs={2} >
        {props.speaks === 'bot' &&
            <Avatar sx={{ bgcolor: 'red'}}>{props.speaks}</Avatar>
        }
        </Grid>
        <Grid item xs={7} style={{backgroundColor: '#4caf50', borderRadius: 8}}>
        <span style={{margin: 10}}>
          {props.text}
        </span>
        </Grid>
        {props.speaks === 'me' &&
          <Grid item xs={2} style={{marginLeft: 40}}>
            <Avatar>{props.speaks}</Avatar>
          </Grid>
        }
      </Grid>
  )
}

export default ChatMessage;