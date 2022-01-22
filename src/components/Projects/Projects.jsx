import React, { useEffect, useState } from "react";
import youTrackAPI from "../../API/youTrackAPI";
import ArrowDown from "../../images/svgs/ArrowDown";
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

    const [toggle, setToggle] = useState([true, "auto-rows-[0px]", "rotate-0"]);
    const toggleReverseSort = () => {
        if (toggle[0]) setToggle([false, "auto-rows-auto", "rotate-180"]);
        else setToggle([true, "auto-rows-[0px]", "rotate-0"]);
    };

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
            <div
                class="flex flex-row justify-around space-x-0.5 rounded-md my-3"
                role="group"
            >
                <div>
                    <button
                        type="button"
                        class="filters-button rounded-l-md"
                        onClick={() => {
                            sortProjectsByID(
                                displayedProjects,
                                setDisplayedProjects
                            );
                        }}
                    >
                        ID
                    </button>
                    <button
                        type="button"
                        class="filters-button"
                        onClick={() => {
                            sortProjectsBySummary(
                                displayedProjects,
                                setDisplayedProjects
                            );
                        }}
                    >
                        Summary
                    </button>
                    <button
                        type="button"
                        class="filters-button rounded-r-md"
                        onClick={() => {
                            sortProjectsByName(
                                displayedProjects,
                                setDisplayedProjects
                            );
                        }}
                    >
                        Name
                    </button>
                </div>

                <div className="ml-10">
                    <button
                        className={`filters-button rounded-md h-full
                        transition ease-in duration-100 `}
                        onClick={() => {
                            reverseSort(
                                displayedProjects,
                                setDisplayedProjects
                            );
                            toggleReverseSort();
                        }}
                    >
                        <div
                            className={`
                                ${toggle[2]} 
                                transition ease-in duration-100
                                w-5 h-full
                            `}
                        >
                            <ArrowDown
                                className={"h-full w-full"}
                                fill="#d5d5d5"
                            />
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block py-2 min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden shadow-md sm:rounded-lg">
                            <table class="min-w-full">
                                <thead class="table-head">
                                    <tr>
                                        <th scope="col" class="table-head-text">
                                            ID
                                        </th>
                                        <th scope="col" class="table-head-text">
                                            Summary
                                        </th>
                                        <th scope="col" class="table-head-text">
                                            Project Name
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {displayedProjects.map((p) => (
                                        <tr class="table-body-row">
                                            <td class="table-body-row-text-id">
                                                {p.id}
                                            </td>
                                            <td class="table-body-row-text">
                                                {p.summary}
                                            </td>
                                            <td class="table-body-row-text">
                                                {p.project.name}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
