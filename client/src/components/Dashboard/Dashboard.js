import React from 'react'

import ListMentor from "./ListMentor"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InfoIcon from '@material-ui/icons/Info';
import application from "../../image/onboarding_trans.png"
import {Link} from "react-router-dom"



function Dashboard() {
    
    
    return (
       <div>
           <div className="row">
                   <h3>Active Aplications    <InfoIcon/></h3>
               <div className="col-lg-12 col-md-12 col-xs-12 card shadow">
                   <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-6 ">
                        <img src={application}/>

                        </div>
                        <br/>
                        <br/>
                        <div className="col-lg-6 col-md-6 col-xs-6 ">
                            <h3>Ooops!</h3>
                            <p>
                            You don't have any open applications yet. Once you've contacted a mentor, they will show up here!
                            </p>
                            <Link to="/mentor/find" className="btn btn-primary w-100">
                                Find Mentor
                            </Link>
                        </div>

                   </div>

               </div>

           </div>
            
       </div>  
    )
}

export default Dashboard;
