import {
    LOGIN_ROUTE,
    PROJECTS_ROUTE,
    TIMESHEET_ROUTE,
    USERS_ROUTE,
    USER_ROUTE,
} from "../../consts";
import Authorization from "../Authorization/Authorization";
import Projects from "../Projects/Projects";
import Timesheet from "../Timesheet/Timesheet";
import User from "../User/User";
import Users from "../Users/Users";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Authorization,
    },
];

export const authRoutes = [
    {
        path: USERS_ROUTE,
        Component: Users,
    },
    {
        path: USER_ROUTE + "/:id",
        Component: User,
    },
    {
        path: PROJECTS_ROUTE,
        Component: Projects,
    },
    {
        path: TIMESHEET_ROUTE + "/:id",
        Component: Timesheet,
    },
];
