import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import BMIcard from "./components/BMIcard";

function App() {
    return (
        <div className="bg-gray-300 flex justify-center h-screen">
            <BMIcard />
        </div>
    );
}

export default App;
