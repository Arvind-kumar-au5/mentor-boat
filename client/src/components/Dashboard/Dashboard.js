import React,{useState,useEffect, Fragment} from 'react'
import axios from "axios"
import "react-multi-carousel/lib/styles.css";
import InfoIcon from '@material-ui/icons/Info';
import application from "../../image/onboarding_trans.png"
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import {loadUser} from "../../actions/auth"
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';



function Dashboard({register:{user},loadUser}) {
    useEffect(() => {
      getApplication()
    }, [])
    let history = useHistory();
    const token = localStorage.getItem("token");

    const [applied,setapplied] = useState([])
    
    const getApplication = () => {
        
        if(user){

            let request = axios({
                  method: "GET",
                  url: `/api/applications/request/${user.name}`,
                  headers: {
                        "x-auth-token": token
                  },
            });
            request.then(res => {
                  console.log(res)
                  setapplied(res.data)
                  history.push('/dashboard')
                  
            })
        }
  }


    // Fetch applied Application
    
    return (
       <div>
           
           <div className="row">
                   <h3>Active Aplications    <InfoIcon/></h3>
               <div className="col-lg-12 col-md-12 col-xs-12 card shadow">
                   <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-6 ">
                        <img src={application} alt={application}/>

                        </div>
                        <br/>
                        <br/>
                        <div><button className="btn btn-outline-info w-80" onClick={()=>window.location.reload()}>Load Application</button></div>
                        {applied ? <Fragment>
                            {applied && applied.map((application,index)=>{
                            return <div className="col-lg-12 col-md-12 col-xs-12 mt-2 card shadow " key = {index}>
                           <h4>You applied {application.mentorName}</h4> 
                           <br/>
                           <br/>
                            <span style={{color:"yellow",fontSize:'20px'}}>Your Status is Pending....</span>
                            </div>
                            
                        })}

                        </Fragment> 
                        : 
                        <Fragment>
                        <div className="col-lg-6 col-md-6 col-xs-6 ">
                            <h3>Ooops!</h3>
                            <p>
                            You don't have any open applications yet. Once you've contacted a mentor, they will show up here!
                            </p>
                            <Link to="/mentor/find" className="btn btn-primary w-100">
                                Find Mentor
                            </Link>
                        </div>

                        </Fragment>}
                        
                        
                       

                   </div>

               </div>

           </div>
            
       </div>  
    )
}

Dashboard.propTypes = {
    register:PropTypes.object.isRequired,
    loadUser :PropTypes.func.isRequired,

  
};

const mapStateToProps = state =>({
    register:state.register
})

export default  connect(mapStateToProps,{loadUser})(Dashboard);