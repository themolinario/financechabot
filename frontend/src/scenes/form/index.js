import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FormContent from "./FormContent";



function CompileForm () {

 return (
   <Container maxWidth="md">
     <Box sx={{
       display: "flex",
       alignItems: 'center',
       flexDirection: "column",
       marginTop: 2,
       backgroundColor: 'primary.dark',
       borderRadius: 5,
     }}>
       <h1>
         Questionario
       </h1>
       <Box style={{ flex: 1, marginTop: 20, marginBottom: 20}}>
         <FormContent />
       </Box>
     </Box>
   </Container>
 )
}

export default CompileForm;