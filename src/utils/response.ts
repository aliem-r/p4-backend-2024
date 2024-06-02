import type { Response as ExpressResponse } from "express";

enum HttpStatus {
    Ok = 200,
    Created = 201,
    BadRequest = 400,
    NotFound = 404,
    InternalServerError = 500,
    NotImplemented = 501,
}

export const send = (res: ExpressResponse) => {
    return {
        ok: (data: any) => res.status(HttpStatus.Ok).json(data),
        createdOk: (data: any) => res.status(HttpStatus.Created).json(data),
        internalError: (msg: string = "") => res.status(HttpStatus.InternalServerError).send(msg),
        notFound: () => res.status(HttpStatus.NotFound).send("Not found"),
        badRequest: (msg: string) => res.status(HttpStatus.BadRequest).send(msg),
        notImplemented: () => res.status(HttpStatus.NotImplemented).send("Not implemented"),
    };
};
