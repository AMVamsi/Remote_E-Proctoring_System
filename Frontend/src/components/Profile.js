import React, {Fragment, useEffect} from 'react';
import Navbar from './Navbar';
import LeftNav from './LeftNav';
import {
    Button,
    Card,
  CardContent
} from '@material-ui/core';
import Avatar from "./yogocat_animation.gif";
import {Link} from 'react-router-dom';

const Profile = () => {
    
  let username = '';
  let email = '';
  let ImgUrl = '';

    useEffect(() => {
        username = sessionStorage.getItem('name');
        email = sessionStorage.getItem('email');
        ImgUrl = sessionStorage.getItem('imgUrl');
        console.log(username);
        console.log(email);
        console.log(ImgUrl);
        setprofile(username,email,ImgUrl);
    }, []);

    const setprofile = (name,email,url) => {
        
        document.getElementById("username").innerHTML = name;
        // document.getElementById("email").innerHTML = email;
        // document.getElementById("avatar").innerHTML = url;
    }

    

    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <div className="workarea">
                <div className="createExamBtn"><Link to="/editProfile" style={{textDecoration:'none'}}> <Button variant="contained">Edit Profile</Button></Link></div>

                <div className="tabAlign">
                <div style={{display: "grid", gridTemplateColumns: "repeat(3,1fr)", gridGap: "5rem"}}>
                    <img src={ImgUrl} alt="avatar" id="avatar" style={{width:"20rem", height:"20rem", borderRadius:"50%", border:"2px solid black"}} />
                    <div style={{padding:"1rem 0"}}>
                        <div style={{padding:"1rem", fontSize:"22px", fontWeight:"bold"}} id="username">
                            <div style={styling} id="email"></div>
                        </div>
                    </div>
                </div><br/><br/>
                {/* <div style={gridGap}>
                    <Card style={{height: "20rem"}}><CardContent></CardContent></Card>
                    <Card><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card>
                </div> */}
                </div>
            </div>
        </Fragment>
    )
}

export default Profile;

const gridGap = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "2rem",
  };

const styling = {
    padding:"1rem",
    fontWeight:"lighter", 
    fontFamily:"monospace",
    fontSize:"16px"
};
