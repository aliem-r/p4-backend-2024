import { Router } from "express";
import { db } from "../db";
import { catchErrors } from "../utils/errors";

const router = Router();

/*
Categories Endpoints:

    GET /categories
    GET /categories/:category
    POST /categories
    PUT /categories/:category
    DELETE /categories/:category
*/

router.get(
    "/",
    catchErrors(async (req, res) => {
        const categories = await db.category.findMany();
        res.status(200).json(categories);
    })
);

router.get(
    "/:category",
    catchErrors(async (req, res) => {
        const { category: slug } = req.params;
        const category = await db.category.findUniqueOrThrow({
            where: { slug },
        });
        res.status(200).json(category);
    })
);

router.post(
    "/",
    catchErrors(async (req, res) => {
        const newCategory = req.body;
        const category = await db.category.create({
            data: newCategory,
        });
        res.status(201).json(category);
    })
);

router.put(
    "/:category",
    catchErrors(async (req, res) => {
        const { category: slug } = req.params;
        const categoryToUpdate = req.body;

        const category = await db.category.update({
            where: { slug },
            data: categoryToUpdate,
        });
        res.status(201).json(category);
    })
);

router.delete(
    "/:category",
    catchErrors(async (req, res) => {
        const { category: slug } = req.params;
        const category = await db.category.delete({
            where: { slug },
        });
        res.status(200).json(category);
    })
);

export default router;
