
import React, { Fragment, useEffect,useState } from 'react';
import {connect} from "react-redux"
import {getProfiles} from "../../actions/Profile"
import PropTypes from 'prop-types';
import Spinner from "../Layout/Spinner"
import ProfileItem from "./ProfileItem"
import {Link} from "react-router-dom"

function ListMentors({ getProfiles, profile: { profiles, loading } }) {
    useEffect(() => {
        getProfiles();
      }, [getProfiles]);
      
      const [Search, setSearch] = useState("")
   
      // Search onchange 
        const onChange = (e)=>{
          setSearch({[e.target.name]:e.target.value})
        }
    return (

        <Fragment>
            
                <h2>Find Mentor</h2>
                    <form id="home-search">
                      
                      <input type="text" name="search" placeholder="Try &quot;OS &quot; or &quot;Physics &quot;" autoComplete="off" tabIndex="1" id="autocomplete" onChange={onChange}/>
                      <Link to={`/search/?q=${Search.search}`}>
                          <button type="submit" >Find my mentor</button>
                      </Link>
                    </form>
                {loading ? (
                <Spinner />
            ) : (
                <Fragment>
                <div>

                <p className='lead'>
                    <i className='fab fa-connectdevelop' /> Browse and connect with
                    mentors
                </p>
                <div className='profiles'>
                    {profiles.length > 0 ? (
                    profiles.map(profile => (
                        <ProfileItem key={profile._id} profile={profile} />
                       
                    ))
                    ) : (
                    <h4>No profiles found...</h4>
                    )}
                </div>
                </div>
                </Fragment>
            )}
           
        </Fragment>
    )
}
ListMentors.propTypes = {
    getProfiles: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(
    mapStateToProps,
    { getProfiles }
  )(ListMentors);
