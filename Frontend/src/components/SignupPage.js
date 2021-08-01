import React from 'react';
import {
    InputAdornment,
    TextField,
    Button,
    Card,
    CardContent,
    FormControl,
    Switch,
    IconButton,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { Lock,Person, AlternateEmail, 
    Visibility,
    VisibilityOff} from '@material-ui/icons';
import img from './backgroundNew.jpg';

const SignupPage = () => {

    const [state, setState] = React.useState({
        checkedB: false,
      });

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
      });
    
      const handleChangesSwitch = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };

      const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div className="loginPage">
            <div className="onboard">
            <ul>
            <li>
              <Link to="/login" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">Login</Button></Link>
              </li>
             </ul>
            </div>
            <div><img src={img} alt="books" className="BG" /></div>
            
            <div className="signup-section">

                <Card style={{width:'25rem', height:'30rem'}} variant="outlined">
                    <CardContent >
                        <div className="heading" style={{color: '#530c90'}}>
                        Sign Up
                        </div>
                        <div className="input-section">
                                <FormControl>
                                    <TextField
                            label="email"
                            className="input-bar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><AlternateEmail></AlternateEmail></InputAdornment>,
                            }}
                            variant="outlined"
                                />
                                </FormControl>
                                <FormControl>
                                    <TextField
                                        label="username"
                                        className="input-bar"
                                        InputProps={{
                                            startAdornment: <InputAdornment position="start"><Person></Person></InputAdornment>,
                                        }}
                                        variant="outlined" />
                                </FormControl>
                            <FormControl><TextField
                            label="password"
                            className="input-bar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Lock></Lock></InputAdornment>,
                                endAdornment: 
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        size="small"
                                      >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                    </InputAdornment>
                            }}
                            variant="outlined"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange('password')}
                            
                            /></FormControl>
                           <div style={{marginTop:"1rem"}}><small>Signing as</small></div>
                            <div style={{display:"flex",alignItems:"center",justifyContent:"space-around",marginTop:"1rem"}}>
                                <span >Teacher</span>
                                <Switch
                                    checked={state.checkedB}
                                    onChange={handleChangesSwitch}
                                    color="primary"
                                    name="checkedB"
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                                <span >Student</span>
                            </div>
                        
                            <div><Link to="/dashboard" style={{textDecoration:'none',position:'relative',top:'3rem'}}><Button variant="outlined">Register</Button></Link></div>
                        </div>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

export default SignupPage
