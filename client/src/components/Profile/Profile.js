import React ,{useState,Fragment,useEffect}from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Modal, Button } from 'react-bootstrap'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// Redux 
import {connect} from "react-redux"
import {loadUser} from "../../actions/auth"
import { useDispatch } from 'react-redux'


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



// Profile


 



function Profile({register:{user},loadUser}) {
  
    const dispatch = useDispatch()

  
  const token = localStorage.getItem("token");
// For profile data
    let { name, email ,bio,avatar} = user
    console.log(user.name)
    const [userdata, updateUserData] = useState({name: name, email: email,bio:email,avatar:avatar })
    
    
    console.log(userdata)
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    
   
    const getInput = (e) => {
      console.log(e.target.value)
      updateUserData({
        ...userdata,
        [e.target.name]: e.target.value
      })
    }
    
    const uploadPic = async (image) => {
        
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'Mentor');
        const res = await fetch('https://api.cloudinary.com/v1_1/dlqxpkg7h/image/upload', {
          method: 'POST',
          body: data
        });
        const file = await res.json();
        if(file){
            alert('file uploaded..')
        }
        console.log(file);
        updateUserData({
            avatar: file.secure_url,
            name,
            email,
            bio
        })

    }

    console.log(userdata)
    const handleSubmit = () => {
      const updateProfile = async () => {
        try {
          let result = await axios.post(`/api/mentee/profile/update`, userdata)
          console.log(result)
          if (result) {
            toast.warn("successfully updated")
            
            
            
          }
        } catch (err) {
          toast.warn("Error")
        }
      }
      updateProfile()
      handleClose()
    }
    
  
    const classes = useStyles();
    return (
        <div>
            <div className="sidebar">
              <aside>

                <ul>
                    <li className="mb-2">
                        <Link  className="active" to ='/mentee/profile' style={{ textDecoration: 'none', color: 'black' }}  >Profile</Link>
                    </li>      
                </ul>
              </aside> 
            </div>
            
            <div className="content card shadow">
             <div className={classes.root,'pro'}>
              <div> 
                <div className="row">    

                </div>
                    <div tabindex="0" id="ember824" className="profile-background-image profile-background-image--loading ember-view full-width">
                
                    </div>
                    <br/>
                    <br/>
                    <div class="row">
                        <div class="col-lg-3 col-md-3 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                <img src={user.avatar} className="mb-5" style= {{heigh:"120px" ,width:'120px',borderRadius:'100%',marginTop:'-100px'}}/>
                                
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
                                <span>BIO</span> 
                                <textarea className="textarea" name="description" cols="40" rows="5" placeholder="bio" disabled>
                                    {user.bio}
                                </textarea>
                                            <Button
                                                variant="contained"
                                                color="btn btn-primary"
                                                size="small"
                                                style={{background:'#304160',width:'120px',marginBottom:'-20px' ,color:'white'}}
                                                onClick = {handleShow}
                                            >
                                                Edit
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
            <Fragment>
            <Modal show={show} onHide={handleClose} className="container">
                    <Modal.Header closeButton style={{ "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }}>
                    <Modal.Title style={{ "color": "white" }}>Update Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <ToastContainer />
                    <form>
                        <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Name</label>
                            <input name="name" type="text" onChange={getInput} defaultValue={userdata.name} className="form-control" placeholder="Name" />
                        </div>
                        <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Image</label>
                            <input type="file" onChange={(e) => uploadPic(e.target.files[0])} className="form-control" placeholder="Name" />
                        </div>
                        
                        </div>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" defaultValue={userdata.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name= "email" onChange={getInput} />
                        <textarea className="textarea" name="description" onChange = {getInput} cols="40" rows="5" placeholder="bio" defaultValue={userdata.bio} name="bio" >
                                
                        </textarea>

                        </div>
                        
                        <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                    </form>
                    </Modal.Body>
                    <Modal.Footer style={{ "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }}>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        </div>
 
    )
}

Profile.propTypes = {
    register:PropTypes.object.isRequired,
    loadUser :PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
    register:state.register
})

export default  connect(mapStateToProps,{loadUser})(Profile);
