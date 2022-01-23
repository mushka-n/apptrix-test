import { $youTrack } from ".";

export default class youTrackAPI {
    static async getUsers() {
        const { data } = await $youTrack.get(
            `users/?fields=id,name,login,email`
        );
        return data;
    }

    static async getUser(id) {
        const { data } = await $youTrack.get(
            `users/${id}/?fields=id,name,login,email`
        );
        return data;
    }
    static async getProjects() {
        const { data } = await $youTrack.get(
            `issues?fields=id,summary,project(name)`
        );
        return data;
    }

    static async getWorkItems(issueId) {
        const { data } = await $youTrack.get(
            `issues/${issueId}/timeTracking/workItems?fields=id,creator(name),date,duration(minutes)`
        );
        return data;
    }
}

youTrackAPI.getUser("1-64").then((data) => console.log(data));
