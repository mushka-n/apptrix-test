import { $host } from "./index";

export default class authAPI {
    static async login(username, password) {
        const { data } = await $host
            .post("api/token/", {
                username,
                password,
            })
            .catch((e) => {
                console.log("Login => Error\n", e);
                localStorage.clear();
            });
        return data;
    }

    static async refresh(refreshToken) {
        const { data } = await $host
            .post("api/token/refresh/", {
                refresh: refreshToken,
            })
            .catch(() => {
                console.log("Refresh => Refresh Token Expired");
                localStorage.clear();
            });
        return data;
    }
}
