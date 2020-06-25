import React, { Fragment ,useState} from 'react';
import PropTypes from 'prop-types';






const ProfileItem = ({profile}) => {
    console.log(profile)
   
        
   
 
       
    
    
  return (
    <Fragment>
      
            <div className="row">
          
               
                <div className="col-lg-12 col-md-12 col-xs-12 card shadow mt-3">
                    <div className="row">
                        {/* Todo -profile handle */}
                        {/* <div className="col-lg-4 col-md-4 col-xs-12"> 
                        <figure className="image is-96x96 is-round profile-image profile-photo-edit" style={{verticalAlign:'top',marginBottom:"200px"}}>
                                    <p><img src="../../image/no-profile.png"/></p>
                        </figure>

                        </div> */}
                        <div className="col-lg-6 col-md-4 col-xs-12">
                                <h3 className="title is-4 title-blue nametag ml-3" style={{fontSize: '1.2rem', fontWeight: 'bold'}}> {profile.first_name}  {profile.last_name} 
                                </h3>
                                <span className="has-text-grey ml-3" style={{fontSize: '1.1rem', fontWeight: '500'}}>{profile.job_title}</span>
                                <div className="tags" style={{marginTop: '15px'}}>
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
                           
                                
                                <div className="tags" style={{marginTop: '2rem'}}>
                                    
                                    
                                    
                                   
                                    
                                </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-xs-12">
                                Price
                        </div>
                    </div>
                    

                </div>

            </div>
      
    </Fragment>
  );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};



export default ProfileItem