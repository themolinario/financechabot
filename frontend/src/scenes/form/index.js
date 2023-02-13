import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {useForm} from "react-hook-form";



function CompileForm () {
  const {register, handleSubmit} = useForm();

 return (
   <Container maxWidth="md">
     <Box sx={{
       display: "flex",
       alignItems: "center",
       flexDirection: "column",
       marginTop: 5,
       width: "100%",
       height: "100%",
       backgroundColor: 'primary.dark',
     }}>
       <Box style={{ flex: 1, marginTop: 20, marginBottom: 20}}>
         <form
           onSubmit={handleSubmit((data) => {
             console.log(data);
           })}
           style={{ display: "flex", flex: 1, flexDirection: 'column'}}
         >
           <input {...register("firstName")} placeholder="First Name"/>
           <input {...register("lastName")} placeholder="Last Name"/>
           <input type="submit"/>
         </form>
       </Box>
     </Box>
   </Container>
 )
}

export default CompileForm;