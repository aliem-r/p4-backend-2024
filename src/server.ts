import express from "express";
import morgan from "morgan";
import cors from "cors";

import storiesRouter from "./routes/storiesEndpoints";
import authorsRouter from "./routes/authorsEndpoints";
import categoriesRouter from "./routes/categoriesEndpoints";

import { defaultErrorHandler } from "./utils/errors";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/stories", storiesRouter);
app.use("/api/authors", authorsRouter);
app.use("/api/categories", categoriesRouter);

app.use(defaultErrorHandler);

const { PORT } = process.env || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
