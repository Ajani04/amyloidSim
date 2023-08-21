import { Router } from "express";
import {
    getPredictions,
    getSimulations,
    createSimulations,
    findSimulationById,
    deleteSimulationById,
    updateSimulationById,
} from "../controllers/simulationsController.js";

const router = Router();

//importing authentication middleware
// import verifyAuthorization from "../middlewares/verifyAuthorization.js";
// router.use(verifyAuthorization);

// GET -> Gets all the simulations saved to the database: past simulations
// POST -> Creates a new simulation and saves to the database: new simulations
router.route("/").get(getSimulations).post(createSimulations);

// GET -> Gets a single simulation via its unique ID: findSimulationById
// DELETE -> Deletes a single simulation via its unique ID: deleteSimulationById
// UPDATE -> Updates a single simulation via its unique ID: updateSimulationById
router
    .route("/:_id")
    .get(findSimulationById)
    .delete(deleteSimulationById)
    .patch(updateSimulationById);

// POST -> Calculates the result of the current simulation based on data from the frontend
router.route("/simulationResult").post(getPredictions);

export { router as simulationRouter };
