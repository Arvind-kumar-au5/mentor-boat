import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


function MentorForm() {

    // Hooks
    const [formData, setformData] = useState({

    })


    return (    
        <div>
            <div class="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="row">
                        <div class="col-lg-12 col-md-12 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <h2 style={{color:'black'}}>
                                            Personal Information 
                                    </h2> 
                                    <p>
                                    Let's introduce ourselves! You know us, we'd like to know who you are!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="row">
                        <div class="col-lg-6 col-md-6 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                <TextField id="standard-basic" label="First Name" style ={{width:'270px'}} />
                                </div>
                            </div>
                        </div>
                    <br/>
                    <div class="col-lg-6 col-md-6 col-xs-12 ">
                        <div class="panel panel-default">
                            <div class="panel-body">
                            <FormControl>
                                <InputLabel htmlFor="my-input"style ={{width:'270px'}} >Last Name</InputLabel>
                                <Input id="my-input" style ={{width:'270px'}} />
                            </FormControl>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div class="col-lg-12 col-md-3 col-xs-12">
                        <div class="panel panel-default">
                            <div class="panel-body">
                            <FormControl>
                                <InputLabel htmlFor="my-input" >Email</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" style ={{width:'570px'}} />
                                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
                            </FormControl>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12">
                        <div class="panel panel-default">
                            <div class="panel-body">
                            <FormControl>
                                <InputLabel htmlFor="my-input" >Job Title</InputLabel>
                                <Input id="my-input" aria-describedby="my-helper-text" style ={{width:'270px'}} placeholder="Example- Maths instructor  " />
                            </FormControl>
                            </div>
                        </div>
                    </div>
                        <div class="col-lg-6 col-md-6 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                <FormControl>
                                    <InputLabel id="label">Location </InputLabel>
                                    <Select labelId="label" id="select"  style ={{width:'270px'}} >
                                        <MenuItem value="10">Udaipur</MenuItem>
                                        <MenuItem value="20">Banglore</MenuItem>
                                        <MenuItem value="30">Mumbai</MenuItem>
                                        <MenuItem value="40">Delhi</MenuItem>
                                    </Select>  
                                </FormControl>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-6 col-xs-12">
                            <div class="panel panel-default">
                                <div class="panel-body">
                                    <FormControl>
                                        <InputLabel id="label">Higher Education </InputLabel>
                                        <Select labelId="label" id="select"  style ={{width:'270px'}}>
                                            <MenuItem value="10">12th</MenuItem>
                                            <MenuItem value="20">Bachelor</MenuItem>
                                        </Select>  
                                    </FormControl>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                <hr></hr>
              </div>
            <hr />
            <div className="row">
                    <div class="col-lg-6 col-md-6 col-xs-12">
                            <div className="row">
                                <div class="col-lg-12 col-md-12 col-xs-12">
                                    <div class="panel panel-default">
                                        <div class="panel-body">
                                            <h2 style={{color:'black'}}>
                                            Mentorship Questions
                                            </h2> 
                                            <p>
                                            We'd like to learn more about your skills, who you are and some more formalities. Take some time to craft your Bio since it'll be visible to potential mentees.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-xs-12 ">
                        <div className="row">
                            <div class="col-lg-6 col-md-6 col-xs-12 ">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                    <FormControl>
                                        <InputLabel id="label">CATEGORY </InputLabel>
                                        <Select labelId="label" id="select"  style ={{width:'270px'}}>
                                            <MenuItem value="10">JEE</MenuItem>
                                            <MenuItem value="20">GATE</MenuItem>
                                        </Select>  
                                    </FormControl>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                    <FormControl>
                                        <InputLabel htmlFor="my-input" >TAGS</InputLabel>
                                        <Input id="my-input" aria-describedby="my-helper-text" style ={{width:'270px'}} placeholder="Physics,maths,dsa" />
                                        <FormHelperText id="my-helper-text">Comma-separated list of your skills (keep it below 10). Mentees will use this to find you.</FormHelperText>
                                    </FormControl>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                    <FormControl>
                                        <InputLabel htmlFor="my-input" >MONTHLY FEE IN RS :</InputLabel>
                                        <Input id="my-input" aria-describedby="my-helper-text" style ={{width:'270px'}} />
                                        
                                    </FormControl>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-body ">
                                    <FormControl>
                                        <InputLabel htmlFor="my-input" >BIO:</InputLabel>
                                        <br/>
                                        <br/>
                                        <FormHelperText id="my-helper-text">Tell us (and your students) a little bit about yourself. This will be public. Please write any information your mentees might need in here. Also disclose if you want to mentor a specific minority. Keep it short, but not too short.</FormHelperText>

                                        <br/>
                                       
                                        <textarea className="textarea" name="description" cols="40" rows="5"  >
                                        </textarea>
                                    </FormControl>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12 col-xs-12">
                                <div class="panel panel-default">
                                    <div class="panel-body">
                                        <button className="btn btn-success mt-3" style={{background:'#304160',width:'120px'}}>Submit</button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
            </div>

        </div>
        

    )
}

export default MentorForm;