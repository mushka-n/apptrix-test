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
            <div>
                <div className="mb-3">
                    <label htmlFor="password" className="input-label">
                        Username
                    </label>
                    <input
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                        placeholder={username}
                        className="input"
                    />
                </div>

                <div className="mb-5">
                    <label htmlFor="password" className="input-label">
                        Password
                    </label>
                    <input
                        id="password"
                        onChange={(e) => setPasswword(e.target.value)}
                        type="text"
                        placeholder={password}
                        className="input"
                    />
                </div>
            </div>
            <div className="w-full flex justify-end">
                <button className="navbar-btn" onClick={login}>
                    login
                </button>
            </div>
        </div>
    );
};

export default Authorization;
