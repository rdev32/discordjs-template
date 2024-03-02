import 'dotenv/config'
import client from './app'

client.login(process.env.TOKEN)
