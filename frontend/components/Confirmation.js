import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
}));

export default function SimplePopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);


  // //fetching data from the db 
  // useEffect(() => {
  //   fetch(`http://192.168.127.74:5000/ret`)
  //     .then(res => res.json())
  //     .then(response => {
  //       setNanylist(response);
  //     })
  //     .catch(error => console.log(error));
  // }, []);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Confirm
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Typography className={classes.typography}>nanny name: </Typography>
        <Typography className={classes.typography}>nanny education: </Typography>
        <Typography className={classes.typography}>nanny place:  </Typography>
        <Typography className={classes.typography}> nanny cost: </Typography>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}> Done </Button>
        <Button aria-describedby={id} variant="contained" color="primary" onClick= {handleClose}> Cancel </Button>
      </Popover>
    </div>
  );
}