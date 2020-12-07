module.exports.run = (client) => {

  var mod = require('../../configs/vars');//importe les variables relatives au jeu depuis le fichier main.js.
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');//l'id du salon salon nomé join-start es stocké dans la variable popsauce.
  
  const nb = mod.Players.length; //on défini la longueur du tableau des scores en fonction du nombre de joueurs présents.

  switch (nb) {
  case 3:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2]);
    break;
  case 4:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2] + "\n" + "<@" + mod.Players[3] + ">" + " : " + mod.Score[3]);
    break;
  case 5:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2] + "\n" + "<@" + mod.Players[3] + ">" + " : " + mod.Score[3] + "\n" + "<@" + mod.Players[4] + ">" + " : " + mod.Score[4]);
    break;
  case 6:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2] + "\n" + "<@" + mod.Players[3] + ">" + " : " + mod.Score[3] + "\n" + "<@" + mod.Players[4] + ">" + " : " + mod.Score[4] + "\n" + "<@" + mod.Players[5] + ">" + " : " + mod.Score[5]);
    break;
  case 7:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2] + "\n" + "<@" + mod.Players[3] + ">" + " : " + mod.Score[3] + "\n" + "<@" + mod.Players[4] + ">" + " : " + mod.Score[4] + "\n" + "<@" + mod.Players[5] + ">" + " : " + mod.Score[5] + "\n" + "<@" + mod.Players[6] + ">" + " : " + mod.Score[6]);
    break;
  case 8:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2] + "\n" + "<@" + mod.Players[3] + ">" + " : " + mod.Score[3] + "\n" + "<@" + mod.Players[4] + ">" + " : " + mod.Score[4] + "\n" + "<@" + mod.Players[5] + ">" + " : " + mod.Score[5] + "\n" + "<@" + mod.Players[6] + ">" + " : " + mod.Score[6] + "\n" + "<@" + mod.Players[7] + ">" + " : " + mod.Score[7]);
    break;
  case 9:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2] + "\n" + "<@" + mod.Players[3] + ">" + " : " + mod.Score[3] + "\n" + "<@" + mod.Players[4] + ">" + " : " + mod.Score[4] + "\n" + "<@" + mod.Players[5] + ">" + " : " + mod.Score[5] + "\n" + "<@" + mod.Players[6] + ">" + " : " + mod.Score[6] + "\n" + "<@" + mod.Players[7] + ">" + " : " + mod.Score[7] + "\n" + "<@" + mod.Players[8] + ">" + " : " + mod.Score[8]);
    break;
  case 10:
    popsauce.send("Tableau des scores :\n" + "<@" + mod.Players[0] + ">" + " : " + mod.Score[0] + "\n" + "<@" + mod.Players[1] + ">" + " : " + mod.Score[1] + "\n" + "<@" + mod.Players[2] + ">" + " : " + mod.Score[2] + "\n" + "<@" + mod.Players[3] + ">" + " : " + mod.Score[3] + "\n" + "<@" + mod.Players[4] + ">" + " : " + mod.Score[4] + "\n" + "<@" + mod.Players[5] + ">" + " : " + mod.Score[5] + "\n" + "<@" + mod.Players[6] + ">" + " : " + mod.Score[6] + "\n" + "<@" + mod.Players[7] + ">" + " : " + mod.Score[7] + "\n" + "<@" + mod.Players[8] + ">" + " : " + mod.Score[8] + "\n" + "<@" + mod.Players[9] + ">" + " : " + mod.Score[9]);
    break;
}
};

module.exports.help = {
  name: "score",
  description: "Affiche le socre des joueurs",
  args: false,
  admin: false,
  delete: false
};