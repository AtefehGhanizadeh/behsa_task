import { Container, Typography, Box, Stack, Button } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Form from "./Form";
import { State } from "../../Interfaces";
import { useSelector } from "react-redux";


interface Props {
  type: string;
  link: string;
  id: string;
  uniqeId: number | null;
  disable: boolean;
  setDisable: Dispatch<SetStateAction<boolean>>;
  setUniqeId: Dispatch<SetStateAction<null | number>>;
  setType: Dispatch<SetStateAction<string>>;
  setLink: Dispatch<SetStateAction<string>>;
  setId: Dispatch<SetStateAction<string>>;
}

const FormContainer = (props: Props) => {
  const mode = useSelector((state: State) => state.darkMode);
  const [showForm, setShowFrom] = useState(false);
  const showFormHandler = () => {
    setShowFrom((prevState) => !prevState);
  };
  return (
    <Container
      id="top"
      maxWidth="lg"
      sx={{
        bgcolor: mode ? "#1E1E1E" : "white",
        paddingX: "10px",
        paddingY: "20px",
        borderRadius: "10px",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography>مسیر های ارتباطی</Typography>
        </Box>
        <Box>
          <Button
            onClick={showFormHandler}
            sx={{ display: "flex", alignItems: "center", gap: "5px" }}
          >
            <AddIcon fontSize="small" />
            افزودن مسیر ارتباطی
          </Button>
        </Box>
        {showForm && (
          <Form
            disable={props.disable}
            setDisable={props.setDisable}
            type={props.type}
            link={props.link}
            id={props.id}
            uniqeId={props.uniqeId}
            setUniqeId={props.setUniqeId}
            setType={props.setType}
            setLink={props.setLink}
            setId={props.setId}
          />
        )}
      </Stack>
    </Container>
  );
};

export default FormContainer;
