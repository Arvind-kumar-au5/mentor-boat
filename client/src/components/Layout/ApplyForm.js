import React, { Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
import FormHelperText from "@material-ui/core/FormHelperText"
import PropTypes from 'prop-types';
import {connect} from "react-redux"


function ApplyForm({register:{isAuthenticated,user}}) {
    return (
        <div>
           
            <div className="row card shadow ml-1">
            <h4 style ={{textAlign:'center'}} className="text-primary mt-2">Mentorship Registeration </h4>
                <div className="col-lg-12 col-md-12 col-xs-12 mt-3">
                    {isAuthenticated ? 
                    <Fragment>
                        <TextField id="standard-basic" label="Name" style ={{width:'270px'}} name="Name" value= {user.name}/>
                    </Fragment>:
                    <Fragment>
                            <TextField id="standard-basic" label="Name" style ={{width:'270px'}} name="Name"/>
                    </Fragment>
                }
                    
                    
                </div>
                <div className="col-lg-12 col-md-12 col-xs-12 mt-3">
                    {isAuthenticated ? 
                    <Fragment>
                        <TextField id="standard-basic" label="Email" style ={{width:'270px'}} name="Email" type="email" value ={user.email}/>
                    </Fragment>:
                    <Fragment>
                        <TextField id="standard-basic" label="Email" style ={{width:'270px'}} name="Email" type="email" />

                    </Fragment>}
                </div>
                <br/>
                <div className="col-lg-12 col-md-12 col-xs-12 mt-5">
                    <FormHelperText id="my-helper-text">Tell us (and your students) a little bit about yourself. This will be public. Please write any information your mentees might need in here. Also disclose if you want to mentor a specific minority. Keep it short, but not too short.</FormHelperText>
                    <textarea className="textarea" name="description" cols="40" rows="5"  
                        name = "bio"
                    >
                    </textarea>
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 ">
                        <div class="panel panel-default">
                            <div class="panel-body mt-3">
                                <button className="btn btn-success mb-3" style={{background:'#304160',width:'120px'}}>Submit</button>
                            </div>
                        </div>
                </div> 
                </div>
                <div class="col-lg-12 col-md-12 col-xs-12 ">
                        
                </div> 
               
                
                <br/>
                <br/>
        </div>
    )
}
ApplyForm.propTypes = {
    register: PropTypes.func.isRequired,
  };
  
  const mapStateToProps = state=>({
      register:state.register
  })
  
  export default connect(mapStateToProps)(ApplyForm) 

