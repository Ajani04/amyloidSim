//      Author: Ajani Seun
//      e-Mail:
//      Description: This is the webserver that handles the logic for the amyloidSim project. It is powered via Node and Express
//                   with no attached database and a React frontend application. Mongo DB is recommended for future consideration,
//                   to leverage the advantages of the MERN stack.

// importing relevant modules
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import serveFavicon from "serve-favicon";
import morgan from "morgan";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 3001; // chooses port in .env or defaults to 3001 when not available.
const dbUri = process.env.dbUri;

//middleware use
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serving favicon and styles for the webpages
app.use("/favicons", serveFavicon(`${process.cwd()}/public/icons/favicon.ico`));
app.use("/public", express.static(`${process.cwd()}/public`));

// routes
import { usersRouter } from "./routes/users.route.js";
import { simulationRouter } from "./routes/simulations.route.js";

// Controllers
import { connectDb } from "./controllers/dbConnector.js";

app.use("/api/v1/auth", usersRouter);
app.use("/api/v1/simulations", simulationRouter);
app.use("*", (req, res) =>
    res.status(404).json({
        error: "Not Found",
    })
);

// starting the server on available/specified port
const start = async () => {
    await connectDb(dbUri); // connecting to mongoDb via the DB controller
    app.listen(PORT, () =>
        console.log(`\n[Server started]: Listening on Port ${PORT} ...\n`)
    );
};

start();

// handle unresolved or rejected promises and errors
process.on("unhandledRejection", (err, promise) => {
    console.log(`[Error]: ${err.message}`);
    // close the server and exit process
    app.close(() => process.exit(1));
});
