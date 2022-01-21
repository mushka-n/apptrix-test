import React, { useState } from "react";
import authAPI from "../../API/authAPI";

const Authorization = () => {
    const [username, setUsername] = useState("erp_user");
    const [password, setPasswword] = useState("12qwaszx12qwaszx");

    const login = async () => {
        const data = await authAPI.login(username, password).catch((e) => {
            console.log("Login => Error\n", e);
            return;
        });
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        console.log("Login => Success");
    };

    return (
        <div>
            <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder={username}
            />
            <input
                onChange={(e) => setPasswword(e.target.value)}
                type="text"
                placeholder={password}
            />
            <button onClick={login}>login</button>
        </div>
    );
};

export default Authorization;
