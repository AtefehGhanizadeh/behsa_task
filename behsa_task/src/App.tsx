import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { Box, Breadcrumbs, Button, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormContainer from "./components/form/FormContainer";
import List from "./components/list/List";
import { ContactItem, State } from "./Interfaces";


function App() {
  const [type, setType] = useState("");
  const [link, setLink] = useState("");
  const [id, setId] = useState("");
  const [uniqeId, setUniqeId] = useState<number | null>(null);
  const [disable, setDisable] = useState(true);
  const dispatch = useDispatch();
  const mode = useSelector((state: State) => state.darkMode);

  const editHandler = (value: ContactItem) => {
    setDisable(false)
    setType(value.type);
    setLink(value.link);
    setId(value.id);
    setUniqeId(value.uniqeId);
  };
  const breadcrumbs = [
    <Typography  key="1" color="inherit">
      خانه
    </Typography>,
    <Typography  key="2" color="inherit">
      کاربر
    </Typography>,
    <Typography key="3" color="text.primary">
      تنظیمات کاربری
    </Typography>,
  ];
  return (
    <div>
      <Container maxWidth="lg" sx={{ paddingY: "20px" }}>
        <Stack spacing={2}>
          <Box>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Stack spacing={2}>
                  <Typography
                    variant="h6"
                  >
                    حساب کاربری
                  </Typography>

                  <Breadcrumbs
                    separator={<NavigateBeforeIcon fontSize="small" />}
                    aria-label="breadcrumb"
                  >
                    {breadcrumbs}
                  </Breadcrumbs>
                </Stack>
              </Box>
              <Button
                onClick={() => dispatch({ type: "toggle" })}
                sx={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                {mode ? (
                  <LightModeIcon fontSize="small" />
                ) : (
                  <DarkModeIcon fontSize="small" />
                )}
                {mode ? "روشن" : "تاریک"}
              </Button>
            </Stack>
          </Box>
          <Box>
            <FormContainer
              type={type}
              link={link}
              id={id}
              uniqeId={uniqeId}
              disable={disable}
              setDisable={setDisable}
              setUniqeId={setUniqeId}
              setType={setType}
              setLink={setLink}
              setId={setId}
            />
          </Box>
          <Box>
            <List onEdit={editHandler} />
          </Box>
        </Stack>
      </Container>
    </div>
  );
}

export default App;
