import { Button } from '@material-ui/core'
import React from 'react';
import {Link} from 'react-router-dom';

const LeftNav = () => {
    return (
        <div className="leftpanel">
            <ul>
                <li><Link to="/dashboard" style={{textDecoration:'none'}}><Button variant="contained">Dashboard</Button></Link></li>
            </ul>
            <ul>
                <li><Link to="/exams" style={{textDecoration:'none'}}><Button variant="contained">Exams</Button></Link></li>
                <li><Link to="/result" style={{textDecoration:'none'}}><Button variant="contained">Result</Button></Link></li>

            </ul>
      </div>
    )
}
export default LeftNav;

