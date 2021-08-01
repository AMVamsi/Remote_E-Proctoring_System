import React, {useReducer} from 'react';
import ExamContext from "./examContext";
import ExamReducer from "./examReducer";
import axios from "axios"; 

import {
    GET_COURSENAME,
    GET_EXAMNAME,
    GET_COURSEID,
    GET_DATE,
    GET_TIME,
    GET_DURATION,
    GET_TOTALQUES,
    GET_EXAMLIST,
    GET_QUESLIST,
    GET_TOTALMARKS,
    GET_USERNAME,
    GET_EMAIL,
    GET_URL
} from '../types';

const ExamState = (props) => {
    const initialState = {
        examType: 'objective',
        examName: "",
        // date: Date.now(),
        date: '',
        time: '',
        duration: 0,
        totalQues: 0,
        courseName: '',
        courseId: '',
        totalMarks: '',
        examList: [],
        quesList:[],
        username: '',
        email: '',
        imgUrl: '',
        // // monitoring: false,
        // // negativeMarking: false,
        // questions: [],
        // examinees: [],
        // currQues: 1,
        // question: '',
        // optionA: '',
        // optionB: '',
        // optionC: '',
        // optionD: '',
        // options: [],
        // emails: ''
    };

    const [state, dispatch] = useReducer(ExamReducer, initialState);

    const getExamList = async () => {
        const res = await axios.get(
           '../examList.json'
          );

        dispatch({
            type: GET_EXAMLIST,
            payload: res.data,
          });
    }

    const getQuesList = async () => {
        const res = await axios.get(
            'https://localhost:44386/api/QuesTable'
          );

        dispatch({
            type: GET_QUESLIST,
            payload: res.data,
          });
    }

    const AddExam = async (obj) => {

        const res = await axios.post(
            'https://localhost:44386/api/ExamTable', obj
          );

        console.log(res.data);
    }

    const getExamName = (text) => {
        dispatch({ 
            type: GET_EXAMNAME, 
            payload: {text},
        });
    }

    const getCourseName = (text) => {
        dispatch({ 
            type: GET_COURSENAME, 
            payload: {text},
        });
    }

    const getCourseId = (text) => {
        dispatch({ 
            type: GET_COURSEID, 
            payload: {text},
        });
    }

    const getDate = (text) => {
        dispatch({ 
            type: GET_DATE, 
            payload: {text},
        });
    }

    const getTime = (text) => {
        dispatch({ 
            type: GET_TIME, 
            payload: {text},
        });
    }

    const getDuration = (text) => {
        dispatch({ 
            type: GET_DURATION, 
            payload: {text},
        });
    }

    const getTotalQues = (text) => {
        dispatch({ 
            type: GET_TOTALQUES, 
            payload: {text},
        });
    }

    const getTotalMarks = (text) => {
        dispatch({ 
            type: GET_TOTALMARKS, 
            payload: {text},
        });
    }

    const getUsername = (text) => {
        dispatch({ 
            type: GET_USERNAME, 
            payload: {text},
        });
    }

    const getEmail = (text) => {
        dispatch({ 
            type: GET_EMAIL, 
            payload: {text},
        });
    }

    const getImgUrl = (text) => {
        dispatch({ 
            type: GET_URL, 
            payload: {text},
        });
    }

    return (
        <ExamContext.Provider 
        value={{examType:state.examType,
        examName: state.examName,
        date: state.date,
        duration: state.duration,
        courseName: state.courseName,
        courseId: state.courseId,
        time: state.time,
        totalQues: state.totalQues,
        totalMarks: state.totalMarks,
        examList: state.examList,
        quesList: state.quesList,
        username: state.username,
        email: state.email,
        imgUrl: state.imgUrl,
        getExamName,
        getCourseName,
        getCourseId,
        getDate,
        getTime,
        getDuration,
        getTotalQues,
        getTotalMarks,
        getExamList,
        getQuesList,
        getUsername,
        getEmail,
        getImgUrl,
        AddExam
        }}>
            {props.children}
        </ExamContext.Provider>
    )
}

export default ExamState;
