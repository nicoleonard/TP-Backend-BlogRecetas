import { Router } from 'express';
import { obtenerUsuarios } from '../controllers/usuarios.controllers';

const router = Router();

router.route('/usuarios').get(obtenerUsuarios);
export default router;