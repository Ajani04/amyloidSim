// callbacks for handling requests

function getSimulations(req, res) {
    res.json({ msg: "PAST SIMULATIONS RETURNED" });
}

function createSimulations(req, res) {
    res.json({ msg: "NEW SIMULATIONS RETURNED" });
}

function findSimulationById(req, res) {
    const { _id } = req.params;
    res.json({ msg: `RETURNED SIMULATION WITH ID ${_id}` });
}

function deleteSimulationById(req, res) {
    const { _id } = req.params;
    res.json({ msg: `DELETED SIMULATION WITH ID ${_id}` });
}

function updateSimulationById(req, res) {
    const { _id } = req.params;
    res.json({ msg: `UPDATED SIMULATION WITH ID ${_id}` });
}

// functions for calculating simuulation results and organizing the render
function getPredictions(req, res) {
    const { alpha, d, h, sequence } = req.body;
    const { A, B, C, alphaRadians, tDivM, H, nm, s, tDivMAdjusted } =
        predictParameters(alpha, d, h);
    const { n, m, t } = getCombinations(tDivMAdjusted, nm);
    const n_models = n.length;

    let simResult = Array(n_models).fill(0); //initializing a n-length array of zeros

    for (let i = 0; i <= n_models - 1; i++) {
        simResult[i] = {
            data: {
                description: `Model ${i + 1}: n = ${n[i]}; m = ${m[i]}; t = ${
                    t[i]
                }`,
                sequence: `${sequence}`,
            },
        };
    }
    const header = `Simulation parameters: A = ${A};B = ${B}; C = ${C}; alphaRadians= ${alphaRadians}; 
    t/m = ${tDivM}; H = ${H}; nm = ${nm}; s = ${s}; t/m (adjusted) = ${tDivMAdjusted};`;

    res.json({ header, simResult });
}

function formatSequence(sequence, n, m, t) {
    let sequenceRender = "";
    for (let i = 0; i <= n; i++) {
        let stripRender = "";
        let backgroundColor = "bg-warning";
        let fontColor = "text-dark";
        let registerShift = " ".repeat(t * i);
        if (i == n) {
            backgroundColor = "bg-secondary";
            fontColor = "text-tertiary";
        }
        for (let j = 0; j <= m - 1; j++) {
            let lineBreak = "<br />";
            if (j == m - 1) {
                lineBreak = "";
            }
            stripRender.concat(
                `<pre>${registerShift}${sequence}${lineBreak}</pre>`
            );
        }

        sequenceRender.concat(
            `<div className = ${backgroundColor}${fontColor}>${stripRender}<br /></div>`
        );
    }
    return sequenceRender;
}

function getFactors(val) {
    let factors = [1, val]; // 1 and val are default factors
    let done = false;
    let start = 2;

    while (!done) {
        const remainder = val % start;
        if (!remainder) {
            const quotient = Math.floor(val / start);
            if (quotient in factors) {
                done = true;
            } else {
                factors.splice(start - 1, 0, start, quotient);
            }
        }
        start++;
    }
    return factors;
}

function getCombinations(tdivm, nm) {
    const n = getFactors(nm); // all possible factors of nm for combination
    const m = [...n].reverse(); // reverses the shallow copy of n to match the combinations
    const t = m.map((x) => tdivm * x);
    return { n, m, t };
}

function predictParameters(ALPHA, D, H) {
    //calculate n, m, t
    // declaring constant values
    const A = 3.3,
        B = 4.8,
        PI = Math.PI,
        C = PI;
    // nTOT = 40;

    // calculations
    const alphaRadians = (ALPHA * PI) / 180;

    // calculating t/m using equation 1(a)
    const tDivM = (B * Math.tan(alphaRadians)) / A;

    // calculating h using equation 2(a)
    H = H ? H : (B * C * D) / (A * tDivM); //conditional check for H to use user-input or re-calculate

    // calculating nm and s using equation 2(b)
    const nm = Math.round((C * D * H) / (B * Math.sqrt((C * D) ** 2 + H ** 2)));

    const s = Math.round(nm * tDivM); // shear number s = nt

    //calculating the adjusted values of t/m
    const tDivMAdjusted = s / nm;

    /*re-calculating adjusted d and h with the adjusted values of t/m and nm
      from equations 3(a) and 3(b)
    */
    // const dAdjusted =
    // (nm * B * Math.sqrt(((A / B) * tDivMAdjusted) ** 2 + 1)) / C;

    // const hAdjusted = nm * B * Math.sqrt((B / (A * tDivMAdjusted)) ** 2 + 1);

    // let alphaAdjusted = (Math.atan((A / B) * tDivMAdjusted) * 180) / PI;

    // let nResPerTurn = Math.sqrt((C * dAdjusted) ** 2 + hAdjusted ** 2) / A;
    // let nTurns = nTOT / nResPerTurn;
    // let length = hAdjusted * Math.floor(nTOT / nResPerTurn);

    // let isAmyloid = false;
    // assigning relevant variables
    // let investigationResult = parameters;

    return { A, B, C, alphaRadians, tDivM, H, nm, s, tDivMAdjusted }; //parameters of interest
}

export {
    getPredictions,
    getSimulations,
    createSimulations,
    findSimulationById,
    deleteSimulationById,
    updateSimulationById,
};
