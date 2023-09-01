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
    const { A, B, C, alphaRadians, tDivM, H, nm, s, sAdjusted, tDivMAdjusted } =
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
                sequence: `${formatSequence(sequence, n[i], m[i], t[i])}`,
            },
        };
    }
    const header = `Simulation parameters: a = ${A};b = ${B}; c = ${C};α(radians)= ${alphaRadians}; 
    t/m = ${tDivM}; h = ${H}; nm = ${nm}; s = ${s}; s(adjusted) = ${sAdjusted}; t/m (adjusted) = ${tDivMAdjusted};`;

    res.json({ header, simResult });
}

function randomLightBackgroundColorGenerator() {
    // this function generates a random light shade for setting as RGB background color
    // const colorRange = 255 - 229;
    const colorRange = 50;
    const light_color =
        "rgb(" +
        (Math.floor(colorRange * Math.random()) + 200) +
        "," +
        (Math.floor(colorRange * Math.random()) + 200) +
        "," +
        (Math.floor(colorRange * Math.random()) + 200) +
        ")";
    return `style = "background-color: ${light_color}; border-radius: 50%;"`;
}

function adjustSequence(sequence) {
    const sequenceArr = sequence.split("");
    const bgColor = randomLightBackgroundColorGenerator();
    let properSequence = "";

    sequenceArr.map(
        (char) =>
            (properSequence += `<span ${bgColor} class="fw-bold atom">${char}</span>`)
    );
    return properSequence;
}

function formatSequence(sequence, n, m, t) {
    let sequenceRender = "";
    for (let i = 0; i <= n; i++) {
        let newSequence = adjustSequence(sequence);
        // let firstSequence = "";
        let stripRender = "";
        let className = "normal-sequence";
        let registerShift = t * i;
        let currChain = i + 1;

        // necessary conditionals for managing repeat sequence
        // if (i == 1) {
        //     firstSequence += newSequence;
        // }

        if (i == n) {
            className = "repeat-sequence";
            // newSequence = firstSequence;
            currChain = 1;
        }

        for (let j = 0; j <= m - 1; j++) {
            stripRender += `<div class=chain style=margin-left:${
                registerShift * 20
            }px;><pre>${newSequence}</pre></div>`;
        }
        sequenceRender += `<div class ="${className}">${stripRender}</div>`;
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

const makeEven = (value) => {
    // this function returns the nearest even value for the input value.
    let intVal = Math.round(value);
    // check if value is divisible by 2
    intVal = intVal % 2 ? intVal + 1 : intVal;
    return intVal;
};

function getCombinations(tdivm, nm) {
    const n = getFactors(Math.round(nm)); // all possible factors of nm for combination
    const m = [...n].reverse(); // reverses the shallow copy of n to match the combinations
    const t = m.map((x) => makeEven(tdivm * x));
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
    H = H ? +H : (B * C * D) / (A * tDivM); //conditional check for H to use user-input or re-calculate

    // calculating nm and s using equation 2(b)
    const nm = Math.round((C * D * H) / (B * Math.sqrt((C * D) ** 2 + H ** 2)));

    const s = Math.round(nm * tDivM); // shear number s = nt
    const sAdjusted = makeEven(s);

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

    let parameters = {
        A,
        B,
        C,
        alphaRadians,
        tDivM,
        H,
        nm,
        s,
        sAdjusted,
        tDivMAdjusted,
    }; //parameters of interest

    for (let parameter in parameters) {
        if (parameters.hasOwnProperty(parameter)) {
            parameters[parameter] = parameters[parameter].toFixed(2); // truncate to 2 decimal places
        }
    }

    return parameters;
}

export {
    getPredictions,
    getSimulations,
    createSimulations,
    findSimulationById,
    deleteSimulationById,
    updateSimulationById,
};
