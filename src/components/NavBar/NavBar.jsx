import React from "react";
import { useNavigate } from "react-router";
import { LOGIN_ROUTE, PROJECTS_ROUTE, USERS_ROUTE } from "../../consts";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav className="flex justify-center bg-white border-gray-200 px-2 sm:px-4 py-3.5 dark:bg-gray-800 mb-4 text-center">
            <div className="container flex flex-row justify-around items-center">
                <ul className="flex flex-row justify-start items-center w-full space-x-4 text-sm font-medium last:justify-self-end">
                    <li>
                        <button
                            onClick={() => navigate(USERS_ROUTE)}
                            className="navbar-btn"
                            aria-current="page"
                        >
                            Users
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => navigate(PROJECTS_ROUTE)}
                            className="navbar-btn"
                        >
                            Projects
                        </button>
                    </li>
                </ul>
                <button
                    onClick={() => navigate(LOGIN_ROUTE)}
                    className="justify-self-end navbar-link whitespace-nowrap"
                >
                    Log In
                </button>
            </div>
        </nav>
        // <div>
        //     <button className="" onClick={() => navigate(LOGIN_ROUTE)}>
        //         LogIn
        //     </button>
        //     <button onClick={() => navigate(MAIN_ROUTE)}>main</button>
        //     <button onClick={() => navigate(USERS_ROUTE)}>users</button>
        //     <button onClick={() => navigate(PROJECTS_ROUTE)}>projects</button>
        //     <button onClick={() => navigate(TIMESHEETS_ROUTE)}>
        //         timesheets
        //     </button>
        // </div>
    );
};

export default NavBar;
