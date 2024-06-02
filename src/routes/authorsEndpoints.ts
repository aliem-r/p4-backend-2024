import { Router } from "express";
import { db } from "../db";
import { catchErrors } from "../utils/errors";

const router = Router();

/*
Authors Endpoints:

    GET /authors
    GET /authors/:username
    POST /authors
    PUT /authors/:username
    DELETE /authors/:username
*/

router.get(
    "/",
    catchErrors(async (req, res) => {
        const authors = await db.author.findMany();
        res.status(200).json(authors);
    })
);

router.get(
    "/:username",
    catchErrors(async (req, res) => {
        const { username } = req.params;
        const author = await db.author.findUniqueOrThrow({
            where: { username },
        });
        res.status(200).json(author);
    })
);

router.post(
    "/",
    catchErrors(async (req, res) => {
        const newAuthor = req.body;
        const author = await db.author.create({
            data: newAuthor,
        });
        res.status(201).json(author);
    })
);

router.put(
    "/:username",
    catchErrors(async (req, res) => {
        const { username } = req.params;
        const authorToUpdate = req.body;

        const author = await db.author.update({
            where: { username },
            data: authorToUpdate,
        });
        res.status(201).json(author);
    })
);

router.delete(
    "/:username",
    catchErrors(async (req, res) => {
        const { username } = req.params;
        const author = await db.author.delete({
            where: { username },
        });
        res.status(200).json(author);
    })
);

export default router;
