import {Route} from "react-router-dom";
import PlacementsMainModule from "./main";

const PlacementsModule = () => {
    return (
        <>
                <Route path="/" element={<PlacementsMainModule />} />
        </>
    );
};

export default PlacementsModule;