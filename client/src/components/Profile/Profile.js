import React from 'react'
import {Link} from "react-router-dom"
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';





// Redux 
import {connect} from "react-redux"
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
}));

// Don't Change
const nameStyle = {
    fontSize: 17,
    color: "black",
    textAlign: "center",
    display:'inline',
    fontFamily:'Robot'
}

// Profile

 



function Profile({register:{user}}) {


    const classes = useStyles();
    return (
        <div>
            <div className="sidebar">
              <aside>

                <ul>
                    <li className="mb-2">
                        <Link  className="active" to ='/mentee/profile' style={{ textDecoration: 'none', color: 'black' }}  >Profile</Link>
                    </li>
                    
                   
                    <li className="mb-2">
                        <Link to="/change-password" style={{ textDecoration: 'none', color: 'black' }}>Chnage Password</Link>
                    </li>
                    
                    <li>
                        <Link to="/mentor/notify" style={{ textDecoration: 'none', color: 'black' }}>Mentor Reply</Link>
                    </li>
                   
                </ul>
              </aside> 
            </div>
            
            <div class="content card shadow">
               
            

            <div className={classes.root,'pro'}>
            
                <div>
                   
                <div class="row">
                          
                          
                    </div>
                    <div tabindex="0" id="ember824" className="profile-background-image profile-background-image--loading ember-view full-width">
                
                    </div>
                    <br/>
                    <br/>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                <figure className="image is-96x96 is-round profile-image profile-photo-edit" style={{verticalAlign:'top',marginBottom:"200px"}}>
                                    <p><img src={user && user.avatar}  /></p>
                                </figure>
                                <ul >
                                    <li className="name">
                                    {user && user.name} <EditOutlinedIcon  style = {{color:'blue',fontSize:'20px'}}/>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-3 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body detail">
                                <TextField
                                    id="standard-read-only-input"
                                    label={user && user.name}
                                    disabled 
                                />
                                <TextField
                                    id="standard-read-only-input"
                                    label={user && user.email}
                                    disabled 
                                />
                                <br/>
                                <br/>
                              
                                <textarea className="textarea" name="description" cols="40" rows="5" placeholder="bio" >

                                </textarea>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    style={{background:'#304160',width:'120px',marginBottom:'-20px'}}
                                >
                                    Submit
                                </Button>
                                <Link to="/deactive" style = {{color:'red',display:'block',marginTop:'30px',marginBottom:'10px'}}>
                                    Deactivate Account
                                </Link>
 
                                  
                             
                                </div>
                            </div>
                        </div>   
                    </div>
                </div>
                </div>
            </div>
        </div>
 
    )
}

Profile.propTypes = {
    register:PropTypes.object.isRequired,

  
};

const mapStateToProps = state =>({
    register:state.register
})

export default  connect(mapStateToProps)(Profile);
