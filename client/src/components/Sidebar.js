import { useState } from "react";

export default function Sidebar({ resultHandler }) {
    const [alpha, setAlpha] = useState("");
    const [d, setD] = useState("");
    const [sequence, setSequence] = useState("");

    const getResult = async () => {
        const response = await fetch("/api/v1/simulations/simulationResult", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ alpha, d, sequence }),
        });

        const json = await response.json();
        return json;
    };

    const updateResult = async (e) => {
        e.preventDefault();
        // console.log(e);
        // await API Call
        const results = await getResult();
        console.log(results);
        resultHandler(results);
    };

    const JSX = (
        <form
            className="d-flex-col-wrap text-center container col-3"
            onSubmit={updateResult}
        >
            <h4 className="display-8 text-center my-2">INSTRUCTIONS</h4>
            <section className="d-flex-col my-3">
                <div className="border border-black text-start px-2">
                    <small className="fw-bold">
                        Please enter the correct values for the following
                        parameters:
                        <span className="fw-bold text-danger">
                            &alpha; and d.
                        </span>
                        <ul className="text-danger">
                            <br />
                            <li>
                                &alpha;: Angle between the strand direction and
                                the Helical axis (degrees)
                            </li>
                            <li>
                                d: Maximum spanning width of Helix
                                cross-section(Å)
                            </li>
                        </ul>
                        Next, enter/paste the relevant sequence of the protein's
                        primary structure in the box provided below.
                        <br />
                        Finally, click the Predict button to get results for the
                        simulation!
                    </small>
                </div>
                <div className="d-flex">
                    <span className="fw-bold mx-auto">
                        <label htmlFor="ALPHA">&alpha;</label>

                        <input
                            required
                            className="border rounded-0 border-dark border-1"
                            name="ALPHA"
                            onChange={(e) => setAlpha(e.target.value)}
                            value={alpha}
                            type="text"
                            inputMode="numeric"
                        />
                    </span>
                    <span className="fw-bold mx-auto">
                        <label htmlFor="D">d</label>

                        <input
                            required
                            className="border rounded-0 border-dark border-1"
                            name="D"
                            onChange={(e) => setD(e.target.value)}
                            value={d}
                            type="text"
                            inputMode="numeric"
                        />
                    </span>
                </div>
            </section>
            <textarea
                className="w-100 border border-black border-1"
                placeholder="Enter the protein primary sequence ....."
                name="sequence"
                onChange={(e) => setSequence(e.target.value)}
                value={sequence}
                required
                type="text"
            ></textarea>
            <button className="btn btn-lg p-2 px-5 btn-success mb-2 mt-3">
                Predict
            </button>
        </form>
    );

    return JSX;
}
