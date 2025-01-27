// import { RequestHandler } from 'express';
import { Request ,Response, NextFunction } from 'express';
import { validationResult } from "express-validator";

export const handleInputErrors = (req:Request, res:Response, next:NextFunction) => {
  
    const errors = validationResult(req);
    console.log('desde handleInputErrors');

  if (!errors.isEmpty()) {
    
    res.status(400).json({ errors: errors.array() });
    return;
  }

  next(); // Pasar al siguiente middleware
};