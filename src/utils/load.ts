import 'dotenv/config'
import { REST, Routes, RESTPutAPIApplicationCommandsResult } from 'discord.js'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

const commands = []
const foldersPath = join(__dirname, '../commands')
const commandFiles: string[] = readdirSync(foldersPath).filter((file) => file.endsWith('.js'));

(async () => {
  try {
    for (const file of commandFiles) {
      const module = await import(`${foldersPath}/${file}`)
      
      if (!module) {
        throw new Error(`Unable to import ${file}`)
      }
      
      const command: Command = module.default
      
      if ('data' in command && 'service' in command) {
        commands.push(command.data.toJSON())
      } else {
        console.log(`The command at ${file} is missing a required "data" or "service" property.`)
      }
      
      const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)
      if (!rest) throw new Error('Unable to connect to REST server')
      
      console.log(`Submitting ${commands.length} application (/) commands.`)
      
      const data = await rest.put(
        Routes.applicationCommands(process.env.CLIENT as string), 
        { body: commands }
      ) as Array<RESTPutAPIApplicationCommandsResult>
    
      console.log(`Loaded ${data.length} application (/) commands.`)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
})()
