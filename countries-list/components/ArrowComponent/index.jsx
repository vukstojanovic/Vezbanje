import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ArrowComponent({ direction }) {
  if (direction === "up") return <KeyboardArrowUpIcon color="inherit" />;
  if (direction === "down") return <KeyboardArrowDownIcon color="inherit" />;
}

export default ArrowComponent;
