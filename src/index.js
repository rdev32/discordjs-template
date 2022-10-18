import 'dotenv/config'
import { Client, GatewayIntentBits } from 'discord.js'

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent
    ] 
})

client.once('ready', () => {
    console.log(`Bot ${client.user.tag} is up and running!`)
})

client.login(process.env.TOKEN)
