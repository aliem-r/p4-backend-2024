import express from "express";
import morgan from "morgan";
import cors from "cors";

import storiesRouter from "./routes/storiesEndpoints";

import { defaultErrorHandler } from "./utils/errors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/stories", storiesRouter);

app.use(defaultErrorHandler);

const { PORT } = process.env || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
