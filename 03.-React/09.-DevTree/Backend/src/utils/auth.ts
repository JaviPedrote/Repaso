// cSpell:disable

import argon2 from "argon2";

// Función para hashear la contraseña
export const hashPassword = async (password: string) => {
  const argon2Hash = await argon2.hash(password, {
    type: argon2.argon2id,
    memoryCost: 2 ** 14, // 64 MB de memoria
    timeCost: 4, // 4 iteraciones
    parallelism: 2, // 2 hilos paralelos
  });

  return argon2Hash;
};

//Funcion para comparar la contraseña

export const comprobarPassword = async (password: string, hash: string) => {
   return await argon2.verify(hash, password);
};
