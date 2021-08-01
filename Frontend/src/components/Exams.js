import React, { Fragment } from 'react';
import LeftNav from './LeftNav';
import Navbar from './Navbar';
import {
    Button,
    Modal,
    TextField
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import errorImg from './401-error-unauthorized-concept-illustration_114360-1922.jpg';
import AuthorityImg from './authority.jpg';
import { CancelRounded } from '@material-ui/icons';

const Exams = () => {
    const pin = 'admin@123';

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const move = () => {
        setOpen(false);
        let pwd = document.getElementById("pinInput").value;
        console.log(pwd);
        if(pwd === pin){
            document.getElementById("img").innerHTML = `<img src=${AuthorityImg} alt='401error' width='700px' height='600px' >`;
            document.getElementById("pwd").style.display = 'none';
            document.getElementById("img").style.display = 'flex';
            document.getElementById("img").style.justifyContent = 'center';
            document.getElementById("img").style.alignContent = 'center';
            document.getElementById("door").style.display = 'flex';
            document.getElementById("door").style.justifyContent = 'center';
            document.getElementById("door").style.alignContent = 'center';


          }else{
              document.getElementById("pwd").style.display = 'flex';
              document.getElementById("pwd").style.justifyContent = 'center';
              document.getElementById("pwd").style.alignContent = 'center';
            document.getElementById("pwd").innerHTML = `<img src=${errorImg} alt='401error' width='700px' height='600px' >`;
            document.getElementById("pwd").style.position = 'relative';
            document.getElementById("pwd").style.bottom = '5rem';

          }
    }

    const close = () => {
        setOpen(false);
    }

      const body = (
        <div  style={block}>
          <div style={{position:'relative',right:'-25%'}}><Button onClick={close} variant="outlined" style={{backgroundColor:'white'}}><CancelRounded></CancelRounded></Button></div>
          <h2 id="simple-modal-title" style={{color:'white'}} >PassWord</h2><br/>
            <div>
                <TextField style={{padding:'1rem'}} id="pinInput" type="password"></TextField>
            </div>
            <div>
            <Button type="submit" onClick={move} style={{padding:'5px 4rem',backgroundColor:'#fff',color:'#000'}}>submit</Button>
            </div>
        </div>
      );

    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <div style={block} id="pwd">
                <Button variant="contained" type="button" onClick={handleOpen}>
                    Click to Enter Passcode
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
            <div id="img"></div>
            <div id="door" style={block2}><Link to="/createExam" style={{textDecoration:'none'}}><Button variant="contained"><h4>Hello Admin!<br/> Get In</h4></Button></Link></div>
        </Fragment>
    )
}

export default Exams;

const block = {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    paddingBlock:'10rem',
    flexDirection:'column',
}
const block2 = {
    display: 'none',
}
