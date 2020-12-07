module.exports.run = (client) => {

  const commands = client.channels.cache.find(channel => channel.name === 'commands');

  const rules2 = {
    "title": "Liste des commandes",
    "description": "```Voici les commandes disponibles sur le serveur.```",
    "color": 16556032,
    "fields": [
      {
        "name": "Commandes générales :",
        "value": "$help affiche la liste des commandes sur le serveur"
      },
      {
        "name": "Commandes minecraft :",
        "value": "$mc affiche les informations sur le serveur minecraft\n$rcon Envoie une commande sur le serveur minecraft"
      },
      {
        "name": "Commandes Popsauce",
        "value": "$join permet de rejoindre une partie popsauce\n$reset réinitialise la liste de joueurs\n$start lance la partie\n$rules affiche les règles du jeu\n$score affiche le tableau des scores.\n$skip passe à la prochaine image\n$stop stop la partie en cours\n$points permet de définir le nombre de points pour gagner la partie popsauce."
      }
    ]
  };

  commands.send({embed : rules2}); //envoie l'embed contenant toute les informations dans le chat.

}

module.exports.help = {
  name:"language",
  description: "Change la langue",
  args: false,
  admin: false,
  delete: false
};