import React, { useContext } from "react";
import { ThemeContext } from "./App";

function FunctionalContext() {
    const darkTheme = useContext(ThemeContext);
    const themeStyles = {
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "#CCC" : "#333",
        padding: "2rem",
        margin: "2rem",
    };
    return <div style={themeStyles}>xdxdxd</div>;
}

export default FunctionalContext;
