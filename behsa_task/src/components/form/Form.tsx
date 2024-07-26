import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import { ChangeEvent, Dispatch, MouseEvent, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";
import { State } from "../../Interfaces";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
interface Props {
  type: string;
  link: string;
  id: string;
  uniqeId: number | null;
  disable:boolean,
  setDisable:Dispatch<SetStateAction<boolean>>
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
  disable,
  setDisable,
  setType,
  setLink,
  setId,
  setUniqeId,
}: Props) => {
  const matches = useMediaQuery('(min-width:425px)');

  const mode = useSelector((state: State) => state.darkMode);
  const dispatch = useDispatch();

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
    setDisable(false);
  };
  const handleLinkChange = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setLink(event.target.value);
  };
  const handleIdChange = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setId(event.target.value);
  };

  const submitHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
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
    setDisable(true)
  };

  const cancelHandler = () => {
    setType("");
    setDisable(true);
    setLink("");
    setId("");
    setUniqeId(null)
  };
  return (
    <Container
      sx={{
        bgcolor: mode ? "black" : "#f6f7f9",
        padding: "30px",
        borderRadius: "10px",
        minWidth:"250px"
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography
           >
            افزودن مسیر ارتباطی
          </Typography>
        </Box>
        <CacheProvider value={cacheRtl}>
          <form>
            <Stack
              sx={{flexDirection:matches?"row":"column"}}
              justifyContent="space-between"
              display="flex"
              gap="20px"
            >
              <FormControl dir="rtl">
                <InputLabel
                  id="demo-simple-select-required-label"
                  required
                >
                  نوع
                </InputLabel>
                <Select
                  required
                  sx={{
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
                type="text"
                label="لینک"
                variant="outlined"
                value={link}
                onChange={handleLinkChange}
              />
              <TextField
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
                }}
                type="submit"
                onClick={submitHandler}
              >
               {uniqeId?"اعمال تفییرات":"افزودن مسیر ارتباطی"} 
              </Button>
            </Stack>
          </form>
        </CacheProvider>
      </Stack>
    </Container>
  );
};

export default Form;
