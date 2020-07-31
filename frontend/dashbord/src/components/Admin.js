import React, { useState, useEffect } from "react";   
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
export default function AllNanny() { 

const [nannylist, setNannylist] = useState([]); // state to hold all nanny records data
useEffect(() => {
    fetch(`http://192.168.127.74:5000/Admin`)
      .then(res => res.json())
      .then(response => {
        setNannylist(response);
      })
      .catch(error => console.log(error));
  }, []);

console.log(nannylist)
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '36ch',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },
}));


  const classes = useStyles();

  return (
      <>
    { nannylist.map((nany) => (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={nany.name} src= {nany.image} />
        </ListItemAvatar>
        <ListItemText
          primary= {nany.name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {nany.place}
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        /> 
        <button> Delete </button> <br></br> <br></br>
        <button> Update </button>
        </ListItem> 
    </List>
  ))
 }
 </>
 ) 
}