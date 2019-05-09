# ¡Bienvenido/a al ejercicio de Meli!

Siguiendo estas instrucciones podrás utilizar la plataforma Now, creada por Zeit.co, que te proveerá una forma simple para deployar una aplicación Node.js. Solamente tendrás que realizar el login con tu cuenta de GitHub y estará lista para usar.



# Vinculación de usuario:


- Ingresá a: https://zeit.co/github
- Hacé click en "Comenzar con GitHub". Esta acción realizará la asociación con nuestro usuario de GitHub (Si no tenés uno, ¡crealo!).
- Finalmente, loguéate con las credenciales de Github y listo.

# Creación del repositorio y deploy en Zeit.co:

- Clonar el repositorio : https://github.com/pabal1708/EjercicioMeli.
- Este repositorio consta de una API y un frontend estático.
- Creá un branch con tus datos (nombre y apellido) y realizá la integración en él.

# Deploy:

- Instalar Now. Para esto ejecutá el siguiente comando:
 $ npm i -g now 

Documentación: https://zeit.co/docs/v2/getting-started/installation/.

- Para deployar la API necesitas ejecutar el siguiente comando sobre el root del repositorio:
$ now 
- Y para deployar el frontend, ejecutá este otro sobre la carpeta my-app/:
$ now 

Documentación: https://zeit.co/docs/v2/deployments/basics/.

## Creacion de nuevas rutas:

Para crear nuevas rutas vas a tener que editar el erchivo now.json, utilizando este formato: 

```xml
  {
    "src": "/ping",
     "methods": [
          "GET" ],
      "dest": "/index.js" 
  }
```
## Nota: Vas a tener que generar un deploy para la API y otro para el frontend para que queden accesibles por distintas URLs.
