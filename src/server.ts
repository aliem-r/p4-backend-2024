import express from "express";
import morgan from "morgan";
import cors from "cors";

import storiesRouter from "./routes/storiesEndpoints";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/stories", storiesRouter);

const { PORT } = process.env || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
