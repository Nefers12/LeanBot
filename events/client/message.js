const Discord = require('discord.js');
const { PREFIX } = require('../../configs/config');
image = 0;

module.exports = (client, message) => {
  var mod = require('../../configs/vars');//importe les variables relatives au jeu depuis le fichier main.js.
  var list = require('../../configs/lists');
  var p = mod.Players.includes(message.author.id);//la variable p vaut l'index où sont stockés les joueurs.
  const popsauce = client.channels.cache.find(channel => channel.name === 'popsauce');//l'id du salon salon nomé join-start es stocké dans la variable popsauce.
  str0 = String([list.rep[image]]).replace(/\s+/g, '');//on supprime les espaces entre les mots;
  str1 = String([list.repalias[image]]).replace(/\s+/g, '');//on supprime les espaces entre les mots;
  str2 = String([list.repalias2[image]]).replace(/\s+/g, '');//on supprime les espaces entre les mots;
  str3 = String([list.cqrep[image]]).replace(/\s+/g, '');//on supprime les espaces entre les mots;
  str4 = String([list.cqrepalias[image]]).replace(/\s+/g, '');//on supprime les espaces entre les mots;
  str5 = String([list.qrep[image]]).replace(/\s+/g, '');//on supprime les espaces entre les mots;
  str6 = String([list.qrepalias[image]]).replace(/\s+/g, '');//on supprime les espaces entre les mots;
  msg = message.content.replace(/\s+/g, '');//on supprime les espaces entre les mots;

  function goodAnswer(){
  popsauce.send("Bonne réponse");
  mod.Score[mod.Players.indexOf(message.author.id)] = mod.Score[mod.Players.indexOf(message.author.id)] + 1 //on ajoute 1 au score
  popsauce.send("Votre score est de " + mod.Score[mod.Players.indexOf(message.author.id)])

  if(mod.Score[mod.Players.indexOf(message.author.id)] >= mod.points){//si un joueur à un score de 10 ou plus.
    popsauce.send("<@"+ message.author.id + ">"+" à gagné la partie.");//on annon sa victoire.
    mod.Players = [];//on reset la partie.
    mod.Admin = [];
    mod.Score = [0,0,0,0,0,0,0,0,0,0];
    mod.points = 10;
    launch = false;
    return;//on sort de la boucle pour ne pas effectuer le reste.
  }

  rdm = Math.floor(Math.random() * Math.floor(3));

  switch(rdm){
      case 0:
          image = Math.floor(Math.random() * Math.floor(list.cquotes.length));//on choisi une image au hasard.
          console.log([list.cqrep[image]]);
          mod.rep = list.cqrep
          mod.q = list.cquotes
          qembed();
          break;
        case 1:
          image = Math.floor(Math.random() * Math.floor(list.imgname.length));//on choisi une image au hasard.
          console.log([list.rep[image]]);
          mod.rep = list.rep
          picembed()
          break;
        case 2:
          image = Math.floor(Math.random() * Math.floor(list.quotes.length));//on choisi une image au hasard.
          console.log([list.qrep[image]]);
          mod.rep = list.qrep
          mod.q = list.quotes
          qembed();
          break;

  }
}

function picembed(){
  const img = new Discord.MessageAttachment('images/'+list.imgname[image]+'.png');
  const pic = new Discord.MessageEmbed()
  .setColor(3366179)
  .attachFiles(img)
  .setImage('attachment://'+list.imgname[image]+'.png')
  .setAuthor("D'où viens cette image", null, null)
  popsauce.send(pic);
}

function qembed(){
  const quote = new Discord.MessageEmbed()
  .setColor(3366179)
  .setAuthor("D'où viens cette citation", null, null)
  .setDescription("```" + [mod.q[image]] + "```")
  popsauce.send(quote);
}

  if(msg.toLowerCase() === str0 | msg.toLowerCase() === str1 | msg.toLowerCase() === str2 && launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true && rdm === 1){//si le message contient la bonne réponse que la partie est en cours que l'auteur n'est pas un bot, que la personne est un joueur et que que le message ne commence pas par le préfix.
    goodAnswer();
  }else{//si le message envoyé par un joueur ne contient pas la bonne réponse.
    if(launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true && rdm === 1){
      popsauce.send("Mauvaise réponse");
      console.log([list.rep[image]]);
    }
  }

  if(msg.toLowerCase() === str3 | msg.toLowerCase() === str4 && launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true && rdm === 0){//si le message contient la bonne réponse que la partie est en cours que l'auteur n'est pas un bot, que la personne est un joueur et que que le message ne commence pas par le préfix.
    goodAnswer();
  }else{//si le message envoyé par un joueur ne contient pas la bonne réponse.
    if(launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true && rdm === 0){
      popsauce.send("Mauvaise réponse");
      console.log([list.cqrep[image]]);
    }
  }

  if(msg.toLowerCase() === str5 | msg.toLowerCase() === str6 && launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true && rdm === 2){//si le message contient la bonne réponse que la partie est en cours que l'auteur n'est pas un bot, que la personne est un joueur et que que le message ne commence pas par le préfix.
    goodAnswer();
  }else{//si le message envoyé par un joueur ne contient pas la bonne réponse.
    if(launch === true && !message.author.bot && !message.content.startsWith(PREFIX) && p === true && rdm === 2){
      popsauce.send("Mauvaise réponse");
      console.log([list.qrep[image]]);
    }
  }
  
  if (!message.content.startsWith(PREFIX) || message.author.bot) return; //Empeche un bot d'effectuer une commande.
  const args = message.content.slice(PREFIX.length).split(/ +/g); // Retire le prefix des arguments de la commande.
  const commandName = args.shift().toLowerCase(); //transforme la commande entrée par l'utilisateur en minuscule.

  if(!client.commands.has(commandName)) return; //effectue la commande entrée par l'utilisateur.
  const command = client.commands.get(commandName);

  if(command.help.args && !args.length){ //ajout d'un paramètre afin de renvoyer une erreur si des arguments son requis pour une commande.
    return message.channel.send("Des arguments sont requis !")
  }

  if(command.help.admin && !message.member.hasPermission('BAN_MEMBERS')){ //ajout d'un paramètre afin de renvoyer une erreur si l'utilisateur n'a pas les permissions nécessaires à l'execution de la commande (Admin).
    return message.channel.send("Tu n'a pas les permissions nécessaires !");
  }

  if(command.help.delete){ //ajout d'un paramètre definisant si la commande de l'utilisateur doit ou non être supprimée du chat.
     message.delete();
  };

  command.run(client, message, args);//execute le code de la commande appelée .

}