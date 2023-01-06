import * as React from "react";
import List from "@mui/material/List";
import ListMenu from "../../../components/atoms/ListMenu";
import ListMenuSub from "../../../components/atoms/ListMenuSub";
import Collapse from "@mui/material/Collapse";
import InventoryIcon from "@mui/icons-material/Inventory";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AppContext from "../../../config/context/app";

export default function MenuAkad() {
  const [open, setOpen] = React.useState(false);
  const context = React.useContext(AppContext);
  const menu = "Akad";

  const handleClick = () => {
    // var data = context.menuCollapse;
    setOpen(!open);
    if (!open === true) {
      data.push(menu);
    } else {
      var index = data.indexOf(menu);
      if (index !== -1) {
        data.splice(index, 1);
      }
    }
    context.setMenuCollapse(data);
  };

  React.useEffect(() => {
    // const data = context.menuCollapse;
    // if (data.includes(menu)) {
    //     setOpen(true);
    // }
  });

  return (
    <>
      <ListMenu
        title="Akad Transaksi"
        icon={<InventoryIcon fontSize="small" />}
        iconStatus={
          open ? (
            <ExpandLess style={{ color: "GrayText" }} />
          ) : (
            <ExpandMore style={{ color: "GrayText" }} />
          )
        }
        onClick={handleClick}
      />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListMenuSub title="Daftar Akad Transaksi" href={"/akadtransaksi"} />
        </List>
      </Collapse>
    </>
  );
}
