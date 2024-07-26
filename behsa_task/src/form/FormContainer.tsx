import { Container, Typography, Box, Stack, Button } from "@mui/material";
import  { Dispatch, SetStateAction, useState } from "react";
import Form from "./Form";

interface Props{
    type:string,
    link:string,
    id:string,
    uniqeId:number|null,
    setUniqeId:Dispatch<SetStateAction<null|number>>
    setType:Dispatch<SetStateAction<string>>,
    setLink:Dispatch<SetStateAction<string>>,
    setId:Dispatch<SetStateAction<string>>
}

const FormContainer = (props:Props) => {
    const [showForm, setShowFrom] = useState(false);
    const showFormHandler = () => {
        setShowFrom(prevState=>!prevState);
      };
  return (
    <Container
       id="top"
      maxWidth="lg"
      sx={{
        bgcolor: "white",
        paddingX: "10px",
        paddingY: "20px",
        borderRadius: "10px",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography>مسیر های ارتباطی</Typography>
        </Box>
        <Box><Button onClick={showFormHandler}>افزودن مسیر ارتباطی</Button></Box>
        {showForm&&<Form type={props.type} link={props.link} id={props.id} uniqeId={props.uniqeId} setUniqeId={props.setUniqeId} setType={props.setType} setLink={props.setLink} setId={props.setId} />}
      </Stack>
    </Container>
  );
};

export default FormContainer;
