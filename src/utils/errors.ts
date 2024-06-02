import type { ErrorRequestHandler, RequestHandler } from "express";
import { send } from "./response";

export const defaultErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    console.error(err.name, ":", err.message);
    switch (err.name) {
        default:
            send(res).internalError(`Internal server error`);
    }
};

export const catchErrors =
    (handler: RequestHandler): RequestHandler =>
    async (req, res, next) => {
        try {
            await handler(req, res, next);
        } catch (err) {
            next(err);
        }
    };
