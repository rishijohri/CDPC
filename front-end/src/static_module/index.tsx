import { Route, Routes } from "react-router-dom";

import CommonModule from "../common";
import StaticMainModule from "./main";

const StaticModule = () => {
    return (
        <Routes>
            <Route path="/" element={<StaticMainModule />} />
            <Route path="/test" element={<CommonModule />} />
        </Routes>
    );
};

export default StaticModule;
