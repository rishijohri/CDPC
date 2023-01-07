import { Route, Routes } from "react-router-dom";

import CommonModule from "../common";
import ResourcesMainModule from "./main";

const ResourcesModule = () => {
    return (
        <Routes>
            <Route path="/" element={<ResourcesMainModule />} />
            <Route path="/test" element={<CommonModule />} />
        </Routes>
    );
};

export default ResourcesModule;
