import { useState, useEffect } from "react";
import youTrackAPI from "../../API/youTrackAPI";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        youTrackAPI.getUsers().then((data) => setUsers(data));
    }, []);

    return (
        <div>
            USERS
            {users.map((u) => (
                <div>
                    {u.id}, {u.name}, {u.login}, {u.email}
                </div>
            ))}
        </div>
    );
};

export default Users;
