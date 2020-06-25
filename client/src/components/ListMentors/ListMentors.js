
import React, { Fragment, useEffect,useState } from 'react';
import {connect} from "react-redux"
import {getProfiles} from "../../actions/Profile"
import PropTypes from 'prop-types';
import Spinner from "../Layout/Spinner"
import ProfileItem from "./ProfileItem"

function ListMentors({ getProfiles, profile: { profiles, loading } }) {
    useEffect(() => {
        getProfiles();
      }, [getProfiles]);
      

    
    
        


      console.log(profiles)
    return (

        <div>
            
                <h2>Find Mentor</h2>
                <form id="home-search">
                <input type="text" name="search" placeholder="Try &quot;OS Learning&quot; or &quot;Physics &quot;" autocomplete="off" tabindex="1" id="autocomplete"/>
                <button type="submit">Find my mentor</button>
                </form>
                {loading ? (
                <Spinner />
            ) : (
                <Fragment>
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
                </Fragment>
            )}
           
        </div>
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
