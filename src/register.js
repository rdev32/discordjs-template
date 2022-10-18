// this file must be run once, its only for registering commands a server
import 'dotenv/config'
import { REST, SlashCommandBuilder, Routes } from 'discord.js'

const commands = [
	new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with pong'),
].map(command => command.toJSON())

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

(async () => {
    try {
        console.log(`Started refreshing ${commands.length} application (/) commands.`)
    
        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT, process.env.GUILD), 
            { body: commands })
    
        console.log(`Successfully reloaded ${data.length} application (/) commands.`)
        
    } catch (error) {
        console.error(error)
    }
})()