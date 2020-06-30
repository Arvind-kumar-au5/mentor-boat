import React, { Fragment } from 'react'
import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {connect} from "react-redux"
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";

function Example({register:{user}  }) {
 
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const[avatar,setAvatar] = useState("")
  const uploadPic = async (image) => {
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'Mentor');
    const res = await fetch('https://api.cloudinary.com/v1_1/dlqxpkg7h/image/upload', {
      method: 'POST',
      body: data
    });
    const file = await res.json();
    console.log(file);
    setAvatar({
      avatar: file.secure_url
    })
    

}
const handleSubmit = () =>{
  const updateProfile = async () => {
    try {
      let result = await axios.put(`/api/mentee/profile/update`, avatar)
      console.log(result)
      if (result) {
        toast.warn("successfully updated")
        window.location.reload()
        
      }
    } catch (err) {
      toast.warn("Error")
    }
  }
  updateProfile()
  handleClose()
}


  console.log(avatar)
   

  return (
    <Fragment>
      <Button variant="primary" onClick={handleShow}>
        Edit Profile
      </Button>

      <Modal show={show} onHide={handleClose} className="container">
        <Modal.Header closeButton style={{ "background": "linear-gradient(to right bottom, rgb(105, 142, 148), rgb(5, 50, 58))" }}>
          <Modal.Title style={{ "color": "white" }}>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ToastContainer />
          <form>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Image</label>
                <input name="name" type="file" onChange={(e) => uploadPic(e.target.files[0])} className="form-control" placeholder="Name" />
              </div>
              
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
  );
}

// render(<Example />);
Example.propTypes = {
    register:PropTypes.object.isRequired,

  
};

const mapStateToProps = state =>({
    register:state.register
})

export default  connect(mapStateToProps)(Example);