import { useState, useEffect } from "react";
import youTrackAPI from "../../API/youTrackAPI";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        youTrackAPI.getUsers().then((data) => setUsers(data));
    }, []);

    return (
        <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-md sm:rounded-lg">
                        <table class="min-w-full">
                            <thead class="table-head">
                                <tr>
                                    <th scope="col" class="table-head-text">
                                        ID
                                    </th>
                                    <th scope="col" class="table-head-text">
                                        Name
                                    </th>
                                    <th scope="col" class="table-head-text">
                                        Login
                                    </th>
                                    <th scope="col" class="table-head-text">
                                        Email
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u) => (
                                    <tr class="table-body-row">
                                        <td class="table-body-row-text-id">
                                            {u.id}
                                        </td>
                                        <td class="table-body-row-text">
                                            {u.name}
                                        </td>
                                        <td class="table-body-row-text">
                                            {u.name}
                                        </td>
                                        <td class="table-body-row-text">
                                            {u.name}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
