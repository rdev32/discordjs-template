## Discord Bot Template ##
Una plantilla para arrancar con tu bot para Discord.

### Estrutura ###
Siguiendo el tutorial de la [guia oficial](https://discordjs.guide/) debes utilizar la estructura:
- El folder `/commands` es para colocar tus comandos
- El folder `/events` es para sincronizar los eventos

### Desarrollo ###
No olvides colocar tu archivo `.env` en `/root` y llenar las credenciales con:
- `TOKEN` para la llave generada secreta de tu bot.
- `GUILD` para el id de tu servidor de pruebas.
- `CLIENT` para el id registrado de tu bot de Discord.

En `package.json` tendras los siguientes comandos disponibles.
- `npm start` lanza el proyecto
- `npm run build` retranspila el proyecto
- `npm run dev` lanza el proyecto en modo de desarrollo

Utiliza `node build/register.js` para sincronizar los comandos con la API de Discord.

### Descripcion ###
Debido a que este proyecto utiliza javascript moderno ES6+ con Babel como transpilador, deberas tener conocimientos previos en estos. Como Node.js entiende `CommonJS` la ejecucion de tu proyecto se ubicara en la carpeta `build`. 
