import { Router } from 'express';

const router = Router();

router.route('/recetas').get((req,res)=>{
    res.send("peticion realizada a recetas")
});
export default router;