module.exports.run = (client, message) => {

  var mod = require('../../configs/vars');//importe les variables relatives au jeu depuis le fichier main.js.
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');//l'id du salon salon nomé join-start es stocké dans la variable joinstart.
  var p = mod.Players.includes(message.author.id);//la variable p vaut l'index où sont stockés les joueurs.

  if(launch === false && !message.author.bot && p === true){//si la partie est en cours que l'auteur du message n'est pas un bot et qu'il fait partie des joueurs et qu'il est le joueur ayant lancé la partie.
    mod.Players = ["",""]; //reset des joueurs.
    mod.Admin = [];//reset du joueur qui a lancé la partie.
    mod.Score = [0,0,0,0,0,0,0,0,0,0];//reset des scores.
    
    joinstart.send(message.author.toString() + " a réinitialisé la liste des joueurs");
    console.log(mod.Players);
  }else{
    if(launch === false && !message.author.bot && p === false){//si le partie n'est pas en cours que l'auteur du message n'est pas un bot et que l'auteur n'est pas un joueur.
      joinstart.send(message.author.toString() + " vous devez être présent dans la partie pour pouvoir réinitialiser les joueurs.");//on envoie un message d'erreur.
    }
  }
  

};

module.exports.help = {
  name: "reset",
  description: "Reset la liste des joueurs",
  args: false,
  admin: false,
  delete: false
};