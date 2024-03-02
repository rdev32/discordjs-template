import { readdirSync } from 'node:fs'
import { join } from 'node:path'
import { Client, GatewayIntentBits, Collection, CommandInteraction } from 'discord.js'

declare module 'discord.js' {
  interface Client {
    commands?: Collection<string, Command>
  }
}

const client = new Client({
  intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers
    ]
})

client.commands = new Collection()
const commandsPath = join(__dirname, './commands')
const commandFiles: string[] = readdirSync(commandsPath).filter(file => file.endsWith('.js'));

(async () => {
  try {
    for (const file of commandFiles) {
      const module = await import(`${commandsPath}/${file}`)
      const command: Command = module.default
      
      if (!command) {
        throw new Error(`Error importing ${file}`)
      }
      
      if ('data' in command && 'service' in command) {
        client.commands.set(command.data.name, command)
      } else {
        console.log(`The command at ${file} is missing a required "data" or "service" property.`)
      }
    }
  } catch (error) {
    
  }
})()

const eventsPath = join(__dirname, './events')
const eventFiles: string[] = readdirSync(eventsPath).filter(file => file.endsWith('.js'));
  
(async () => {
  try {
    for (const file of eventFiles) {
      const module = await import(`${eventsPath}/${file}`)
      const event: Event = module.default
      
      if (!event) {
        throw new Error(`Error importing ${file}`)
      }
      
      if (event.once) {
        client.once(event.name, (...args: [CommandInteraction]) => event.controller(...args))
      } else {
        client.on(event.name, (...args: [CommandInteraction]) => event.controller(...args))
      }
    }
  } catch (error) {
    console.error(error)
  }
})()

export default client
