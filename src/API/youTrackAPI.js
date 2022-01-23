import { $youTrack } from ".";

export default class youTrackAPI {
    static async getUsers() {
        const { data } = await $youTrack.get(
            `${process.env.REACT_APP_YOUTRACK_API_URL}users/?fields=id,name,login,email`
        );
        return data;
    }

    static async getProjects() {
        const { data } = await $youTrack.get(
            `${process.env.REACT_APP_YOUTRACK_API_URL}issues?fields=id,summary,project(name)`
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
