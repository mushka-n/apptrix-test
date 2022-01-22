import React, { useEffect, useState } from "react";
import youTrackAPI from "../../API/youTrackAPI";
import Autocomplete from "./Autocomplete";
import {
    sortProjectsByID,
    sortProjectsByName,
    sortProjectsBySummary,
} from "./sorts";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [projectNames, setProjectNames] = useState([]);

    useEffect(() => {
        youTrackAPI.getProjects().then((data) => {
            setProjects(data);
            setProjectNames(data.map((p) => p.project.name));
        });
    }, []);

    return (
        <div>
            <div>
                <Autocomplete projects={projects} />
            </div>
            <div>
                <button onClick={() => sortProjectsByID(projects, setProjects)}>
                    id
                </button>
                <button
                    onClick={() => sortProjectsBySummary(projects, setProjects)}
                >
                    summary
                </button>
                <button
                    onClick={() => sortProjectsByName(projects, setProjects)}
                >
                    name
                </button>
                <button>/\</button>
            </div>
            Projects
            {projects.map((p) => (
                <div key={p.id}>
                    {p.id} ||| {p.summary} ||| {p.project.name}
                </div>
            ))}
        </div>
    );
};

export default Projects;
