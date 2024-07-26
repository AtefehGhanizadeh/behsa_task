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
} from "@mui/material";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { useDispatch } from "react-redux";

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

  const dispatch = useDispatch();

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value);
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
  return (
    <Container
 
      sx={{
        bgcolor: "#f6f7f9",
        padding: "30px 100px",
        borderRadius: "10px",
      }}
    >
      <Stack spacing={3}>
        <Box>
          <Typography>افزودن مسیر ارتباطی</Typography>
        </Box>
        <form >
          <Stack
            direction="row"
            justifyContent="space-between"
            display="flex"
            gap="20px"
          >
            <FormControl>
              <InputLabel id="demo-simple-select-required-label" required>
                نوع
              </InputLabel>
              <Select
                required
                dir="rtl"
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
            </FormControl>

            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="لینک"
              variant="outlined"
              value={link}
              onChange={handleLinkChange}
            />
            <TextField
              style={{ width: "200px", margin: "5px" }}
              type="text"
              label="ID"
              variant="outlined"
              value={id}
              onChange={handleIdChange}
            />
          </Stack>
          <Stack direction="row" justifyContent="flex-end">
            <Button
              sx={{ backgroundColor: "inherit", color: "pallete.primary" }}
            >
              انصراف
            </Button>
            <Button
              sx={{ backgroundColor: "pallet.primary" }}
              type="submit"
              onClick={submitHandler}
            >
              افزودن مسیر ارتباطی
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
};

export default Form;
