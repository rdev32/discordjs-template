import 'dotenv/config'

console.log('Generating your bot invitation link..\n')

if (process.env.CLIENT) console.log(`\x1b[32mhttps://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT}&permissions=0&scope=bot%20applications.commands`)
else console.error('\x1b[31mThe bot client id is missing! Add it on your .env file.')

console.log('\x1b[0m')