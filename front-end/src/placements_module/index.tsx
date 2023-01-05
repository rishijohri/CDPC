import { Route, Routes } from "react-router-dom";

import CommonModule from "../common";
import PlacementsMainModule from "./main";

const PlacementsModule = () => {
    return (
        <Routes>
            <Route path="/" element={<PlacementsMainModule />} />
            <Route path="/test" element={<CommonModule />} />
        </Routes>
    );
};

export default PlacementsModule;
