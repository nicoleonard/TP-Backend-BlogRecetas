import {Schema, model} from 'mongoose'

const usuarioSchema = new Schema({ // esquema que van a seguir los usuarios que almacene, estos llevan una capa de validaciones
    usuario: {
        type: String,
        match: /[a-zA-Z][a-zA-Z0-9-_]{3,32}/,
        required: true,
        unique: true
    },
    clave: {
        type: String,
        required: true,
        match: /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,64})/
    },
    tipo: {
        type: String,
        required: true,
        unique: true
    }
})

const Usuario = model('usuario', usuarioSchema)
export default Usuario;