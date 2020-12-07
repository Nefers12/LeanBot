module.exports.run = (client, message) => {

  const commands = client.channels.cache.find(channel => channel.name === 'commands');

  const lang = {
    "title": "Veuillez réagir pour choisir la langue du bot.",
    "color": 16556032,
    "fields": [
      {
        "name": "Langues disponibles.",
        "value": "🇫🇷 Pour choisir le Français\n 🇬🇧 Pour choisir l'Anglais"
      }
    ]
  };

commands.send({embed : lang}).then(async msg => {
  await msg.react('🇫🇷');
  await msg.react('🇬🇧');

  const filter = (reaction, user) => {
    return ['🇫🇷', '🇬🇧'].includes(reaction.emoji.name) && user.id === message.author.id;
  };
  
  msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
      const reaction = collected.first();
  
      if (reaction.emoji.name === '🇫🇷') {
        commands.send('La langue a été définie sur Français.');
      } else {
        commands.send('La langue a été définie sur Anglais.');
      }
    })
    .catch(collected => {
      message.reply('Tu as pris trop de temps à répondre.');
    });

})

}

module.exports.help = {
  name:"language",
  description: "Change la langue",
  args: false,
  admin: true,
  delete: false
};