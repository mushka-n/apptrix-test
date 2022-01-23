import React, { useEffect, useState } from "react";
import youTrackAPI from "../../API/youTrackAPI";
import { TIMESHEET_ROUTE } from "../../consts";
import ArrowDown from "../../images/svgs/ArrowDown";
import Table from "../Elements/Table/Table";
import Autocomplete from "../Elements/Autocomplete";
import {
    reverseSort,
    sortProjectsByID,
    sortProjectsByName,
    sortProjectsBySummary,
} from "./sorts";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [displayedProjects, setDisplayedProjects] = useState([]);

    const [toggle, setToggle] = useState("rotate-0");
    const toggleReverseSort = () => {
        if (toggle === "rotate-0") setToggle("rotate-180");
        else setToggle("rotate-0");
    };

    useEffect(() => {
        youTrackAPI.getProjects().then((data) => {
            setProjects(data);
            sortProjectsByID(data.reverse(), setDisplayedProjects);
        });
    }, []);

    return (
        <div className="mt-2 mb-4">
            <div className="mb-3">
                <Autocomplete
                    projects={[...projects]}
                    setDisplayedProjects={setDisplayedProjects}
                />
            </div>
            <div
                className="flex flex-row justify-around space-x-0.5 rounded-md my-3"
                role="group"
            >
                <div>
                    {[
                        {
                            text: "ID",
                            fun: sortProjectsByID,
                            className: "filters-button rounded-l-md",
                        },
                        {
                            text: "Summary",
                            fun: sortProjectsBySummary,
                            className: "filters-button",
                        },
                        {
                            text: "Name",
                            fun: sortProjectsByName,
                            className: "filters-button rounded-r-md",
                        },
                    ].map((fb) => (
                        <button
                            type="button"
                            className={fb.className}
                            onClick={() => {
                                setToggle("rotate-0");
                                fb.fun(displayedProjects, setDisplayedProjects);
                            }}
                        >
                            {fb.text}
                        </button>
                    ))}
                </div>

                <div className="ml-10">
                    <button
                        className="filters-button rounded-md h-full"
                        onClick={() => {
                            reverseSort(
                                displayedProjects,
                                setDisplayedProjects
                            );
                            toggleReverseSort();
                        }}
                    >
                        <div
                            className={`${toggle} transition ease-in duration-100 w-5 h-full p-0.5 `}
                        >
                            <ArrowDown
                                className={"h-full w-full"}
                                fill="#d5d5d5"
                            />
                        </div>
                    </button>
                </div>
            </div>

            <Table
                arr={displayedProjects}
                cols={[
                    {
                        key: "id",
                        head: "ID",
                        className: "table-body-row-text-id",
                    },
                    {
                        key: "summary",
                        head: "Summary",
                        className: "table-body-row-text",
                    },
                    {
                        key: "project.name",
                        head: "Project Name",
                        className: "table-body-row-text",
                    },
                    {
                        isLink: true,
                        href: `${TIMESHEET_ROUTE}/[id]`,
                        text: "Timesheet",
                        head: "",
                        className: "table-body-row-link",
                    },
                ]}
            />
        </div>
    );
};

export default Projects;
