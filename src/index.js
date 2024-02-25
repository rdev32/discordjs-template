import fs from 'node:fs'
import { Client, Intents, Collection } from 'discord.js'
import 'dotenv/config'

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.commands = new Collection()
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    const command = import(`./commands/${file}`)
    client.commands.set(command.data.name, command)
}

client.once('ready', () => {
	console.log('Bot is up and running!')
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return
    
    const command = client.commands.get(interaction.commandName)
    if (!command) return

    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply({
            content: 'Error executing command',
            ephemeral: true
        })
    }
})

client.login(process.env.TOKEN)