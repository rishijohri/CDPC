import React from "react";

import "./App.css";
import CreateTodo from "./components/CreateTodo";
import ReadTodo from "./components/ReadTodo";
import logo from "./logo.svg";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <ReadTodo />
                <CreateTodo />
            </header>
        </div>
    );
}

export default App;
