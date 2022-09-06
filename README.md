# Discord Bot Template #
Este plantilla utiliza javascript moderno ES6. Debido a que Discord constantemente cambia las funciones de su API, este repositorio se mantendra actualizado para garantizar la funcionalidad basica y escalable.

## Estrutura ##
Siguiendo el tutorial de la [guia](https://discordjs.guide) debes utilizar la estructura:
- El folder `/commands` contiene los comandos.
- El folder `/events` contiene los eventos.

## Desarrollo ##
### Configuracion ###
No olvides llenar las [credenciales](https://discord.com/developers/applications) de tu portal en el archivo `.env` con:
- `TOKEN` para token secreto generado de tu bot.
- `GUILD` para el id de tu servidor de pruebas.
- `CLIENT` para el id del cliente de tu bot de Discord.

### Comandos ###
Este proyecto tiene los siguientes comandos disponibles.
- `npm start` ejecuta el proyecto.
- `npm run build` retranspila el proyecto.
- `npm run dev` para el modo de desarrollo.
- `npm run link` genera el link de invitacion para agregarlo a tu servidor de pruebas.
- `npm run register` sincroniza los comandos a tu bot con los de tu servidor.


Comparte el proyecto con cualquiera que quiera empezarse en el desarrollo de bots para Discord!
