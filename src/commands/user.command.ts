import { CommandInteraction, SlashCommandBuilder } from 'discord.js'

export default {
  data: new SlashCommandBuilder()
    .setName('user')
    .setDescription('Replies with user info'),
  service: async (interaction: CommandInteraction) => {
    await interaction.reply(`Your tag: ${interaction.user.tag}\nYour ID: ${interaction.user.id}`)
  }
}

