import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarUsuario = [
    check("usuario")
        .notEmpty()
        .withMessage("El nombre de usuario es requerido")
        .isLength({ min: 5, max: 100 })
        .withMessage(
            "El nombre de usuario debe tener entre 5 y 100 caracteres"
        ),
    check("email").notEmpty().withMessage("El email es requerido").matches(/\S+@\S+\.\S+/).withMessage("Debe ser un email valido"),
    check("clave")
        .notEmpty()
        .withMessage("La clave es requerida")
        .isLength({ min: 4, max: 100 })
        .withMessage(
            "La clave debe tener entre 4 y 100 caracteres")
        .matches(
            /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/)
        .withMessage('La contraseña puede tener de 8 a 64 caracteres y contiene una mezcla de mayusculas y minusculas, un numero y un caracter especial'
        ),
    check("tipo")
        .notEmpty()
        .withMessage('Error en el tipo de usuario')
        .isIn(["admin", "usuario"])
        .withMessage('Error en el tipo de usuario'
        ),
    (req, res, next) => { resultadoValidacion(req, res, next) }
];

export default validarUsuario;