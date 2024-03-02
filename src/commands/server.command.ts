import { CommandInteraction, SlashCommandBuilder } from 'discord.js'

export default {
  data: new SlashCommandBuilder()
    .setName('server')
    .setDescription('Replies with server info'),
  service: async (interaction: CommandInteraction) => {
    await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nCreated: ${interaction.guild.createdAt.toLocaleDateString('es-PE')}\nVerification level: ${interaction.guild.verificationLevel}`)
  }
}
