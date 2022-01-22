import React, { useEffect, useState } from "react";
import youTrackAPI from "../../API/youTrackAPI";
import Autocomplete from "./Autocomplete";
import {
    reverseSort,
    sortProjectsByID,
    sortProjectsByName,
    sortProjectsBySummary,
} from "./sorts";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [displayedProjects, setDisplayedProjects] = useState([]);
    const [currSort, setCurrSort] = useState("");

    useEffect(() => {
        youTrackAPI.getProjects().then((data) => {
            setProjects(data);
            sortProjectsByID(data, setDisplayedProjects);
        });
    }, []);

    return (
        <div>
            <div>
                <Autocomplete
                    projects={[...projects]}
                    setDisplayedProjects={setDisplayedProjects}
                />
            </div>
            <div>
                <button
                    onClick={() => {
                        sortProjectsByID(
                            displayedProjects,
                            setDisplayedProjects
                        );
                        setCurrSort("id");
                    }}
                >
                    id
                </button>
                <button
                    onClick={() => {
                        sortProjectsBySummary(
                            displayedProjects,
                            setDisplayedProjects
                        );
                        setCurrSort("summary");
                    }}
                >
                    summary
                </button>
                <button
                    onClick={() => {
                        sortProjectsByName(
                            displayedProjects,
                            setDisplayedProjects
                        );
                        setCurrSort("name");
                    }}
                >
                    name
                </button>
                <button
                    onClick={() =>
                        reverseSort(displayedProjects, setDisplayedProjects)
                    }
                >
                    /\
                </button>
            </div>
            Projects
            {displayedProjects.map((p) => (
                <div key={p.id}>
                    {p.id} ||| {p.summary} ||| {p.project.name}
                </div>
            ))}
        </div>
    );
};

export default Projects;
