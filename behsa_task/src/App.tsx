import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import FormContainer from "./form/FormContainer";
import List from "./list/List";
import {lightTheme} from "./theme";
import { useDispatch, useSelector } from "react-redux";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { State } from "./Interfaces";

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
  const dispatch=useDispatch()
  const mode=useSelector((state: State)=>state.darkMode)

  const editHandler=(value:ContactItem)=>{
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
                  <Typography variant="h6" sx={{fontFamily:lightTheme.typography.fontFamily}}>حساب کاربری</Typography>
                  <Typography sx={{ fontSize:"12px",fontFamily:lightTheme.typography.fontFamily }}>{'خانه > کاربر > تنظیمات کاربری'}</Typography>
                </Stack>
              </Box>
              <Button onClick={()=>dispatch({type:"toggle"})} sx={{display:'flex',alignItems:"center",gap:"5px"}}>{mode?<LightModeIcon fontSize="small"/>:<DarkModeIcon fontSize="small"/>}{mode?"روشن":"تاریک"}</Button>
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
