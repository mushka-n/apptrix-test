import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import youTrackAPI from "../../API/youTrackAPI";
import Table from "../Elements/Table";

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        youTrackAPI.getUser(id).then((data) => setUser(data));
        console.log(user);
    }, []);

    return (
        <div>
            <Table
                arr={[user]}
                cols={[
                    {
                        key: "id",
                        head: "ID",
                        className: "table-body-row-text-id",
                    },
                    {
                        key: "$type",
                        head: "type",
                        className: "table-body-row-text",
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
                ]}
            />
        </div>
    );
};

export default User;
