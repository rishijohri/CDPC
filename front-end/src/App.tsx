import React from "react";
import {Route, Routes } from "react-router-dom";
import PlacementsModule from "./placements_module";
import StaticModule from "./static_module";
import ResourcesModule from "./resources_module";
// import logo from "./logo.svg";

function App() {
    return (
        <Routes>
            <Route path='/placements' /*element={private route}*/>
                <PlacementsModule />
            </Route>
            <Route path='/resources' /*element={private route}*/>
                <ResourcesModule />
            </Route>
            <Route path='/static' /*element={private route}*/>
                <StaticModule />
            </Route>
            
        </Routes>
    );
}

export default App;
