import Receta from "../models/recetas"

export const obtenerRecetas = async (req,res)=>{
    try{
        const recetas = await Receta.find() // mi modelo se encarga de encontrar en la base de datos todas las recetas
        res.status(200).json(recetas)
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se puedieron buscar recetas'})
    }
}