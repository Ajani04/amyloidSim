import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const simulationSchema = new mongoose.Schema(
    {
        simulationResults: {
            isamyloid: Boolean,
            primarySequence: String,
            tertiarySequence: String,
            preview: Image,
        },
    },
    { timestamps: true }
);

const simulation = mongoose.model("simulation", simulationSchema);

export default simulation;
