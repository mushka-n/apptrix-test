import React, { Fragment } from "react";
import { useState } from "react";
import "./styles.css";

const Autocomplete = ({ projects }) => {
    const [activeSuggestion, setActiveSuggestion] = useState(0);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [userInput, setUserInput] = useState("");

    const change = (e) => {
        const userInput = e.target.value;

        const filteredSuggestions = projects.filter(
            (projects) =>
                projects.project.name
                    .toLowerCase()
                    .indexOf(userInput.toLowerCase()) > -1
        );

        setActiveSuggestion(0);
        setFilteredSuggestions(filteredSuggestions);
        setShowSuggestions(true);
        setUserInput(e.target.value);
    };

    const click = (e) => {
        setActiveSuggestion(0);
        setFilteredSuggestions([]);
        setShowSuggestions(false);
        setUserInput(e.target.innerText);
    };

    const keyDown = (e) => {
        // Enter key
        if (e.keyCode === 13) {
            setActiveSuggestion(0);
            setShowSuggestions(false);
            setUserInput(filteredSuggestions[activeSuggestion]);
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
                    {filteredSuggestions.map((project, index) => {
                        let className;
                        if (index === activeSuggestion) {
                            className = "project-active";
                        }
                        return (
                            <li
                                className={className}
                                key={project.id}
                                onClick={click}
                            >
                                {project.id} - {project.project.name}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className="no-projects">
                    <em>No projects, you're on your own!</em>
                </div>
            );
        }
    }

    return (
        <div>
            <Fragment>
                <input
                    type="text"
                    onChange={change}
                    onKeyDown={keyDown}
                    value={userInput}
                />
                {suggestionsListComponent}
            </Fragment>
        </div>
    );
};

export default Autocomplete;
