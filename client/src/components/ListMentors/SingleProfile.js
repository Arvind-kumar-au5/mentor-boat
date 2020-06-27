import React,{Fragment,useEffect}from 'react'
import PropTypes from 'prop-types'
import {connect} from "react-redux"
import {getProfileById} from "../../actions/Profile"
import {Link} from "react-router-dom"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


function SingleProfile({getProfileById,match,profile}) {
    console.log(profile.tags)
    useEffect(() => {
      getProfileById(match.params.id)
    }, [getProfileById,match.params.id])
    return (
        <Fragment>

        <Link to="/mentor/find" className="mr-5 mt-5" style={{color:'black' ,fontSize:'1.00rem',marginLeft:'-10px'}}>
            <ArrowBackIosIcon/> BACK TO MENTORS 
        </Link>
        <div className="row ">
           
            <div className="col-lg-9 col-md-9 col-xs-6 card shadow mt-5" style={{border:'2px solid #d0dce6'}}>
                
                <h3 className="title is-4 title-blue nametag mt-3" style={{fontSize: '1.2rem', fontWeight: 'bold'}}> {profile.first_name}  {profile.last_name} </h3>
                <span  className="mr-3"><LocationOnIcon style ={{color:'#00d1b2!important'}} /> {profile.location}</span>
                <span style={{fontSize: '1.25rem', fontWeight: '500',color:'#304160!important'}}>{profile.job_title}</span>
                <div className="tags " style={{marginTop: '15px'}}>
                    <span className="tag is-medium">💻 Personal Chat</span>
                    <span className="tag is-medium">📝 To-Dos</span>
                    <span className="tag is-medium">🏆 Projects &amp; Challenges</span>
                    <span className="tag is-medium">📞 1-on-1 Calls
                    &nbsp;(10x/mo)
                    </span>
                    <span class="tag is-medium">🛎 Hands-On Support</span>
                </div>
                {profile.bio ? (
                    <p>{profile.bio}</p>
                    ) : (
                    <h4></h4>
                )}


            </div>

            <div className="col-lg-3 col-md-3 col-xs-6 mt-5">
                <p id="price-indicator-detail">
                ₹{profile.monthly_fee}
                    <br/>
                    <h3 className="ml-4">per month</h3>
                </p>
                <br/>
                <Link to='/mentorship/apply' className='btn btn-primary w-100' >
                    Apply for Mentorship
                </Link>

                <br/>
                <hr/>
                <br/>
                <p class="mentordetail-section-title">Skills taught by mentor</p>
                <div className="tags" style={{marginTop: '1rem'}}>
                    {profile.tags}
                </div>

            </div>
            
        </div>
        </Fragment>
    )
}

SingleProfile.propTypes = {
    getProfileById:PropTypes.func.isRequired,
    profile : PropTypes.object.isRequired,

}
const mapStateToProps = state => ({
    profile: state.profile.profile
});

export default connect(mapStateToProps,{getProfileById})(SingleProfile)

