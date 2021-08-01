import React from 'react';
import notFoundImg from './notfound.jpg';
import {
    Link
} from 'react-router-dom';
import {
    Button
} from '@material-ui/core';

const NotFound = () => {
    return (
        <div className="notfound">
            <div className="onboard" style={{color:'white' }}>
            <h2 style={{float:'left'}}>NOT FOUND</h2>
            <ul>
            <li>
              <Link to="/" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">HOME</Button></Link>
              </li>
              <li> <Link to="/about" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">ABOUT</Button></Link>
              </li>
              <li>
              <Link to="/contact" style={{textDecoration:'none', fontWeight:'lighter'}}><Button variant="outlined">CONTACT</Button></Link>
              </li>
            </ul>
            </div>
            <img src={notFoundImg} alt="notfound" width="1200px" height="600px" style={{position:'relative',left:'9rem',top:'1rem'}}></img>
            <div className="notfoundDiv"><Link to="/" style={{textDecoration:'none',float:'right', position:'relative',right:'3rem',bottom:'1rem'}}> <Button variant="contained" id="notfoundBtn">Back to Home Page</Button></Link></div>
            
        </div>
    )
}

export default NotFound
