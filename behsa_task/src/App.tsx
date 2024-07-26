import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import FormContainer from "./form/FormContainer";
import List from "./list/List";
interface ContactItem {
  type: string;
  link: string;
  id: string;
  uniqeId:number
}

function App() {
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState("");
  const[uniqeId,setUniqeId]=useState<number|null>(null)

  const editHandler=(value:ContactItem)=>{
    console.log(value)
    setType(value.type)
    setLink(value.link)
    setId(value.id)
    setUniqeId(value.uniqeId)
  }
  return (
    <div>
      <Container maxWidth="lg" sx={{ paddingTop:"20px" }}>
        <Stack spacing={2}>
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Stack spacing={2}>
                  <Typography variant="h6">حساب کاربری</Typography>
                  <Typography sx={{ fontSize:"12px" }}>{'خانه > کاربر > تنظیمات کاربری'}</Typography>
                </Stack>
              </Box>
              <Box>تاریک</Box>
            </Stack>
          </Box>
          <Box><FormContainer type={type} link={link} id={id} uniqeId={uniqeId} setUniqeId={setUniqeId} setType={setType} setLink={setLink} setId={setId}/></Box>
          <Box><List onEdit={editHandler}/></Box>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
