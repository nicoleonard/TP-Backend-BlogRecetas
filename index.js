import express from 'express';
import cors from 'cors';

const instanciaExpress = express();


instanciaExpress.set('puerto', process.env.PORT || 4000) // notas 1: configura una variable 'puerto' que toma el valor de una variable de entorno o usa el puerto 4000
instanciaExpress.listen(instanciaExpress.get('puerto'), ()=>{console.log('Estoy en el puerto '+instanciaExpress.get('puerto'))}) // toma el puerto que coincida con el valor de la variable 'puerto'

instanciaExpress.use(cors()); // permite conexiones remotas
instanciaExpress.use(express.json()) // permite extraer datos del request en formato json