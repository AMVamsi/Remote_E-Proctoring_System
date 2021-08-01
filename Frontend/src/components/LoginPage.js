import React from 'react';
import {
    InputAdornment,
    TextField,
    Button,
    Card,
    CardContent,
    FormControl,
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { Lock, AlternateEmail } from '@material-ui/icons';
import img from './backgroundNew.jpg';

const LoginPage = () => {

    return (
        <div className="loginPage">
            <div className="onboard">
            <ul>
            <li>
              <Link to="/signup" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">Register</Button></Link>
              </li>
             </ul>
            </div>
            <div><img src={img} alt="books" className="BG"/></div>
            <div className="login-section">

                <Card style={{width:'25rem', height:'30rem'}} variant="outlined">
                    <CardContent >
                        <div className="heading" style={{color: '#530c90'}}>
                        Sign In
                        </div><br/><br/>
                        <div className="heading"><Button className="g-signin2" data-onsuccess="onSignIn2"></Button>
                        </div>
                        <div className="input-section">
                            <span style={{textAlign:'center'}}><small>OR</small></span>
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
                            <FormControl><TextField
                            label="password"
                            className="input-bar"
                            InputProps={{
                                startAdornment: <InputAdornment position="start"><Lock></Lock></InputAdornment>,
                            }}
                            variant="outlined"
                            /></FormControl>
                            <div><Link to="/dashboard" style={{textDecoration:'none',position:'relative',top:'3rem'}}><Button variant="outlined">LOGIN</Button></Link></div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
        </div>
    )
}

export default LoginPage
