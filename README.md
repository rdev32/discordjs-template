## Plantilla para crear bots de discord ##
Una plantilla para empezar con cualesquier tipo de bot para Discord.

### Estrutura ###
Siguiendo el tutorial de la [guia oficial](https://discordjs.guide/) debes utilizar la estructura:
- El folder `/commands` es para colocar tus comandos
- El folder `/events` es para sincronizar los eventos

### Desarrollo ###
En `package.json` tendras los siguientes comandos disponibles.
- `npm start`
- `npm run build`
- `npm run dev`

### Requerimientos ###
Debido a que este proyecto utiliza javascript moderno ES6+ con Babel como transpilador, deberas tener conocimientos previos en estos. Ya que lo que corre Node.js es javascript antiguo, lo transpilado a este, esta en la carpeta `build`. Este proyecto es compactible con las ultimas versiones LTS de Node.js
