import { Router } from "express";
import { db } from "../db";
import { catchErrors } from "../utils/errors";

const router = Router();

/*
Stories Endpoints:

    GET /stories
    GET /stories/:id
    POST /stories
    PUT /stories/:id
    DELETE /stories/:id
*/

router.get(
    "/",
    catchErrors(async (req, res) => {
        const stories = await db.story.findMany({
            include: {
                author: true,
                category: true,
            },
        });
        res.status(200).json(stories);
    })
);

router.get(
    "/:id",
    catchErrors(async (req, res) => {
        const { id } = req.params;
        const story = await db.story.findUniqueOrThrow({
            where: { id: Number(id) },
            include: {
                author: true,
                category: true,
            },
        });
        res.status(200).json(story);
    })
);

router.post(
    "/",
    catchErrors(async (req, res) => {
        const { title, summary, body, author, category } = req.body;

        const { id: authorId } = await db.author.findUniqueOrThrow({ where: { username: author }, select: { id: true } });
        const { id: categoryId } = await db.category.findUniqueOrThrow({ where: { name: category }, select: { id: true } });

        const story = await db.story.create({
            data: {
                title,
                summary,
                body,
                publicationDate: new Date(),
                authorId: authorId,
                categoryId: categoryId,
            },
        });
        res.status(201).json(story);
    })
);

router.put(
    "/:id",
    catchErrors(async (req, res) => {
        const { id } = req.params;
        const { title, summary, body, publicationDateString, author, category } = req.body;

        let authorId, categoryId, publicationDate;
        if (publicationDateString) publicationDate = new Date(publicationDateString);
        if (author) authorId = (await db.author.findUniqueOrThrow({ where: { username: author }, select: { id: true } })).id;
        if (category) categoryId = (await db.category.findUniqueOrThrow({ where: { name: category }, select: { id: true } })).id;

        const story = await db.story.update({
            where: { id: Number(id) },
            data: {
                title,
                summary,
                body,
                publicationDate,
                authorId,
                categoryId,
            },
        });
        res.status(201).json(story);
    })
);

router.delete(
    "/:id",
    catchErrors(async (req, res) => {
        const { id } = req.params;
        const story = await db.story.delete({
            where: { id: Number(id) },
        });
        res.status(200).json(story);
    })
);

export default router;
