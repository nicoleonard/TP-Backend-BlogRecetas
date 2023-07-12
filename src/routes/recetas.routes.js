import { Router } from 'express';
import { borrarReceta, crearReceta, editarReceta, obtenerReceta, obtenerRecetas } from '../controllers/recetas.controllers';
import validarReceta from '../helpers/validarReceta';

const router = Router();

router.route('/recetas').get(obtenerRecetas).post(validarReceta, crearReceta); // a la ruta /recetas le puedo hacer las peticiones que aqui se asocian con la funcion a la que invocan (se comunica rutas con controladores)
router.route('/recetas/:id').get(obtenerReceta).delete(borrarReceta).put(validarReceta, editarReceta);
export default router;