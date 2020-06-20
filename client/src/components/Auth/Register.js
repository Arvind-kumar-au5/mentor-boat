import React ,{useState}from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from "react-router-dom"
import {setValidation} from "../../actions/validation"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// function Google() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//         <Button color="primary" variant="contained">Login with google</Button>
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn= ({setValidation})=> {
  const classes = useStyles();

  const [formData,setForm] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })
   
  const {name,email,password,password2} = formData

  // onchange
  const onChange =(e)=>{
      setForm({...formData,[e.target.name]:e.target.value})
  }

  // submit data
  const onSubmit = async(e) =>{
    e.preventDefault()
    if(password ==! password2){
    setValidation('Password not match','danger')
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up as a mentee
        </Typography>
        <form className={classes.form} noValidate onSubmit={onSubmit}>
          <TextField
            variant = "outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name "
            name="name"
            value={name}
            onChange={onChange}
            autoFocus
          />
          <TextField
            variant = "outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="email;"
            type="email"
            value={email}
            onChange={onChange}
            id="email"
          />
          <TextField
            variant = "outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="password;"
            type="password"
            id="password"
          />
          <TextField
            variant = "outlined"
            margin="normal"
            required
            fullWidth
            name="password2"
            label="confirm password;"
            type="password"
            value={password2}
            onChange={onChange}
            id="cpassword"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/login" variant="body2">
                {"have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      {/* <Box mt={6}>
        <Google />
      </Box> */}
      
    </Container>
  );
}

SignIn.propTypes = {
  setValidation: PropTypes.func.isRequired,

};

export default connect(null,{setValidation}) (SignIn)