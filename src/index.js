import fs from 'node:fs'
import { Client, GatewayIntentBits, Collection } from 'discord.js'
import 'dotenv/config'

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.commands = new Collection()

const commandFiles = fs.readdirSync('./build/commands').filter(file => file.endsWith('.js'))

for (const file of commandFiles) {
    (async () => {
        const command = await import(`./commands/${file}`)
        client.commands.set(command.default.data.name, command.default)
    })()
}

const eventFiles = fs.readdirSync('./build/events').filter(file => file.endsWith('.js'))

for (const file of eventFiles) {
    (async () => {
        const event = await import(`./events/${file}`)
        if (event.default.once) {
            client.once(event.default.name, (...args) => event.default.execute(...args))
        } else {
            client.on(event.default.name, (...args) => event.default.execute(...args))
        }
    })()
}

client.login(process.env.TOKEN)
