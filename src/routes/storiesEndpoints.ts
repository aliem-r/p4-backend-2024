import { Router } from "express";
import { db } from "../db";

const router = Router();

router.get("/", async (req, res) => {
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

    GET /stories: Retrieve a list of all stories.
    GET /stories/{id}: Retrieve a single story by its ID.
    POST /stories: Create a new story.
    PUT /stories/{id}: Update an existing story by its ID.
    DELETE /stories/{id}: Delete a story by its ID.
*/
