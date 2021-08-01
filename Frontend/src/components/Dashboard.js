import React, { Fragment, useContext,useEffect } from 'react'
import {
Button,
// Table,
//   TableHead,
//   TableRow,
  Card,
  CardContent
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import Navbar from "./Navbar";
import LeftNav from "./LeftNav";
import ExamContext from "./context/examContext";
import ExamList from './examList';
import examLogo from './giphy (2).gif';

const Dashboard = () => {
    const examContext = useContext(ExamContext);

    // const { getExamList, examList } = examContext;

    let availableExams = [];

    useEffect(() => {
        // getExamList();
        // console.log(examList);
        //eslint-disable-next-line
        Check();
        setAvailableExams();
        // getExamList();
        console.log({ExamList});
      }, []);


      const Check = () => {
        //   const card3 = document.getElementById('card3');
        //   if(ExamList[2] === null){
        //      card3.style.display = 'none';
        //   }else{
        //       card3.style.display = 'block';
        //   }
      }

    const setAvailableExams = () => {
        for (let index = 0; index < ExamList.length; index++) {
            availableExams.push(ExamList[index]);    
            // console.log(availableExams);          
        }
    }

    return (
        <Fragment>
            <Navbar/>
            <LeftNav/>
            <div className="workarea">
                <div className="createExamBtn"><Link to="/exams" style={{textDecoration:'none'}}> <Button variant="contained">Create Question Bank</Button></Link></div>
                
                <div className="tabAlign">
                <div style={gridGap}>
                   {/* {{availableExams}.forEach(data => { */}
                       {/* <Card style={cardHeight} ><CardContent>
                       <div id="examlist">
                           <h4 id="examname"></h4>
                           <div id="coursename"></div>
                           <div id="courseid"></div>
                           <div id="date"></div>
                           <div id="time"></div>
                           <div id="duration"></div>
                           <div id="marks"></div> */}
                           {/* <h4 style={{color:'#530c90', textAlign:'center'}}><strong>{data.examName}</strong></h4>
                       {data.courseName}<br/>
                       {data.courseID}<br/>
                       {data.date}<br/>
                       {data.startTime}<br/>
                       {data.duration}<br/> */}
                       {/* </div><br/>
                       <div className="createExamBtn"><Link to="/attendExam" style={{textDecoration:'none',position:'relative',top:'3rem'}}> <Button variant="contained" >Attend Exam</Button></Link>
                       </div>
                 </CardContent></Card> */}
                        
                    {/* // })}; */}
                            {/* {ExamList.map(data => ( */}
                                <Card style={cardHeight} ><CardContent>
                              <div><h4 style={{color:'#530c90', textAlign:'center'}}><strong>{ExamList[0].examName}</strong></h4>
                              <div style={{display:'flex',flexDirection:'row',paddingLeft:'1rem'}}><img src={examLogo} style={{borderRadius:'100%'}} width="120px" height="80px"></img>
                              <div style={{display:'flex',flexDirection:'column',padding:'1rem 0 0 1rem'}}><span style={{textAlign:'center',float:'right'}}>{ExamList[0].courseName}</span><span style={{textAlign:'center',float:'right'}}>{ExamList[0].courseID}</span><br/></div>
                              </div><br></br>
                              <small>exam date <span style={{textAlign:'center',float:'right'}}>{ExamList[0].date}</span><br/></small>
                              <small>time <span style={{textAlign:'center',float:'right'}}>{ExamList[0].startTime}</span><br/></small>
                              <small>duration<span style={{textAlign:'center',float:'right'}}>{ExamList[0].duration}</span> <br/></small>
                              <small>marks <span style={{textAlign:'center',float:'right'}}>{ExamList[0].totalMarks}</span><br/></small>
                              </div><br/>
                              <div className="createExamBtn"><Link to="/attendExam" style={{textDecoration:'none',position:'relative',top:'3rem'}}> <Button variant="contained" id={ExamList[0].examID}>Attend Exam</Button></Link></div>
                        </CardContent></Card>
                        <Card style={cardHeight} ><CardContent>
                              <div><h4 style={{color:'#530c90', textAlign:'center'}}><strong>{ExamList[1].examName}</strong></h4>
                              <div style={{display:'flex',flexDirection:'row',paddingLeft:'1rem'}}><img src={examLogo} style={{borderRadius:'100%'}} width="120px" height="80px"></img>
                              <div style={{display:'flex',flexDirection:'column',padding:'1rem 0 0 1rem'}}><span style={{textAlign:'center',float:'right'}}>{ExamList[1].courseName}</span><span style={{textAlign:'center',float:'right'}}>{ExamList[1].courseID}</span><br/></div></div><br/>
                              <small>exam date <span style={{textAlign:'center',float:'right'}}>{ExamList[1].date}</span><br/></small>
                              <small>time <span style={{textAlign:'center',float:'right'}}>{ExamList[1].startTime}</span><br/></small>
                              <small>duration<span style={{textAlign:'center',float:'right'}}>{ExamList[1].duration} min</span> <br/></small>
                              <small>marks <span style={{textAlign:'center',float:'right'}}>{ExamList[1].totalMarks}</span><br/></small>
                              </div><br/>
                              <div className="createExamBtn"><Link to="/attendExam2" style={{textDecoration:'none',position:'relative',top:'3rem'}}> <Button variant="contained" id={ExamList[1].examID}>Attend Exam</Button></Link></div>
                        </CardContent></Card>
                        {/* <Card style={cardHeight} id="card3"><CardContent> */}
                              {/* <div><h4 style={{color:'#530c90', textAlign:'center'}}><strong>{ExamList[2].examName}</strong></h4>
                              course: <span style={{textAlign:'center'}}>{ExamList[2].courseName}</span><br/>
                              code: <span style={{textAlign:'center'}}>{ExamList[2].courseID}</span><br/>
                              exam date: <span style={{textAlign:'center'}}>{ExamList[2].date}</span><br/>
                              time: <span style={{textAlign:'center'}}>{ExamList[2].startTime}</span><br/>
                              duration:<span style={{textAlign:'center'}}>{ExamList[2].duration}</span> <br/>
                              marks: <span style={{textAlign:'center'}}>{ExamList[2].totalMarks}</span><br/>
                              </div><br/>
                              <div className="createExamBtn"><Link to="/attendExam2" style={{textDecoration:'none',position:'relative',top:'3rem'}}> <Button variant="contained" id={ExamList[2].examID}>Attend Exam</Button></Link></div> */}
                        {/* </CardContent></Card> */}

                            {/* ))} */}
                    {/* <Card><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card>
                    <Card style={cardHeight}><CardContent>done</CardContent></Card>
                    <Card><CardContent>done</CardContent></Card> */}
                </div><br/><br/>
                {/* <Card className="table" variant="outlined" style={{width:"910px"}}>
                    <CardContent>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <td>Exam Name</td>
                                    <td align="right">Course Name</td>
                                    <td align="right">Course Id</td>
                                    <td align="right">Exam Date</td>
                                    <td align="right">Start Time</td>
                                    <td align="right">Duration</td>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </CardContent>
                </Card><br/>
                <table className="table">
                        <tbody>
                          {examList.map(data => (
                              <tr>
                              <td>{data.examName}</td>
                              <td align="right">{data.courseName}</td>
                              <td align="right">{data.course_ID}</td>
                              <td align="right">{data.DOE}</td>
                              <td align="right">{data.startTime}</td>
                              <td align="right">{data.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                        </table> */}
                </div>
            </div>
        </Fragment>  
    )
}

export default Dashboard;

const gridGap = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gridGap: "2rem",
  };

const cardHeight = {
    // height: "20rem",
    height: 'auto',
    fontSize: "20px",
    letterSpacing: "2px",
}
