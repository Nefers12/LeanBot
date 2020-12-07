module.exports.run = (client) => {

  const commands = client.channels.cache.find(channel => channel.name === 'commands');//l'id du salon salon nomé join-start es stocké dans la variable 

  const rules = {
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

  commands.send({embed : rules}) //envoie l'embed contenant toute les informations dans le chat.

}

module.exports.help = {
  name:"help",
  description: "affiche toutes les commandes",
  args: false,
  admin: false,
  delete: false
};