import {Avatar, Grid} from "@mui/material";
import Box from "@mui/material/Box";

function ChatMessage(props) {
  return(
      <Grid container spacing={0} style={{ padding: 24, backgroundColor: '#6fbf73', borderRadius: 8, marginBottom: 5}}>
        {props.speaks === 'bot' &&
          <Grid item xs={2}>
            <Avatar sx={{ bgcolor: 'red'}}>{props.speaks}</Avatar>
          </Grid>
        }
        <Grid item xs={8} style={{backgroundColor: '#4caf50', borderRadius: 8}}>
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