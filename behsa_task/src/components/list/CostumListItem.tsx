import { Button, TableCell, TableRow } from "@mui/material";
import { useDispatch } from "react-redux";
import { ContactItem } from "../../Interfaces";
import { lightTheme } from "../../theme";

const CostumListItem = ({
  item,
  onEdit,
}: {
  item: ContactItem;
  onEdit: (value: ContactItem) => void;
}) => {

  const dispatch=useDispatch()

  const deleteHandler = (item: ContactItem) => {
    dispatch({ type: "delete", amount: item });
  };
  return (
    <TableRow
      key={Math.random()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell
        align="right"
        component="th"
        scope="row"
      >
        {item.type}
      </TableCell>
      <TableCell
        align="right"
      >
        {item.link}
      </TableCell>
      <TableCell
        align="right"
      >
        {item.id}
      </TableCell>
      <TableCell
        align="right"
      >
        <Button
          onClick={() => deleteHandler(item)}

        >
          حذف
        </Button>
      </TableCell>
      <TableCell align="right">
        <a href="#top">
          <Button
  
            onClick={() => {
              onEdit(item);
            }}
          >
            ویرایش
          </Button>
        </a>
      </TableCell>
    </TableRow>
  );
};

export default CostumListItem;
