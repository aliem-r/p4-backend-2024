import express from "express";
import morgan from "morgan";
import cors from "cors";
import { $ } from "bun";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", async (req, res) => {
    res.status(200).json({ ok: true, message: "Hello World!" });
});

const { PORT } = process.env || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
