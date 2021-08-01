import React from 'react';
import logo from './logo.png';
// import avatar from './yogocat_animation.gif';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import SearchIcon from '@material-ui/icons/Search';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
import gapi from 'react-google-login';

const Navbar = () => {

//     const responseGoogle = (res) => {
// console.log(res);
// console.log(res.profileObj);
//     }

let username = sessionStorage.getItem('name');
let email = sessionStorage.getItem('email');
let ImgUrl = sessionStorage.getItem('imgUrl');


const signOut = () => {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

    return (
        <div className="navbar">
            <div className="title"><img src={logo} alt="logo" id="logoImg"></img>&ensp;<span className="logo">EXAM PORTAL</span></div>
            <ul>
                {/* <li><SearchIcon></SearchIcon></li>
                <li><Badge color="error" invisible="true" showZero="false" overlap="circle" badgeContent={6}></Badge><NotificationsIcon></NotificationsIcon></li> */}
                <li>
                    
                </li>
                <li>
                    <div style={{display:"flex",flexDirection:'row'}}><div><img src={ImgUrl} alt="avatar"  style={{width:"2rem", height:"2rem", borderRadius:"50%"}}/>&ensp;</div>
                    <div >{username}
                    <div>{email}
                        </div></div></div>
                </li>
                <li>
                    <Link to="/" style={{textDecoration: 'none'}}><Button variant="outlined" color="white" ><ExitToAppRoundedIcon></ExitToAppRoundedIcon>&ensp;Logout</Button></Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
