import { Router } from 'express';
import { obtenerRecetas } from '../controllers/recetas.controllers';

const router = Router();

router.route('/recetas').get(obtenerRecetas);
export default router;