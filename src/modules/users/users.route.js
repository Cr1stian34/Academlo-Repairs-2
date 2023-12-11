import express from "express";

//controller
import { create, deleteOne, findAll, findOne, login, updateOne } from "./users.controller.js";
import { validateExistUser } from "./users.middleware.js";

export const router = express.Router();

//******************** Definir los endpoint a ser utlizados **************/
//metodo get para traer todos los usuarios

//metodo get para agregar un usuario
router.post("/", create);
router.post("/login", login);

router.get("/", findAll);

router
     .route("/:id")
     .get(validateExistUser,findOne)
     .put(validateExistUser,updateOne)
     .delete(validateExistUser,deleteOne);

