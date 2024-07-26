import {
  Container,
  Typography,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Button,
  FormHelperText,
} from "@mui/material";
import { Dispatch, MouseEvent, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { lightTheme } from "../theme";
import { State } from "../Interfaces";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
interface Props {
  type: string;
  link: string;
  id: string;
  uniqeId: number | null;
  setUniqeId: Dispatch<SetStateAction<null | number>>;
  setType: Dispatch<SetStateAction<string>>;
  setLink: Dispatch<SetStateAction<string>>;
  setId: Dispatch<SetStateAction<string>>;
}

const Form = ({
  type,
  link,
  id,
  uniqeId,
  setType,
  setLink,
  setId,
  setUniqeId,
}: Props) => {
  const [disable, setDisable] = useState(true);
  const mode = useSelector((state: State) => state.darkMode);
  const dispatch = useDispatch();

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    setDisable(false)
  };
  const handleLinkChange = (event: any) => {
    setLink(event.target.value);
  };
  const handleIdChange = (event: any) => {
    setId(event.target.value);
  };

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(uniqeId);
    if (!type) {
      setDisable(true);
    }
    if (uniqeId) {
      dispatch({ type: "edit", amount: { type, link, id, uniqeId } });
    } else {
      dispatch({
        type: "add",
        amount: { type, link, id, uniqeId: Math.random() },
      });
    }
    setType("");
    setLink("");
    setId("");
    setUniqeId(null);
  };

  const cancelHandler = () => {
    setType("");
    setDisable(true)
    setLink("");
    setId("");
  };
  return (
    <Container
      sx={{
        bgcolor: mode ? "black" : "#f6f7f9",
        padding: "30px 100px",
        borderRadius: "10px",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography sx={{ fontFamily: lightTheme.typography.fontFamily }}>
            افزودن مسیر ارتباطی
          </Typography>
        </Box>
        <CacheProvider value={cacheRtl}>
          <form>
            <Stack
              direction="row"
              justifyContent="space-between"
              display="flex"
              gap="20px"
            >
              <FormControl dir="rtl">
                <InputLabel
                  id="demo-simple-select-required-label"
                  required
                  sx={{ fontFamily: lightTheme.typography.fontFamily }}
                >
                  نوع
                </InputLabel>
                <Select
                  required
                  sx={{
                    width: "200px",
                    flex: 1,
                    textAlign: "right",
                  }}
                  id="validation-outlined-input"
                  labelId="demo-simple-select-required-label"
                  value={type}
                  label="نوع"
                  onChange={handleTypeChange}
                >
                  <MenuItem value={"اینستاگرام"}>اینستاگرام</MenuItem>
                  <MenuItem value={"فیسبوک"}>فیسبوک</MenuItem>
                  <MenuItem value={"تلگرام"}>تلگرام</MenuItem>
                  <MenuItem value={"توییتر"}>توییتر</MenuItem>
                  <MenuItem value={"لینکدین"}>لینکدین</MenuItem>
                  <MenuItem value={"وب سایت"}>وب سایت</MenuItem>
                </Select>
                <FormHelperText>مشخص کردن این فیلد الزامی است.</FormHelperText>
              </FormControl>

              <TextField
                sx={{ fontFamily: lightTheme.typography.fontFamily }}
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="لینک"
                variant="outlined"
                value={link}
                onChange={handleLinkChange}
              />
              <TextField
                sx={{ fontFamily: lightTheme.typography.fontFamily }}
                style={{ width: "200px", margin: "5px" }}
                type="text"
                label="ID"
                variant="outlined"
                value={id}
                onChange={handleIdChange}
              />
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-end"
              gap={1}
              marginTop="20px"
            >
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "inherit",
                  borderRadius: "10px",
                  fontFamily: lightTheme.typography.fontFamily,
                }}
                onClick={cancelHandler}
              >
                انصراف
              </Button>
              <Button
              disabled={disable}
                variant="contained"
                sx={{
                  borderRadius: "10px",
                  fontFamily: lightTheme.typography.fontFamily,
                }}
                type="submit"
                onClick={submitHandler}
              >
                افزودن مسیر ارتباطی
              </Button>
            </Stack>
          </form>
        </CacheProvider>
      </Stack>
    </Container>
  );
};

export default Form;
