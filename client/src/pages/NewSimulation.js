import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { SimulationResultsBar } from "../components/SimulationResultsBar";
import { useState } from "react";

const NewSimulation = (props) => {
    const user = props.user;
    const defaultResult = { id: 0, data: "Nothing to show yet ..." };
    const [results, setResults] = useState([defaultResult]);
    const JSX = (
        <div className="d-flex-col container-fluid">
            <Navbar username={user} />
            <div className="mb-2 d-flex align-items-stretch">
                <Sidebar resultHandler={setResults} />
                <SimulationResultsBar simulationResults={results} />
            </div>
        </div>
    );
    return JSX;
};

export default NewSimulation;
