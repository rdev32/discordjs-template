// this file must be run once, its only for registering commands to the bot
import fs from 'node:fs'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import 'dotenv/config'

const commands = []
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = import(`./commands/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN)

rest.put(Routes.applicationGuildCommands(
    process.env.CLIENT, process.env.GUILD), { body: commands })
    .then(() => { console.log('Successfully registered application commands.')})
    .catch(console.error)
