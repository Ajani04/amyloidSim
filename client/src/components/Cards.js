import "./Styles/Cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
    const JSX = (
        <div className="my-5 py-2 container-fluid">
            <Link to="/newSimulation">
                <div
                    id="new-sim"
                    className="card my-3 py-3 mx-auto border border-dark rounded btn btn-success active choiceCards"
                >
                    Run a New Simulation
                </div>
            </Link>
            <Link to="/pastSimulations">
                <div
                    id="old-sim"
                    className="card py-3 mx-auto border border-dark rounded btn btn-outline-secondary choiceCards"
                >
                    Review Past Simulations
                </div>
            </Link>
        </div>
    );

    return JSX;
};

export default Cards;
