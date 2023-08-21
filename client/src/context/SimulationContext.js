import { createContext, useReducer } from "react";

export const SimulationContext = createContext();

export const SimulationReducer = (state, action) => {
    switch (action.type) {
        case "SIMULATION_RESULTS":
            return { simulation: action.payload };

        case "CREATE_SIMULATION":
            return { simulation: [action.payload, ...state.simulation] };

        case "DELETE_SIMULATION":
            return {
                simulation: state.simulation.filter(
                    (simulation) => simulation._id !== action.payload._id
                ),
            };

        default:
            return state;
    }
};
export const SimulationContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SimulationReducer, {
        simulation: null,
    });

    return (
        <SimulationContext.Provider value={{ ...state, dispatch }}>
            {children}
        </SimulationContext.Provider>
    );
};
