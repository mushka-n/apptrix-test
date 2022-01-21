import React, { useEffect, useState } from "react";
import youTrackAPI from "../../API/youTrackAPI";

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        youTrackAPI.getProjects().then((data) => setProjects(data));
    }, []);

    return (
        <div>
            Projects
            {projects.map((p) => (
                <div key={p.id}>
                    {p.id}, {p.summary}, {p.project.name}
                </div>
            ))}
        </div>
    );
};

export default Projects;
