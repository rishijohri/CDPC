import {Route} from "react-router-dom";
import ResourcesMainModule from "./main";

const ResourcesModule = () => {
    return (
        <>
                <Route path="/" element={<ResourcesMainModule />} />
        </>
    );
};

export default ResourcesModule;