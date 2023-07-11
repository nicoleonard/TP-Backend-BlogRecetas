import { Router } from 'express';
import { crearUsuario, obtenerUsuarios } from '../controllers/usuarios.controllers';

const router = Router();

router.route('/usuarios').get(obtenerUsuarios).post(crearUsuario); // a la ruta /usuarios le puedo hacer las peticiones que aqui se asocian con la funcion a la que invocan (se comunica rutas con controladores)
export default router;