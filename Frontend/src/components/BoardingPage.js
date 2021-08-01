import React  from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';
import BackgroundImage from './iconNew.jpg';
import { School } from '@material-ui/icons';
import GoogleLogin from 'react-google-login';


const BoardingPage = () => {

   const responseGoogle = (res) => {
    console.log(res.profileObj);
    let name = res.profileObj.name;
    let Email = res.profileObj.email;
    let url = res.profileObj.imageUrl;
    sessionStorage.setItem("name",name);
    sessionStorage.setItem("email",Email);
    sessionStorage.setItem("imgUrl",url);
    document.getElementById("start").innerHTML = "Get in " + name;
  }

    return (
        <div className="onboard">
            <ul>
              <li style={{position:'relative', right:'55rem'}}>
              <School htmlColor="white" style={{fontSize:'30px'}} ></School>&ensp;<span className="logo" style={{color:'white', fontWeight:'bold', fontSize:'16px',position:'relative',bottom:'8px'}}>EXAM PORTAL</span>
              </li>
            <li>
              <Link to="/" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">HOME</Button></Link>
              </li>
              <li> <Link to="/about" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">ABOUT</Button></Link>
              </li>
              <li>
              <Link to="/contact" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">CONTACT</Button></Link>
              </li>
            </ul>
            <div className="text">
              <h1>Online<br/> Exam Platform<br/> 
              <Link to="/dashboard" style={{textDecoration:'none',position:'relative',top:'3rem',width:'auto'}}><Button variant="outlined" id="start" >login with &ensp; <GoogleLogin clientId="135391839310-46gjrviehkfqfnicforkn0hv4m09odth.apps.googleusercontent.com" buttonText="" onSuccess={responseGoogle} onFailure={responseGoogle} cookiePolicy={'single_host_origin'} ></GoogleLogin> </Button></Link>
              {/* <Button variant="outlined"><span className="g-signin2" data-onsuccess="signOut" style={{position:'relative',left:'1rem'}}></span></Button> */}
              </h1>
             
            </div>
            <div style={{margin:'1.8rem 0 0 5.5rem',display:'flex',justifyContent:'flex-end'}}>
              <img src={BackgroundImage} alt="online exam" style={{borderRadius:"10%"}}/>
            </div>
                
           <div className="footer">
            <ul>
              <li> 
              </li>
            </ul>
            </div>
            
        </div>
    )
}

export default BoardingPage;
