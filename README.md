# Discord Bot Template #
Este plantilla utiliza javascript moderno ES6+ con Babel como transpilador, para una manera de soportar los estandares modernos. Debido a que Discord constantemente cambia las funciones de su API, este repositorio se mantendra actualizado para garantizar la funcionalidad.

## Estrutura ##
Siguiendo el tutorial de la  debes utilizar la estructura:
- El folder `/commands` contiene la estructura de y para generar mas comandos.
- El folder `/events` contiene la estructura de y para crear mas eventos.

## Desarrollo ##
### Configuracion ###
En el archivo `.env` no olvides colocar las [credenciales](https://discord.com/developers/applications):
- `TOKEN` para token secreto generado de tu bot.
- `GUILD` para el id de tu servidor de pruebas.
- `CLIENT` para el id del cliente de tu bot de Discord.

### Comandos ###
En `package.json` tendras los siguientes comandos disponibles.
- `npm start` ejecuta el proyecto.
- `npm run build` retranspila el proyecto.
- `npm run dev` lanza un watcher para retranspilar y ejecutar el codigo en modo de desarrollo.
- `npm run link` genera el link de invitacion para agregarlo a tu servidor de pruebas.
- `npm run register` sincroniza los cambios a tu bot con la API de Discord.

## Informacion ##
Revisa la [guia oficial de Discord](https://discordjs.guide/) para comprender el codigo de este repositorio y revisa la [documentacion](https://discord.js.org/#/docs/) oficial para extender tus conocimientos. 