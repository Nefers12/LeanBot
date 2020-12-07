module.exports = client => {

  const status = client.channels.cache.find(channel => channel.name === 'status'); // le bot recherche un salon nommé 'status'.
  status.send('Bot Connecté'); // annonce quand le Bot est en ligne dans le salon 'status'.

  client.user.setPresence({
    status: 'online',
    activity: {
        name: '$help',
        type: 'PLAYING',
    }
});
  
}