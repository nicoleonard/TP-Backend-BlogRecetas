import {Schema, model} from 'mongoose'

const recetaSchema = new Schema({ // esquema que van a seguir las recetas que almacene, estos llevan una capa de validaciones
    nombre: {
        type: String,
        minLength: 5,
        maxLength: 100,
        required: true,
        unique: true
    },
    ingredientes: {
        type: String,
        minLength: 4,
        maxLength: 100,
        required: true,
        match: /^[A-Za-z\s]+(?:\s*,\s*[A-Za-z]+)*$/g
    },
    instrucciones: {
        type: String,
        minLength: 12,
        maxLength: 300,
        required: true,
        unique: true
    }
})

const Receta = model('receta', recetaSchema)
export default Receta;