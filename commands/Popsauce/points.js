module.exports.run = (client, message, args) => {
  var mod = require('../../configs/vars');//importe les variables relatives au jeu depuis le fichier main.js.
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');//l'id du salon salon nomé join-start es stocké dans la variable joinstart.
  var p = mod.Players.includes(message.author.id);//la variable p vaut l'index où sont stockés les joueurs.
  if(launch === false && !message.author.bot && p === true){
  mod.points = args;
  joinstart.send("Nombre de points nécéssaires pour gagner la partie définis à "+args+" points.");
  }

  if(launch === false && !message.author.bot && p === false){
    joinstart.send("Vous devez être dans la partie pour changer le nombre de points requis pour gagner la partie.");
  }
}

module.exports.help = {
  name:"points",
  description: "affiche toutes les commandes",
  args: true,
  admin: false,
  delete: false
};