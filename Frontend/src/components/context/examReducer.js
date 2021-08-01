import {
    GET_COURSEID,
    GET_COURSENAME,
    GET_DATE,
    GET_DURATION,
    GET_EXAMNAME,
    GET_TOTALQUES,
    GET_TOTALMARKS,
    GET_TIME,
    GET_EXAMLIST,
    GET_QUESLIST,
    GET_USERNAME,
    GET_EMAIL,
    GET_URL

} from '../types';

export default(state,action) => {
    switch(action.type){
        case GET_EXAMNAME:
            return{
                ...state,
                examName: action.payload,
            }
        case GET_COURSENAME:
            return{
                ...state,
                courseName: action.payload
            }
        case GET_COURSEID:
            return{
                ...state,
                courseId: action.payload
            }
        case GET_DATE:
            return{
                ...state,
                date: action.payload
            }
        case GET_TIME:
            return{
                ...state,
                time: action.payload
            }
        case GET_DURATION:
            return{
                ...state,
                duration: action.payload
            }
        case GET_TOTALQUES:
            return{
                ...state,
                totalQues: action.payload 
            }
        case GET_TOTALMARKS:
            return{
                ...state,
                totalMarks: action.payload 
            }
        case GET_EXAMLIST:
            return{
                ...state,
                examList: action.payload
            }
        case GET_QUESLIST:
            return{
                ...state,
                quesList: action.payload
            }
        case GET_USERNAME:
            return{
                ...state,
                username: action.payload
            }
        case GET_EMAIL:
            return{
                ...state,
                email: action.payload
            }
        case GET_URL:
            return{
                ...state,
                imgUrl: action.payload
            }

        default:
            return state
    }
}
