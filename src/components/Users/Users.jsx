import { useState, useEffect } from "react";
import youTrackAPI from "../../API/youTrackAPI";
import { USER_ROUTE } from "../../consts";
import Table from "../Elements/Table/Table";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        youTrackAPI.getUsers().then((data) => setUsers(data));
    }, []);

    return (
        <Table
            arr={users}
            cols={[
                {
                    key: "id",
                    head: "ID",
                    className: "table-body-row-text-id",
                },
                {
                    key: "name",
                    head: "Name",
                    className: "table-body-row-text",
                },
                {
                    key: "login",
                    head: "Login",
                    className: "table-body-row-text",
                },
                {
                    key: "email",
                    head: "Email",
                    className: "table-body-row-text",
                },
                {
                    isLink: true,
                    href: `${USER_ROUTE}/[id]`,
                    text: "Profile",
                    head: "",
                    className: "table-body-row-link",
                },
            ]}
        />
    );
};

export default Users;
