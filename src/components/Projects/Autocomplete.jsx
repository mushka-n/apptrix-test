import React, { Fragment } from "react";
import { useState } from "react";

const Autocomplete = ({ projects, setDisplayedProjects }) => {
    const suggestions = [...new Set(projects.map((p) => p.project.name))];
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");

    const getProjectsFromName = (projects, name) => {
        return projects.filter((p) => p.project.name === name);
    };

    const getProjectsfromSuggestions = (projects, suggestions) => {
        return projects.filter((p) => suggestions.includes(p.project.name));
    };

    const onChange = (e) => {
        const userInput = e.target.value;

        const filteredSuggestions = suggestions.filter(
            (suggestion) =>
                suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );

        setActiveSuggestion(0);
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setUserInput(e.target.value);
        setDisplayedProjects(
            getProjectsfromSuggestions(projects, filteredSuggestions)
        );
    };

    const onClick = (e) => {
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        setUserInput(e.target.innerText);
        setDisplayedProjects(getProjectsFromName(projects, e.target.innerText));
    };

    const onKeyDown = (e) => {
        // Enter key
        if (e.keyCode === 13) {
            setActiveSuggestion(0);
            setShowSuggestions(false);
            const chosenName = filteredSuggestions[activeSuggestion];
            setUserInput(chosenName);
            setDisplayedProjects(getProjectsFromName(projects, chosenName));
        }
        // Up arrow
        else if (e.keyCode === 38) {
            if (activeSuggestion === 0) return;
            setActiveSuggestion(activeSuggestion - 1);
        }
        // Down arrow
        else if (e.keyCode === 40) {
            if (activeSuggestion + 1 === filteredSuggestions.length) return;
            setActiveSuggestion(activeSuggestion + 1);
        }
    };

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="w-full border-2 dark:border-gray-600 dark:bg-gray-700 rounded-md dark:text-white mt-2">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className =
                            "py-1 text-center rounded-md cursor-pointer dark:hover:bg-gray-800 hover:bg-gray-100 hover:text-blue-800";
                        if (index === activeSuggestion) {
                            className +=
                                " bg-gray-100 text-blue-800 dark:bg-gray-800";
                        }
                        return (
                            <li
                                key={suggestion}
                                className={className}
                                onClick={onClick}
                            >
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className="my-4 text-center dark:text-white">
                    <em>No projects found</em>
                </div>
            );
        }
    }

    return (
        <div>
            <Fragment>
                <label
                    htmlFor="input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                    Find project by name
                </label>
                <input
                    id="input"
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                {suggestionsListComponent}
            </Fragment>
        </div>
    );
};

export default Autocomplete;
