import Receta from "../models/recetas"

export const obtenerRecetas = async (req,res)=>{
    try{
        const recetas = await Receta.find() // mi modelo se encarga de encontrar en la base de datos todas las recetas
        res.status(200).json(recetas)
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudieron buscar recetas'})
    }
}

export const crearReceta = async (req,res)=>{
    try{
        const nuevaReceta = new Receta(req.body)
        await nuevaReceta.save()
        res.status(201).json({mensaje: 'La receta se creó correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo crear la receta'})
    }
}

export const borrarReceta = async (req,res)=>{
    try{
        await Receta.findByIdAndDelete(req.params.id)
        res.status(200).json({mensaje: 'La receta se borró correctamente'})
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se pudo borrar la receta'})
    }
}
