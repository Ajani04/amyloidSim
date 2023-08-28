export const SimulationResultsBar = ({ simulationResults }) => {
    const resultHeader = simulationResults.header
        ? simulationResults.header
        : "";
    const resultData = simulationResults.simResult;
    console.log(resultData);

    const JSX = (
        <div
            className="d-flex-col align-items-center 
                justify-content-center text-center 
                border border-black w-100 vh-max-100"
            overflow="scroll"
        >
            <div className="sticky-top">
                <h2 className="display-6 border border-info fw-bold mb-0">
                    <small>Simulation Results</small>
                </h2>
                {resultHeader ? (
                    <div className="fw-bold text-danger card card-body bg-light">
                        {resultHeader}
                    </div>
                ) : (
                    ""
                )}
            </div>
            {resultData.map((result, index) => (
                <div
                    key={index}
                    className="d-flex-col justify-content-center mx-auto"
                >
                    <h4 className="p-2">
                        {result.data.description
                            ? result.data.description
                            : result.data}
                    </h4>
                    <p className="bg-info">
                        {result.data.sequence ? result.data.sequence : ""}
                    </p>
                </div>
            ))}
        </div>
    );

    return JSX;
};
