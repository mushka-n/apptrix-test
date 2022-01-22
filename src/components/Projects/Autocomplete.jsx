import React, { Fragment } from "react";
import { useState } from "react";
import "./styles.css";

const Autocomplete = ({ projects, setDisplayedProjects }) => {
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");

    const clearNames = (projects) => {
        const includedValues = [];
        projects.filter((p) => {
            const name = p.project.name;
            return includedValues.includes(name)
                ? false
                : includedValues.push(name);
        });
        return includedValues;
    };

    const suggestions = clearNames(projects);

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
        setUserInput(e.target.value);
        setDisplayedProjects(getProjectsFromName(projects, e.target.value));
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
            if (activeSuggestion - 1 === filteredSuggestions.length) return;
            setActiveSuggestion(activeSuggestion + 1);
        }
    };

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="projects">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;
                        if (index === activeSuggestion) {
                            className = "project-active";
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
                <div className="no-projects">
                    <em>No projects found</em>
                </div>
            );
        }
    }

    return (
        <div>
            <Fragment>
                <input
                    type="text"
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </Fragment>
        </div>
    );
};

export default Autocomplete;
