import React from "react";
import {
  Drawer as MUIDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import HomeIcon from "@material-ui/icons/Home";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "./AdminMethods.js";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "110px",
  },
});

function Drawer(props) {
  const classes = useStyles();
  const itemsList = [
    {
      text: "Home",
      icon: <HomeIcon />,
      onClick: () => props.history.push("/Admin"),
    },
    {
      text: "Add new admin",
      icon: <PersonAddIcon />,
      onClick: () => props.history.push("/AddAdmin"),
    },
    {
      text: "Logout",
      icon: <ExitToAppIcon />,
      onClick: () => logout(),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
              
              <ListItem button key={text} onClick={onClick}>
                  
              {icon && <ListItemIcon> {icon} </ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
}

export default withRouter(Drawer);
