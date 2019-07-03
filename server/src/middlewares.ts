import { NextFunction, Request, Response } from "express";

export function checkLoggedIn(req: Request, res: Response, next: NextFunction) {
    if (!req.session || !req.session.user || !req.session.user.id) {
        res.status(500).send({ error: 'login required' });
        return;
    }
    next();
}