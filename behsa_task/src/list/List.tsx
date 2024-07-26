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
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { lightTheme } from "../theme";

const List = ({ onEdit }: { onEdit: (value: ContactItem) => void }) => {
  const contactList = useSelector((state: State) => state.contactList);
  const dispatch = useDispatch();

  const deleteHandler = (item: ContactItem) => {
    dispatch({ type: "delete", amount: item });
  };

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.main,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  return (
    <TableContainer component={Paper} sx={{ borderRadius: "10px" }}>
      <Table sx={{ minWidth: 650, padding: "0" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right" sx={{fontFamily:lightTheme.typography.fontFamily}}>نوع</StyledTableCell>
            <StyledTableCell align="right" sx={{fontFamily:lightTheme.typography.fontFamily}}>لینک</StyledTableCell>
            <StyledTableCell align="right" sx={{fontFamily:lightTheme.typography.fontFamily}}>ID</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList.map((row) => (
            <TableRow
              key={Math.random()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } ,}}
            >
              <TableCell align="right" component="th" scope="row" sx={{fontFamily:lightTheme.typography.fontFamily}}>
                {row.type}
              </TableCell>
              <TableCell align="right" sx={{fontFamily:lightTheme.typography.fontFamily}}>{row.link}</TableCell>
              <TableCell align="right" sx={{fontFamily:lightTheme.typography.fontFamily}}>{row.id}</TableCell>
              <TableCell align="right" sx={{fontFamily:lightTheme.typography.fontFamily}}>
                <Button onClick={() => deleteHandler(row)} sx={{fontFamily:lightTheme.typography.fontFamily}}>حذف</Button>
              </TableCell>
              <TableCell align="right">
                <a href="#top">
                  <Button
                  sx={{fontFamily:lightTheme.typography.fontFamily}}
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
