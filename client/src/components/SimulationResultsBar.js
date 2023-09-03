import "./Styles/Cards.css";
export const SimulationResultsBar = ({ simulationResults }) => {
    const resultHeader = simulationResults.header
        ? simulationResults.header
        : "";
    const resultData = simulationResults.simResult;

    const JSX = (
        <div
            className="d-flex-col align-items-center 
                justify-content-center text-center 
                border border-black w-100"
            id="viewer"
        >
            <div className="sticky-top">
                <h2 className="display-6 border border-info fw-bold mb-0">
                    <small>Simulation Results</small>
                </h2>
                {resultHeader ? (
                    <div className="d-flex-wrap fw-bold text-danger card card-body bg-light">
                        {resultHeader}
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div id="resultviewer">
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
                        {result.data.sequence ? (
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: result.data.sequence,
                                }}
                            ></div>
                        ) : (
                            ""
                        )}
                    </div>
                ))}
            </div>
        </div>
    );

    return JSX;
};
