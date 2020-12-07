module.exports.run = (client, message) => {

  var mod = require('../../configs/vars');//importe les variables relatives au jeu depuis le fichier main.js.
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');//l'id du salon salon nomé join-start es stocké dans la variable joinstart.
  var p = mod.Players.includes(message.author.id);//la variable p vaut l'index où sont stockés les joueurs.

  if(launch === true) {
    joinstart.send("Une partie à déjà démarré sans toi, dommage !"); //message envoyé si une partie est déjà en cours.
  };

  if(launch === false && p === false) {
    joinstart.send(message.author.toString() + " a rejoint la partie !"); //message envoyé quand un joueurs rejoint la partie.
    console.log(message.author.username);//affiche dans la consolle l'utilisateur ayant effectué la commande.
    mod.Players.push(message.author.id); //ajoute le joueur à la liste des joueurs.
    console.log(mod.Players);//renvoie la liste des joueurs après qu'un joueur ait rejoin la partie.
  }else{
    if(launch === false && p === true){ //si un joueur est déjà dans la liste des joueurs et que la partie n'est pas démarrée.
      joinstart.send("<@"+ message.author.id +"> " + "est déjà présent dans la partie");//on renvoie un message d'erreur.
    }
  };
};

module.exports.help = {
  name: "join",
  description: "Rejoin la partie de popsauce",
  args: false,
  admin: false,
  delete: false
};