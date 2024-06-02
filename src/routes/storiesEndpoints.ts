import { Router } from "express";
import { db } from "../db";

const router = Router();

router.get("/", async (req, res, next) => {
    try {
        const stories = await db.story.findMany();
        res.status(200).json(stories);
    } catch (error) {
        error;
    }
});

export default router;

/*
Stories Endpoints:

    GET /stories
    GET /stories/:id
    POST /stories
    PUT /stories/:id
    DELETE /stories/:id
*/
