import { SimulationContext } from "../src/context/SimulationContext";
import { useContext } from "react";

export const useSimulationContext = () => {
    const context = useContext(SimulationContext);

    if (!context) {
        throw Error(
            "useSimulation Context must be used inside an SimulationContextProvider"
        );
    }

    // otherwise
    return context;
};
