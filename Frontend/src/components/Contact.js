import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core';

const Contact = () => {

    const changetext = () => {
        document.getElementById("sent").innerHTML = 'DONE';
        document.getElementById("sent").disable = 'true';
        document.getElementById("sent").onmouseout = (changetextagain);
    }

    const changetextagain = () => {
        document.getElementById('sent').innerHTML = 'SEND';
    }

    const [text, setText] = useState('');

    const onsubmit = (e) => {
        console.log(text);
        e.preventDefault();
    }


    return (
        <div id="contactDiv">
            <div className="onboard" style={{color:'white' }}>
            <h2 style={{float:'left'}}>CONTACT</h2>
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
            <div className="container">
                <form onSubmit={onsubmit}>
                <h1>comment</h1>
                <p>Oops! that's bad you have faced an issue but you can discuss it with us.</p>
                <p><textarea type="text" defaultValue="" style={{fontSize:'20px'}} rows="12" cols="40" onChange={event => setText(event.target.value)} /></p>
                <p><Button variant="outlined" type="submit" id="sent" onClick={changetext}>SEND</Button></p>
                </form>
            </div>
        </div>
    )
}

export default Contact

