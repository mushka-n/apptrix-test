import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import youTrackAPI from "../../API/youTrackAPI";
import Table from "../Elements/Table/Table";

const Timesheet = () => {
    const { id } = useParams();
    const [workItems, setWorkItems] = useState([]);

    const table = useRef(null);

    useEffect(() => {
        youTrackAPI.getWorkItems(id).then((data) => {
            setWorkItems(data);
        });
    }, []);

    const dateFromUnix = (unix_timestamp) => {
        return new Date(unix_timestamp).toLocaleDateString("en-UK");
    };

    const timeFromMinutes = (minutes) => {
        const h = Math.floor(minutes / 60);
        const m = minutes - h * 60;
        return h ? `${h} hours ${m} minutes` : `${m} minutes`;
    };

    return (
        <div className="container flex justify-center">
            {workItems.length ? (
                <div className="w-full flex flex-col xl:flex-row justify-around">
                    <div ref={table} className="mb-5 self-stretch">
                        <Table
                            arr={workItems}
                            cols={[
                                {
                                    key: "id",
                                    head: "ID",
                                    className: "table-body-row-text-id",
                                },
                                {
                                    key: "creator.name",
                                    head: "Name",
                                    className: "table-body-row-text",
                                },
                                {
                                    key: "date",
                                    head: "Date",
                                    className: "table-body-row-text",
                                    processData: dateFromUnix,
                                },
                                {
                                    key: "duration.minutes",
                                    head: "Duration",
                                    className: "table-body-row-text",
                                    processData: timeFromMinutes,
                                },
                            ]}
                        />
                    </div>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        {workItems.map((wi) => (
                            <li key={wi.id} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border-2 border-white dark:border-purple-800 dark:bg-purple-600"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                                    {dateFromUnix(wi.date)}
                                </time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                    {wi.creator.name}
                                </h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    {timeFromMinutes(wi.duration.minutes)}
                                </p>
                            </li>
                        ))}
                    </ol>
                </div>
            ) : (
                <div className="text-3xl my-5 dark:text-white">
                    No Work Items on this Issue yet
                </div>
            )}
        </div>
    );
};

export default Timesheet;
