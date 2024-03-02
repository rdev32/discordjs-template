import 'dotenv/config'

try {
  if (!process.env.CLIENT) {
    throw new Error('Discord Bot cliend id is not defined in the .env file.')
  }

  const permissions = process.env.PERMISSIONS || 0

  const link = {
    url: `https://discord.com/api/oauth2/authorize?client_id=${process.env.CLIENT}&permissions=${permissions}&scope=bot%20applications.commands`
  }

  console.log('Guild invitation link:', link)
} catch (error) {
  if (error instanceof Error) {
    console.error(error.message)
  }
}
