// this file must be run once, its only for registering commands a server
import fs from 'node:fs'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import 'dotenv/config'

(async () => {
    const commands = []
    const commandFiles = fs.readdirSync('./build/commands').filter(file => file.endsWith('.js'))

    for (const file of commandFiles) {
        const command = await import(`./commands/${file}`)
        commands.push(command.default.data.toJSON())
    }

    const rest = new REST({ version: '9' }).setToken(process.env.TOKEN)

    try {
        console.log('Started refreshing application (/) commands.')

        await rest.put(Routes.applicationGuildCommands(
            process.env.CLIENT, 
            process.env.GUILD), 
            { body: commands })

        console.log('Successfully reloaded application (/) commands.')
    } catch (error){
        console.error(error)
    }
})()