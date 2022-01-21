import axios from "axios";
import authAPI from "./authAPI";

// host //

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

$host.interceptors.request.use((config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem(
        "accessToken"
    )}`;
    return config;
});

$host.interceptors.response.use(
    (config) => {
        return config;
    },
    async (error) => {
        const originalRequest = error.config;
        if (
            error.response.status === 401 &&
            error.config &&
            !error.config._isRetry
        ) {
            originalRequest._isRetry = true;
            try {
                const response = await authAPI.refresh(
                    localStorage.getItem("refreshToken")
                );
                localStorage.setItem("accessToken", response.data.accessToken);
                return $host.request(originalRequest);
            } catch (e) {
                console.log("Refresh => Error\n", e);
            }
        }
        throw error;
    }
);

// youtrack //

const $youTrack = axios.create({
    baseURL: process.env.REACT_APP_YOUTRACK_API_URL,
    headers: {
        Authorization: `Bearer ${process.env.REACT_APP_YOUTRACK_API_TOKEN}`,
        Accept: "application/json",
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
    },
});

export { $host, $youTrack };
