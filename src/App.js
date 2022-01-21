import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import authAPI from "./API/authAPI";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem("refreshToken")) {
            authAPI
                .refresh(localStorage.getItem("refreshToken"))
                .then((result) => {
                    localStorage.setItem("accessToken", result.access);
                    console.log("Refresh => Success");
                })
                .catch((e) => {
                    console.log("Refresh => Error\n", e);
                })
                .finally(setIsLoading(false));
        } else {
            console.log("Refresh => No Refresh Token");
            setIsLoading(false);
        }
    }, []);

    if (isLoading) return <div> You are not authtorized</div>;

    return (
        <BrowserRouter>
            <NavBar />
            <AppRouter />
        </BrowserRouter>
    );
}

export default App;
