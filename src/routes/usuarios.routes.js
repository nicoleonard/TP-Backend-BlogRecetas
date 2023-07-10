import { Router } from 'express';

const router = Router();

router.route('/usuarios').get((req,res)=>{
    res.send("peticion realizada a usuarios")
});
export default router;