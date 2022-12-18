import {Route} from "react-router-dom";
import StaticMainModule from "./main";

const StaticModule = () => {
    return (
        <>
                <Route path="/" element={<StaticMainModule />} />
        </>
    );
};

export default StaticModule;