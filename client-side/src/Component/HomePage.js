import { Link } from "react-router-dom";
import React from "react";
function HomePage(){
    return(
        <div>
            <h1>Home Page</h1>
            <ul>
                <li><Link to="/department">Departments</Link></li>
                <li><Link to="/employee">Employees</Link></li>
            </ul>
        </div>
    )   
}

export default HomePage;