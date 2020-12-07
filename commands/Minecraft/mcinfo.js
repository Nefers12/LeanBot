module.exports.run = (client, message) => {
  /*const mc = require('minecraft-server-util');//appel des ressources requises.
  const {IP,MAP} = require ('../../configs/config');//appel de valeurs sécurisées dans un autre ficher.

    mc.ping(`${IP}`, { port: 10042 }) //obtient les informations du serveur minecraft dont l'ip est entrée.
    .then((response) => { //définit les informations obtenus comme 'response'.
      console.log(response);//affiche les informations récupérées dans la consolle.
      const infos = { // embed du message à renvoyer.
        "title": "Serveur minecraft",
        "description": "```\nVoici les informations du serveur minecraft```",
        "color": 10115092,
        "fields": [
          {
            "name": "IP",
            "value": response.host //affiche l'ip du serveur obtenue.
          },
          {
            "name": "Map",
            "value": `[clique ici pour accéder à la map en ligne](${MAP})` //affiche le site de la map du serveur.
          },
          {
            "name": "Joueurs en ligne",
            "value": response.onlinePlayers + " / " + response.maxPlayers //affiche le nombre de joueurs en ligne / nb de joueurs max.
          },
          {
            "name": "Version",
            "value": response.version //affiche la version du serveur.
          }
        ]
      };
      message.channel.send({embed : infos}) //envoie l'embed contenant toute les informations dans le chat.
    })*/
};

module.exports.help = {
  name:"mc",
  description: "Donne les info du serveur minecraft.",
  args: false,
  admin: false,
  delete: false
};