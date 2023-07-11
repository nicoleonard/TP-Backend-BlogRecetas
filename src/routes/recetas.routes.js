import { Router } from 'express';
import { borrarReceta, crearReceta, editarReceta, obtenerRecetas } from '../controllers/recetas.controllers';

const router = Router();

router.route('/recetas').get(obtenerRecetas).post(crearReceta); // a la ruta /recetas le puedo hacer las peticiones que aqui se asocian con la funcion a la que invocan (se comunica rutas con controladores)
router.route('/recetas/:id').delete(borrarReceta).put(editarReceta);
export default router;