## Discord Bot Template ##
Una plantilla para arrancar con tu bot para Discord.

### Estrutura ###
Siguiendo el tutorial de la [guia oficial](https://discordjs.guide/) debes utilizar la estructura:
- El folder `/commands` es para colocar tus comandos
- El folder `/events` es para sincronizar los eventos

### Desarrollo ###
En `package.json` tendras los siguientes comandos disponibles.
- `npm start`
- `npm run build`
- `npm run dev`

Utiliza `node build/register.js` para sincornizar los comandos con la API de Discord.

### Requerimientos ###
Debido a que este proyecto utiliza javascript moderno ES6+ con Babel como transpilador, deberas tener conocimientos previos en estos. Como Node.js entiende `CommonJS` la ejecucion de tu proyecto se ubicara en la carpeta `build`. 
