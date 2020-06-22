import React, { Fragment,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PropTypes from 'prop-types';
import {logout} from "../../actions/auth"
import Avatar from '@material-ui/core/Avatar';
import KeyboardArrowDownSharpIcon from '@material-ui/icons/KeyboardArrowDownSharp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';




// Redux 
import {connect} from "react-redux"

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
}));

function ButtonAppBar({register:{isAuthenticated,loading,user},logout,}) {
  const classes = useStyles();
  
  const [anchorEl, setAnchorEl] = useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }
 
  // After Login Navbar
const authLinks = (
      <div>   
          <Button color="inherit">
              <Link to = '/mentors'>  
                Find Mentor
              </Link>
          </Button>
          <Button color="inherit"
            aria-owns={anchorEl ? 'simple-menu' : null}
            aria-haspopup="true"
            onClick={handleClick}
            onMouseOver={handleClick}
          >
                <Avatar alt="Remy Sharp" src={user && user.avatar} />
               <KeyboardArrowDownSharpIcon/>

          </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/mentee/profile">
                    Profile
                </Link>
                
                </MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>
                <a onClick={logout} href='/login'>
                    
                    <span className='hide-sm'>Logout</span>
                </a>
              </MenuItem>
            </Menu>
      </div>
     

  )

  const guestLinks = (
    <div>
        <Button color="inherit">
            <Link to = '/mentors'>  
              Jee/Gate
            </Link>
        </Button>
        <Button color="inherit">
            <Link to = '/login'>  
              Login
            </Link>
        </Button>
        <Button color="inherit">
            <Link to = '/register'>  
              Register
            </Link>
        </Button>
  </div>

  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className="">
        <Toolbar className="navbar bg-dark">
        <Typography variant="h6" className={classes.title}>
          <Link to = '/'>
              Mentor Boat
          </Link>
        </Typography>
     
            {!loading && (
              <Fragment>
                {isAuthenticated ? authLinks : guestLinks}
              </Fragment>
            )}
         
        </Toolbar>

      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes={
  register:PropTypes.object.isRequired,
  logout : PropTypes.func.isRequired,
 
}



const mapStateToProps = state =>({
  register:state.register,
  
})


export default connect(mapStateToProps,{logout}) (ButtonAppBar)