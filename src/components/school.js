import React from "react";
import { NavLink, Outlet } from "react-router-dom";
export default function School(){


    return(
    <div>
       This is school page......  
       <ul>
        <li>
            <NavLink to="teacher">Teacher</NavLink>
        </li>
        <li>
            <NavLink to="student">Student</NavLink>
        </li>
       </ul>
       {/* The outlet is used to shoe the content of child route */}
       <Outlet />
       </div>

    );
};