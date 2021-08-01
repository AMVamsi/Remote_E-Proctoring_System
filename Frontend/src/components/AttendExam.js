import React, { Fragment, useContext,useEffect } from 'react'
import {
Button,
  Card,
  CardContent,
    FormControl,
} from '@material-ui/core';
import Navbar from "./Navbar";
import quiz from './question';
import ExamList from './examList';

const AttendExam = () => {

    let availableQues = [];
    let availableOpt = [];
    let totalOpt = [];
    let quesCounter = 0; 
    let currentQues = '';
    let score = 0;
    let count = 0;
    let percent = 0;
    let flag =0;
    let startTime = ExamList[0].duration;
    let timeout = startTime * 60;
    let username = sessionStorage.getItem('name');
    let email = sessionStorage.getItem('email');
    let course = ExamList[0].courseName;
    let courseId = ExamList[0].courseID;

    useEffect(() => {
        // getQuesList();
        // console.log(quesList);
        //eslint-disable-next-line
        setAvailableQues();
        getNewQues();
        setSessionStorage();
        setInterval(countDown, 1000);

        // console.log(quiz);
      }, []);

      const setSessionStorage = () =>{
        sessionStorage.setItem('course',course);
        sessionStorage.setItem('id',courseId);
      }

      const setAvailableQues = () => {
          const totalQuestion = quiz.length;
          for (let i = 0; i < totalQuestion; i++) {
            // console.log(quiz[i]);
            availableQues.push(quiz[i]);
            
          }
      }

      const getNewQues = () => {
        const quesIndex = availableQues[Math.floor(Math.random()*availableQues.length)];
        currentQues = quesIndex; 
        document.getElementById("quesNumber").innerHTML = "Question " + (quesCounter + 1) + " of " + quiz.length;
        document.getElementById("quesText").innerHTML = currentQues.q;
        // console.log(availableQues);
        //splice to remove the repeatition of question
        const index1 = availableQues.indexOf(quesIndex);
        availableQues.splice(index1,1);

        //set options
        //set option length
        const optionLen = currentQues.options.length;

        for(let i=0; i<optionLen ;i++){
          availableOpt.push(i);
          totalOpt.push(i);
          // console.log(totalOpt);

        }

        //   document.getElementById("0").innerHTML = currentQues.options[0] ;
        //   document.getElementById("1").innerHTML = currentQues.options[1] ;
        //   document.getElementById("2").innerHTML = currentQues.options[2] ;
        //   document.getElementById("3").innerHTML = currentQues.options[3] ;

        for(let i=0; i<optionLen ;i++){
          
          const optionIndex = availableOpt[Math.floor(Math.random() * availableOpt.length)];
          const index2 = availableOpt.indexOf(optionIndex);
          availableOpt.splice(index2,1);

          const option = document.createElement("button");
          option.innerHTML = currentQues.options[optionIndex];
          option.id = optionIndex;
          option.style.padding = "2rem 10rem";
          option.style.border = "none";
          option.style.fontSize = "24px";
          document.getElementById("quesOption").appendChild(option); 

        }

        document.getElementById("0").addEventListener('click',getResult0);
        document.getElementById("1").addEventListener('click',getResult1);
        document.getElementById("2").addEventListener('click',getResult2);
        document.getElementById("3").addEventListener('click',getResult3);

        quesCounter++;     
      }



      const getResult0 = () => {
          console.log(0);
          const id = 0;
          if(id === currentQues.answer){
            console.log("correct");
            count++;
            score += 10;          
          }else{
            console.log("wrong");
          }
          document.getElementById("0").style.backgroundColor = '#1f4068';
          document.getElementById("0").style.color = '#fff';
          document.getElementById("1").disabled = true;
          document.getElementById("2").disabled = true;
          document.getElementById("3").disabled = true;
          // document.getElementById(`Q${quesCounter}`).value = availableOpt[id];


      }

        const getResult1 = () => {
          console.log(1);
          const id = 1;
          if(id === currentQues.answer){
            console.log("correct");
            count++;
            score += 10;
          }else{
            console.log("wrong");
          }
          document.getElementById("1").style.backgroundColor = '#1f4068';
          document.getElementById("1").style.color = '#fff';
          document.getElementById("0").disabled = true;
          document.getElementById("2").disabled = true;
          document.getElementById("3").disabled = true;
          // document.getElementById(`Q${quesCounter}`).value = availableOpt[id];
      }

        const getResult2 = () => {
          console.log(2);
          const id = 2;
          if(id === currentQues.answer){
            console.log("correct");
            count++;
            score += 10;
          }else{
            console.log("wrong");
          }
          document.getElementById("2").style.backgroundColor = '#1f4068';
          document.getElementById("2").style.color = '#fff';
          document.getElementById("0").disabled = true;
          document.getElementById("1").disabled = true;
          document.getElementById("3").disabled = true;
          // document.getElementById(`Q${quesCounter}`).value = availableOpt[id];

      }

      const getResult3 = () => {
        console.log(3);
        const id = 3;
        if(id === currentQues.answer){
          console.log("correct");
          count++;
          score += 10;
        }else{
          console.log("wrong");
        }
        document.getElementById("3").style.backgroundColor = '#1f4068';
        document.getElementById("3").style.color = '#fff';
        document.getElementById("0").disabled = true;
        document.getElementById("1").disabled = true;
        document.getElementById("2").disabled = true;
        // document.getElementById(`Q${quesCounter}`).value = availableOpt[id];

    }

      const Next = () => {
        document.getElementById("quesOption").innerHTML = '';
        if(quesCounter === (quiz.length-1)){
          percent = (score/(quiz.length*10))*100;
          document.getElementById("next").innerHTML = "submit";
          document.getElementById("next").onclick = function(){
            examOver();
          }
        }
        if(quesCounter === quiz.length){
          console.log("exam over");
          percent = (score/(quiz.length*10))*100;
        }else{
          getNewQues();
        }
      }

      const examOver = () => {
        if(percent>=40){
          sessionStorage.setItem('score',score);
        document.getElementById("quesText").innerHTML = "<br/><br/>Woohoo exam DONE!<br/><br/><br/>";
        document.getElementById("result").innerHTML = "<h4> You answered <br/> <strong>" + (count) + " </strong> question(s) correct <br/><br/><br/>Your total Marks <strong>" + (score) + "</strong></h4>";
        }else{
          document.getElementById("quesText").innerHTML = "<br/><br/>Study Hard!<br/><br/><br/>";
          document.getElementById("result").innerHTML = " <h4>You answered <br/> <strong>" + (count) + " </strong> question(s) correct <br/><br/><br/>Your total Marks <strong>" + (score) + " </strong></h4>";
        }
        document.getElementById("next").style.display = 'none';
        document.getElementById("result").style.position = 'relative';
        document.getElementById("result").style.bottom = '3rem';
        // document.getElementById("score").value = parseString(score);

        // localStorage.setItem('name',JSON.stringify(username));
        // localStorage.setItem('email',JSON.stringify(email));
        // localStorage.setItem('course',JSON.stringify(course));
        // localStorage.setItem('Id',JSON.stringify(courseId));
        // localStorage.setItem('score',JSON.stringify(score));
        storeInLocalStorage();
        form();
      }

      const countDown = () => {
        let min = Math.floor(timeout / 60);
        let second = timeout % 60;

        second = second < 10 ? '0' + second : second;
        
        if(timeout==0){
          clearInterval(timeout<=0);
          document.getElementById('timeoutDiv').style.display = 'none';
          document.getElementById("quesOption").style.display = 'none'; 
          examOver();
        }else{
        document.getElementById('timeoutDiv').innerHTML = `${min}:${second}`;

        }
        timeout--;
      }

      const storeInLocalStorage = () => {
        let names ;
        let emails;
        let courses ;
        let Id ;
        let scores ;

        if(localStorage.getItem('name') === null){
            names = [];
        }else{
            names = JSON.parse(localStorage.getItem('name'));
        }

        if(localStorage.getItem('email') === null){
          emails = [];
        }else{
            emails = JSON.parse(localStorage.getItem('email'));
        }

        if(localStorage.getItem('course') === null){
            courses = [];
        }else{
            courses = JSON.parse(localStorage.getItem('course'));
        }

        if(localStorage.getItem('courseId') === null){
            Id = [];
        }else{
            Id = JSON.parse(localStorage.getItem('courseId'));
        }

        if(localStorage.getItem('score') === null){
            scores = [];
        }else{
            scores = JSON.parse(localStorage.getItem('score'));
        }

        names.push(username);
        emails.push(email);
        courses.push(course);
        Id.push(courseId);
        scores.push(score);

        for(let i =0;i<names.length;i++){
          if(email === emails[i]){
            flag = 1;
            console.log(emails[i]);
          }else{
            flag = 0;
          }
        }

        if(flag === 1){
          console.log("already registered");
        }else{
          localStorage.setItem('name', JSON.stringify(names));
            localStorage.setItem('email', JSON.stringify(emails));
            localStorage.setItem('course', JSON.stringify(courses));
            localStorage.setItem('courseId', JSON.stringify(Id));
            localStorage.setItem('score', JSON.stringify(scores));
        }

      }

      const form = () =>  {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwHcTS7mYUscUdd0vlNmnLwml10ULg-7xM1GSVJIDphejLd-XU/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
      }


    return (
        <Fragment>
            <Navbar/>
            <div className="workarea">
                <div className="tabAlign">
                <div className="card">
                      <h4 style={{position:'relative',left:'97%',bottom:'4rem'}}>10 for each correct answer</h4>
                      <Card style={cardHeight} ><CardContent>
                        <div id="cardContent">
                          <div className="navbar" style={{paddingBlock:'1rem'}}><h3 style={{color:'#fff',position:'relative',left:'2rem'}} id="quesNumber"></h3>
                          <Button style={time} variant="contained" id="timeoutDiv" disabled='true'></Button></div>
                            <div><h2 id="quesText" style={{textAlign:"center"}}></h2></div>
                            <FormControl component="fieldset" ><br/>
                                <div id="quesOption" style={gridGapOpt} ></div>
                            </FormControl>
                            <div id="result" style={{textAlign:'center'}}></div>
                            <div><Button variant="contained" onClick={Next} style={{position:'relative',top:'4rem',left:'48rem'}} id="next">Next</Button></div>
                              </div>
                              <div id="footer" style={{display:'none'}}>
                                <form name="google-sheet" method="post" autocomplete="off">
                                <div class="form-group">
                                            <input type="text" name="Name" class="form-control" placeholder="Your Name *" value={username} required=""/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="Email" class="form-control" placeholder="Your Email *" value={email} required=""/>
                                        </div>
                                        {/* <div class="form-group">
                                          <input type="text" id="Q1" name="Q1" class="form-control" value={}/>
                                        </div>
                                        <div class="form-group">
                                          <input type="text"  id="Q2" name="Q2" class="form-control" value={}/>
                                        </div>
                                        <div class="form-group">
                                          <input type="text" id="Q3" name="Q3" class="form-control" value={}/>
                                        </div> */}
                                        <div class="form-group">
                                          <input type="text" id="score" name="result" class="form-control" value={score}/>
                                        </div>
                                </form>
                              </div>
                        </CardContent></Card>
                      </div>
                    </div>
                  </div>
        </Fragment>  
    )
}

export default AttendExam;

  const gridGapOpt = {
    display: "grid",
    gridTemplateColumns: "repeat(2,2fr)",
    gridGap: "3rem",
    position: "relative",
    left: "6.5rem",
  };

const cardHeight = {
    height: "40rem",
    width:'auto',
    fontSize: "20px",
    letterSpacing: "2px",
    // width: "30rem",
    position:"relative",
    right:"5%",
    bottom: '6rem',
}

const time = {
  display:'flex',
  float:'right',
  alignItems:'center',
  backgroundColor:'white',
  color:'black',
  padding:'0 2rem',
  fontSize:'20px'
}