import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Welcome () {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 5,
          width: "100%",
          height: "100%",
          backgroundColor: 'primary.dark',
        }}
      >
        <Box style={{ flex: 1, marginTop: 20, marginBottom: 20}}>
          <Typography variant="h2" fontFamily="roboto" color="white">
            Welcome
          </Typography>
        </Box>
        <Button variant="contained" style={{ flex: 2 }}>Clicca qui</Button>
      </Box>
    </Container>
  )
}

export default Welcome;