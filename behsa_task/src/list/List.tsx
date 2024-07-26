import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ContactItem, State } from "../Interfaces";

const List = ({ onEdit }: { onEdit: (value: ContactItem) => void }) => {
  const contactList = useSelector((state: State) => state.contactList);
  const dispatch = useDispatch();

  const deleteHandler = (item: ContactItem) => {
    dispatch({ type: "delete", amount: item });
  };

  return (
    <TableContainer component={Paper} sx={{borderRadius:"10px"}} >
      <Table sx={{ minWidth: 650, padding: "0" }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "orange" }}>
          <TableRow>
            <TableCell align="right">نوع</TableCell>
            <TableCell align="right">لینک</TableCell>
            <TableCell align="right">ID</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList.map((row) => (
            <TableRow
              key={Math.random()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row">
                {row.type}
              </TableCell>
              <TableCell align="right">{row.link}</TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">
                <Button onClick={() => deleteHandler(row)}>حذف</Button>
              </TableCell>
              <TableCell align="right">
                <a href="#top">
                  <Button
                    onClick={() => {
                      onEdit(row);
                    }}
                  >
                    ویرایش
                  </Button>
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
