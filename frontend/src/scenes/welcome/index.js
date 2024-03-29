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
          marginTop: 3,
          width: "100%",
          height: "100%",
          backgroundColor: 'primary.dark',
          borderRadius: 8,
        }}
      >
        <Box style={{ flex: 1, marginTop: 20, marginBottom: 20}}>
          <Typography fontSize={{ xs: 50, md: 70 }} fontFamily="roboto" color="white">
            Benvenuto
          </Typography>
        </Box>
        <Box style={{ flex: 2, marginBottom: 10 }}>
          <Button
            variant="contained"
            href="/form"
          >
            Iniziamo
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default Welcome;