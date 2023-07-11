## EQUIPO NICO
## Proyecto: Backend - Blog de recetas
<sub>MONGODB - BABEL - CORS - MONGOOSE - EXPRESS - EXPRESS-VALIDATOR - DOTENV</sub>

En este proyecto se solicita desarrollar el backend de una pagina en donde se puedan crear, leer, actualizar y borrar recetas de cocina. El backend esta diseñado siguiendo una estructura de modelo-ruta-controlador para manejar datos y esta conectado a una base de datos mongoDB.
El alcance de este proyecto se extiende a realizar toda la infraestructura necesaria para que el backend pueda responder a las solicitudes recibidas, validando los datos entrantes antes de guardarlos en la base de datos. 
Además de recetas, la base de datos tiene modelada las propiedades para administrar usuarios.

[Requerimientos - Ejercicio 5](https://docs.google.com/document/d/11uNoz8FkpBY6i8wnJA8iUpC1w3_QDI70xGoDFo9Hf_A/view)

## Como probar el proyecto:
Debe tener instalado en su PC mongoDB y ejecutar el siguiente comando:
- npm run start
El proyecto esta configurado para conectarse a la direccion local por defecto de mongoDB. Se pueden hacer peticiones a esa direccion con POSTMAN o software similar.

### De este repositorio se evaluan:

* Backend con endpoints necesarios para administrar el CRUD del proyecto Front-end [TP-React-BlogRecetas](https://github.com/nicoleonard/TP-React-BlogRecetas).
* Estructura del proyecto y código limpio.
* Estructura de modelo, ruta y controlador, modelado de base de datos, validacion de datos con express-validator,
uso de middleware para tareas varias.
* Archivo readme con la descripción del proyecto.

## Dependencias instaladas:

    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-validator": "^7.0.1",
    "mongoose": "^7.3.2",
    "morgan": "^1.10.0"

### Autor:

* [Nicolas Leonard](https://github.com/nicoleonard)