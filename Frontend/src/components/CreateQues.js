import React from 'react'
import {
    Input,
    FormControlLabel,
    Radio,
    Button,
    FormControl,
    RadioGroup,
    Card,
    CardContent,
    CardHeader
} from '@material-ui/core';
import Navbar from './Navbar';
import LeftNav from './LeftNav';
import {Link} from 'react-router-dom';
import Axios from 'axios';

const CreateQues = (totalQues) => {
    const [value,setValue] = React.useState(null);
    const [question, setQuestion] = React.useState(null);
    const [opA, setOpA] = React.useState(null);
    const [opB, setOpB] = React.useState(null);
    const [opC, setOpC] = React.useState(null);
    const [opD, setOpD] = React.useState(null);

    const handleChangeradio = (event) => {
        setValue(event.target.value);
      };

      const handleQn = (event) => {
        setQuestion(event.target.value);
      }

      const handleOpAVal = (event) => {
        setOpA(event.target.value);
      }

      const handleOpBVal = (event) => {
        setOpB(event.target.value);
      }

      const handleOpCVal = (event) => {
        setOpC(event.target.value);
      }

      const handleOpDVal = (event) => {
        setOpD(event.target.value);
      }

      const handleSubmit = (event) => {
        if(!question && !value && !opA && !opB && !opC && !opD){
          return ;
        }
        event.preventDefault();
        const obj = {
          "qn": question,
          "answer" : value,
          "optionA": opA,
          "optionB": opB,
          "optionC": opC,
          "optionD": opD
        }

        Axios.post("https://605b7c1227f0050017c07451.mockapi.io/api/v1/qns", obj)
        .then((response) => {
          setValue("");
          setQuestion("");
          setOpA("");
          setOpB("");
          setOpC("");
          setOpD("");
        })
      }

    //   const handleOpen1 = () => {
    //     setOpen1(true);
    //   };

    //   const handleClose1 = () => {
    //     setOpen1(false);
    //   };

    return (
      <div>
        <Navbar/>
        <LeftNav/>
      <div className="tabAlign">
        <Card>
        <CardHeader title="Schedule Exam"> </CardHeader>
          <CardContent>
          <p id="transition-modal-description">
          <table>
            <tbody>
              <tr><td>Question</td><td><textarea required id="standard-required" value={question} onChange={handleQn} label="question" variant="outlined" rows="5" cols="60" type="text" style={{fontSize:'18px'}} /></td></tr><br/><br/>
              <tr><td>options</td><td>
              <FormControl component="fieldset" >
                <RadioGroup name="" value={value} onChange={handleChangeradio} style={{display:"inline-flex",flexWrap:"wrap",flexFlow:"row"}}>
                  <FormControlLabel value="A" control={<Radio />} label="A" /><Input value={opA} onChange={handleOpAVal} type="text"/>
                  <FormControlLabel value="B" control={<Radio />} label="B" /><Input value={opB} onChange={handleOpBVal} type="text"/>
                  <FormControlLabel value="C" control={<Radio />} label="C" /><Input value={opC} onChange={handleOpCVal} type="text"/>
                  <FormControlLabel value="D" control={<Radio />} label="D" /><Input value={opD} onChange={handleOpDVal} type="text"/>
                </RadioGroup>
              </FormControl></td></tr>
              <td><Link to="/dashboard" style={{textDecoration:'none'}}><Button variant="contained" onClick={handleSubmit}>Submit</Button></Link></td>
            </tbody>
          </table>
          </p>
          </CardContent>
        </Card>
      </div>
      </div>
    )
}

export default CreateQues
