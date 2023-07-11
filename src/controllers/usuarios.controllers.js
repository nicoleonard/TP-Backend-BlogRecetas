import Usuario from "../models/usuarios"

export const obtenerUsuarios = async (req,res)=>{
    try{
        const usuarios = await Usuario.find() // mi modelo se encarga de encontrar en la base de datos todos los usuarios
        res.status(200).json(usuarios)
    } catch (error){
        console.log(error)
        res.status(404).json({mensaje: 'No se puedieron buscar usuarios'})
    }
}