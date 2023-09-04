import { useState } from "react";
import "../components/Cards";

export default function Sidebar({ resultHandler }) {
    const [alpha, setAlpha] = useState("");
    const [d, setD] = useState("");
    const [h, setH] = useState("");
    const [sequence, setSequence] = useState("");

    const getResult = async () => {
        const response = await fetch("/api/v1/simulations/simulationResult", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ alpha, d, h, sequence }),
        });

        const json = await response.json();
        return json;
    };

    const updateResult = async (e) => {
        e.preventDefault();

        // await API Call
        const results = await getResult();
        resultHandler(results);
    };

    const JSX = (
        <form
            className="d-flex-col-wrap text-center container col-3"
            onSubmit={updateResult}
        >
            <h4 className="display-8 text-center my-2">INSTRUCTIONS</h4>
            <section className="d-flex-col my-3">
                <div className="border border-black text-start px-2 mb-2">
                    <small className="fw-bold">
                        <p>
                            Please enter the correct values for the following
                            parameters:
                            <span className="mx-1 fw-bold text-danger">
                                &alpha;, d, and h.
                            </span>
                        </p>
                        <ul className="text-danger mb-1">
                            <li>
                                &alpha;: Angle between the strand direction and
                                the Helical axis (degrees)
                            </li>
                            <li>
                                d: Maximum spanning width of Helix
                                cross-section(Å)
                            </li>
                            <li>h: Height per helical turn (Å) [optional]</li>
                        </ul>
                        <p>
                            Next, enter/paste the relevant sequence of the
                            protein's primary structure in the box provided
                            below.
                            <br />
                            Finally, click the Predict button to get results for
                            the simulation!
                        </p>
                    </small>
                </div>
                <div className="d-flex justify-content-evenly">
                    <span className="fw-bold">
                        <label htmlFor="ALPHA">&alpha;</label>
                        <input
                            required
                            min="0"
                            max="90"
                            step="0.01"
                            className="border rounded-0 border-dark border-1 py-0 col-6"
                            name="ALPHA"
                            onChange={(e) => setAlpha(e.target.value)}
                            value={alpha}
                            type="number"
                            inputMode="numeric"
                        />
                    </span>
                    <span className="fw-bold">
                        <label htmlFor="D">d</label>
                        <input
                            min="0"
                            max="90"
                            className="border rounded-0 border-dark border-1 py-0 col-6"
                            name="D"
                            onChange={(e) => setD(e.target.value)}
                            value={d}
                            type="number"
                            inputMode="numeric"
                        />
                    </span>
                    <span className="fw-bold">
                        <label htmlFor="H">h</label>

                        <input
                            min="0"
                            max="90"
                            className="border rounded-0 border-dark border-1 py-0 col-6"
                            name="H"
                            onChange={(e) => setH(e.target.value)}
                            value={h}
                            type="number"
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
