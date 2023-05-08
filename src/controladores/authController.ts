import { Request, Response } from "express";
import modeloUsuario from "../modelos/modeloUsuario";

export const signup = (req: Request, res: Response) => {
    new modeloUsuario({
        
    })
    res.send('signup')
};

export const signin = (req: Request, res: Response) => {
    res.send('signin')
};

export const profile = (req: Request, res: Response) => {
    res.send('profile')
};