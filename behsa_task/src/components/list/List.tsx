import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { ContactItem, State } from "../../Interfaces";
import CostumListItem from "./CostumListItem";

const List = ({ onEdit }: { onEdit: (value: ContactItem) => void }) => {
  const contactList = useSelector((state: State) => state.contactList);

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
            <StyledTableCell
              align="right"
            >
              نوع
            </StyledTableCell>
            <StyledTableCell
              align="right"
            >
              لینک
            </StyledTableCell>
            <StyledTableCell
              align="right"
            >
              ID
            </StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {contactList.map((row) => (
            <CostumListItem key={row.uniqeId} item={row} onEdit={onEdit} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
