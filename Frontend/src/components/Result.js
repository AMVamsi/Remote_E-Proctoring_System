import React , {useEffect} from 'react';
import{
    Card,
    CardContent,
    Table,
    TableHead,
    TableRow
} from '@material-ui/core';
import Navbar from './Navbar';
import LeftNav from './LeftNav';

const Result = () => {

    let StudentList = [];
    let names ;
    let emails  ;
    let courses ;
    let Id ;
    let scores ;




    useEffect(() => {
        names = sessionStorage.getItem('name');
        emails = sessionStorage.getItem('email') ;
        courses = sessionStorage.getItem('course');
        Id = sessionStorage.getItem('id');
        scores = sessionStorage.getItem('score');
        console.log(names);
        console.log(emails);
        console.log(courses);
        console.log(Id);
        console.log(scores);
        getStudentList();
        displayList();
        // eslint-disable-next-line
    }, []);

    const displayList = () => {
        let row = document.createElement('tr');
        row.id = 'row';
        let data1 = document.createElement('td');
        data1.innerHTML = names;
        let data2 = document.createElement('td');
        data2.innerHTML = emails;
        let data3 = document.createElement('td');
        data3.innerHTML = courses;
        let data4 = document.createElement('td');
        data4.innerHTML = Id;
        let data5 = document.createElement('td');
        data5.innerHTML = scores;
        document.getElementById('tableData').appendChild(row);
        document.getElementById('row').appendChild(data1);
        document.getElementById('row').appendChild(data2);
        document.getElementById('row').appendChild(data3);
        document.getElementById('row').appendChild(data4);
        document.getElementById('row').appendChild(data5);
    }

    const getStudentList = () => {
        const obj = {
            username : names,
            email : emails,
            course : courses,
            courseId : Id,
            score : scores
        }
        StudentList.push(obj);
        console.log(StudentList);
    }

    // const getStudentList= () => {
    //     if(localStorage.getItem('name') === null){
    //         names = [];
    //     }else{
    //         names = JSON.parse(localStorage.getItem('name'));
    //     }

    //     if(localStorage.getItem('email') === null){
    //         emails = [];
    //     }else{
    //         emails = JSON.parse(localStorage.getItem('email'));
    //     }

    //     if(localStorage.getItem('course') === null){
    //         courses = [];
    //     }else{
    //         courses = JSON.parse(localStorage.getItem('course'));
    //     }

    //     if(localStorage.getItem('courseId') === null){
    //         Id = [];
    //     }else{
    //         Id = JSON.parse(localStorage.getItem('courseId'));
    //     }

    //     if(localStorage.getItem('score') === null){
    //         scores = [];
    //     }else{
    //         scores = JSON.parse(localStorage.getItem('score'));
    //     }

    //     for(let i=0;i<names.length;i++){
    //         console.log(names[i]);
    //         console.log(emails[i]);
    //         console.log(courses[i]);
    //         console.log(Id[i]);
    //         console.log(scores[i]);
    //         const obj = {
    //             username : names[i],
    //             email : emails[i],
    //             course : courses[i],
    //             courseId : Id[i],
    //             score : scores[i]
    //         }
    //         StudentList.push(obj);
    //     }

    //     console.log(StudentList);
    // }

    return (
        <div>
            <Navbar/>
            <LeftNav/>
            <Card className="table" variant="outlined" style={{width:"910px"}}>
                    <CardContent>
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <td>Student Name</td>
                                    <td align="right">Gmail</td>
                                    <td align="right">Course Name</td>
                                    <td align="right">Course ID</td>
                                    <td align="right">Result</td>
                                </TableRow>
                            </TableHead>
                        </Table>
                    </CardContent>
                </Card><br/>
                <table className="table" >
                        <tbody id="tableData">
                              {StudentList.map(data => (

                                <tr>
                                  <td>{data.username}</td>
                                  <td align="right">{data.email}</td>
                                  <td align="right">{data.course}</td>
                                  <td align="right">{data.courseId}</td>
                                  <td align="right">{data.score}</td>

                                </tr>
                              ))}
                        </tbody>
                </table>

        </div>
    )
}

export default Result
