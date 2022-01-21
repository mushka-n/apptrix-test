import { $youTrack } from ".";

export default class youTrackAPI {
    static async getUsers() {
        const { data } = await $youTrack.get(
            `${process.env.REACT_APP_YOUTRACK_API_URL}users/?fields=id,name,login,email`,
            {
                headers: {
                    Accept: "application/json",
                    "Cache-Control": "no-cache",
                },
            }
        );
        return data;
    }
}