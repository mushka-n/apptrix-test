import React from "react";
import { useNavigate } from "react-router";
import {
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PROJECTS_ROUTE,
    TIMESHEETS_ROUTE,
    USERS_ROUTE,
} from "../../consts";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate(LOGIN_ROUTE)}>LogIn</button>
            <button onClick={() => navigate(MAIN_ROUTE)}>main</button>
            <button onClick={() => navigate(USERS_ROUTE)}>users</button>
            <button onClick={() => navigate(PROJECTS_ROUTE)}>projects</button>
            <button onClick={() => navigate(TIMESHEETS_ROUTE)}>
                timesheets
            </button>
        </div>
    );
};

export default NavBar;
