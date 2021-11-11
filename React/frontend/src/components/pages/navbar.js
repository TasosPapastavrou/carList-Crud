import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'; 
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import DehazeIcon from '@material-ui/icons/Dehaze';
import {
    BrowserRouter as Router, 
    Link
  } from "react-router-dom";


  
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  butTon: {
    '&:hover': {
        backgroundColor: 'black',
        boxShadow: 'none',
        color: 'orange'
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#gray',
      },
},
  navbarS:{
    backgroundColor: 'orange',
  },
  tabS:{
    backgroundColor: 'orange',
  },
  placeLogo:{
    marginLeft: '40%',
    color: 'black',
    fontStyle: 'italic',
  }}));

export default function ButtonAppBar() {

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbarS}>
      <Toolbar>
      <div>
                      <Button className={classes.butTon} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                      <DehazeIcon/>
                      Menu
                      </Button>
                      <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                      >
                            <div className={classes.tabS}>
                            <MenuItem onClick={handleClose}>
                            <Typography variant="h6" className={classes.title}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/'}>Home</Link>
                            </Typography>
                            </MenuItem>
                          
                            <MenuItem onClick={handleClose}>
                            <Typography variant="h6" className={classes.title}>
                            <Link style={{ textDecoration: 'none', color: 'black' }} to={'/carlist'}>Car List</Link>
                            </Typography>
                            </MenuItem>
                          
                            </div> 
                      </Menu>
        </div>

                      <Typography className={classes.placeLogo} variant="h6" color="inherit">
                      My Cars
                      </Typography>
      </Toolbar>
      </AppBar>
      </div>
  );
}