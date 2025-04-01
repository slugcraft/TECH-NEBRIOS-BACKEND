# TECH-NEBRIOS-BACKEND
REPOSITORIO DE TECH-NEBRIOS PARA EL BACKEND

## Instalación del repositorio
En la pantalla principal del repositorio, selecciona el boton "code". A continuación, selecciona tu opcion de preferencia para clonar el repositorio <sea https o SSH>; dirigete a la terminal de tu equipo y ejecuta el comando en la consola.

## Instalación de los paquetes
En la terminal de tu equipo, escribe la ruta en la cual se encuentra la carpeta generada del repositorio. A continuación, realiza la instalación de las dependencias a travez del siguiente codigo:
`npm install`
Se deberán de instalar correctamente todas las librerias en el package.json con la version en las que fueron instaladas en un inicio.
***Si se realizan las instalaciones de manera manual e individual de cada libreria, se corre el riesgo de actualizar las dependencias sin haber sido probadas antes, lo que puede causar errores al momento de desplegar.***

## Obtencion del .env
El archivo .env es fundamental para el despliegue de la aplicación, ya que contiene información sensible como claves de acceso o contraseñas. Estos datos no deben estar presentes en los archivos públicos del proyecto, ya que por cuestiones de seguridad podrían comprometer información confidencial. ***Para obtener el archivo .env, comuníquese con el propietario del repositorio o con su líder de equipo para que le otorguen acceso, ya que este archivo está configurado para ser ignorado por el .gitignore.***

>Nota: No distribuyas el .env a ninguna persona externa al proyecto.
>>Al compartir el archivo .env, queda extrictamente prohibido realizarlo a travéz de medios digitales. Con la finalidad de evitar filtraciones del mismo.