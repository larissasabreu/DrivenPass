import prisma from "../config/db";
import jwt, { JwtPayload} from 'jsonwebtoken';
import dotenv from 'dotenv'
import { Request, Response, NextFunction } from "express";
dotenv.config();

export async function validateToken (req: Request, res: Response, next: NextFunction) {
        // header
        const authorization = req.headers.authorization;
        const token = authorization?.replace("Bearer ", "");
          if (!token) {
          return res.sendStatus(401);
          }
      
        try {
                // validação do usuario
                jwt.verify(token, process.env.JWT_SECRET, async (error, decoded : JwtPayload) => {
                if (error) return res.status(401)

                const user = prisma.users.findFirst({where: { id: decoded.id }})
                if (!user) {
                return res.sendStatus(401);
                }
            
                res.locals.user = user;
                return next();
            })

         } catch (err) {
            res.status(401).send(err)
        }
      
      }