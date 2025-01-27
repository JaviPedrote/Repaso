// cSpell:disable
import { Request, Response } from "express";
import { validationResult } from "express-validator";
import User from "../models/User";
import slug from "slug";
import { comprobarPassword, hashPassword } from "../utils/auth";

export const createUser = async (req: Request, res: Response) => {

    const { email,password} = req.body;

  const emailExist = await User.findOne({ email });
  if (emailExist) {
    const error = new Error("Email ya registrado");
    res.status(409).json({ error:error.message });
    return;
  }


  const handle=slug(req.body.handle,'');
  const handleExist = await User.findOne({ handle });
  if (handleExist) {
    const error = new Error("Nombre de usuario no disdponible");
    res.status(409).json({ error: error.message });
    return;
  }


  const user = new User(req.body);
  user.password = await hashPassword(password);
  user.handle = handle;
  await user.save();
  res.status(200).send('Registro creado correctamente');
};


export const login = async (req: Request, res: Response) => {
  const errors = validationResult(req);
  if(!errors.isEmpty){
    res.status(400).json({ errors: errors.array() });
    return;
  }
  const { email,password } = req.body;

  //Comprobar si el usuario existe
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Este usuario no existe");
    res.status(404).json({ error: error.message });
    return;
  }

  //Comprobar password

 const isPasswordCorrect = await comprobarPassword(password,user.password);
 if(!isPasswordCorrect){
   const error = new Error("Contraseña incorrecta");
   res.status(401).json({ error: error.message });
   return;
 }

  res.status(200).send('Usuario logueado correctamente');
};