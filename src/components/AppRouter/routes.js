import {
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PROJECTS_ROUTE,
    TIMESHEETS_ROUTE,
    USERS_ROUTE,
} from "../../consts";
import Authorization from "../Authorization/Authorization";
import Main from "../Main/Main";
import Projects from "../Projects/Projects";
import Timesheets from "../Timesheets/Timesheets";
import Users from "../Users/Users";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Authorization,
    },
];

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: USERS_ROUTE,
        Component: Users,
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects,
    },
    {
        path: TIMESHEETS_ROUTE,
        Component: Timesheets,
    },
];
