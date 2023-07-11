import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarReceta = [
    check("nombre")
      .notEmpty()
      .withMessage("El nombre de la receta es requerido")
      .isLength({ min: 5, max: 100 })
      .withMessage(
        "El nombre de la receta debe tener entre 5 y 100 caracteres"
      ),    
    check("ingredientes")
      .notEmpty()
      .withMessage("Los ingredientes de la receta son requeridos")
      .isLength({ min: 4, max: 100 })
      .withMessage(
        "La lista de ingredientes debe tener entre 4 y 100 caracteres")
      .matches(
        /^[A-Za-z\s]+(?:\s*,\s*[A-Za-z]+)*$/g)
      .withMessage('La lista de ingredientes debe ser palabras separadas por ","'
      ),

    check("instrucciones")
      .notEmpty()
      .withMessage("Las instrucciones son requeridas")
      .isLength({ min: 12, max: 300 })
      .withMessage(
        "La lista de instrucciones debe tener entre 12 y 300 caracteres"
      ),
    (req, res, next)=>{ resultadoValidacion(req, res, next)} 
  ];

  export default validarReceta;