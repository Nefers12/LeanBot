module.exports.run = (client, message) => {

  var mod = require('../../configs/vars');
  var list = require('../../configs/lists');//importe les variables relatives au jeu depuis le fichier main.js.
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');//l'id du salon salon nomé join-start es stocké dans la variable joinstart.
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');;//l'id du salon salon nomé join-start es stocké dans la variable popsauce.
  var p = mod.Players.includes(message.author.id);//la variable p vaut l'index où sont stockés les joueurs.
  var a = mod.Admin.includes(message.author.id);//la variable a vaut l'index où est stocké le joueur qui a lancé la partie.

  if(launch === true && !message.author.bot && p === true && a === true){//si la partie est lancée que l'auteur n'est pas un bot, qu'il est un joueur et qu'il est le joueur qui a lancé la partie.
  popsauce.send("La réponse était " +[list.rep[image]]);
    mod.Players = [];//on reset les joueurs.
    mod.Admin = [];//on reset le joueur qui a lancé la partie.
    mod.Score = [0,0,0,0,0,0,0,0,0,0];//on reset le score.
    mod.points = 10;
    launch = false;//on défini l'état de la partie(non lancée).
    joinstart.send(message.author.toString() + " a arrêté la partie");
    console.log(mod.Players);
  }else{
    if(launch === true && !message.author.bot && p === false){//si le joueur qui execute la commande n'est pas le joueur qui a lancé la partie.
      joinstart.send(message.author.toString() + " Seul le joueur qui à lancé la partie peut l'arrêter'.");//on renveoi un message d'erreur.
    }
  }
  

};

module.exports.help = {
  name: "stop",
  description: "Arrête la partie en cours",
  args: false,
  admin: false,
  delete: false
};