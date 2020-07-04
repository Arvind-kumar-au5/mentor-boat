import React,{useEffect,useState,Fragment} from 'react'
import {connect} from "react-redux"
import PropTypes from "prop-types";
import axios from "axios"
import Spinner from "../Layout/Spinner"

function Request({ mentor:{mentor} }) {
    
    // get All requests
    useEffect(() => {
        getRequest()
      }, [getRequest])
      const token = localStorage.getItem("token");
      const [Request, setRequest] = useState([])
      const [loading , setloading] = useState(true)
      const [acceped,setAcceped] = useState(false)

      const handleClick = () =>{
          setAcceped(true)
      }
      
      const getRequest = () => {
          
          if(mentor){
  
              let request = axios({
                    method: "GET",
                    url: `/api/applications/${mentor.first_name} ${mentor.last_name}`,
                    headers: {
                          "x-auth-token": token
                    },
              });
              request.then(res => {
                    console.log(res)
                    setRequest(res.data)
                    setloading(false)
              })
          }
    }



    return (
        <div className="">
            {loading ? <Fragment>
                <Spinner/>
            </Fragment>:
            <Fragment>
            <h3>Total request {Request.length}</h3>
            {Request.map((req,index)=>{
                return <div className="row" >
                   
                    <div className="col-lg-8 col-md-8 col-xs-12 card shadow ">
                
                    <span className="text-primary">Your Mentee Request from </span><b>{req.name}</b>
                    <b>{req.email}</b>
                    <span>{req.bio}</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-12  mt-5">
                        {acceped ? <Fragment>
                            <button onClick={handleClick(index)} className="btn btn-outline-primary" disabled>Accepted </button>    
                        </Fragment>:<Fragment>
                            <button className="btn btn-outline-primary">Accept </button>    
                        </Fragment>}
                        <button className="btn btn-outline-danger">Reject</button> 
                    </div>
                    <div className="col-lg-2 col-md-2 col-xs-12  mt-3">
                   
                    </div>
              
                </div>
            })}
            </Fragment>}
        </div>
    )
}



Request.propTypes = {
    mentor :PropTypes.object.isRequired,
  };
  
  
  const mapStateToProps = state => ({
      mentor: state.mentor
  });
  
  export default connect(mapStateToProps) (Request);