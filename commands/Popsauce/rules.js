module.exports.run = (client) => {
  const joinstart = client.channels.cache.find(channel => channel.name === 'join-start');
      const rules = {
        "title": "Règles du jeu popsauce",
        "description": "```Voici les règles que vous devez connaître.```",
        "color": 16716032,
        "fields": [
          {
            "name": "Lancer une partie :",
            "value": "Pour lancer une partie vous devez être trois à dix joueurs.\nSi une personne a rejoint mais doit partir, vous pouvez réinitialiser la liste des joueurs présents dans la partie avec la commande $reset\nLe joueur qui lance la partie se verra être le modérateur de cette dernière."
          },
          {
            "name": "But du jeu:",
            "value": "Le but du jeu est assez simple, une image apparaît et vous devez trouver d'où viens l'image.\nA chaque fois qu'un joueur trouve la bonne réponse, ce dernier gagne un point et l'image change.\nAttention, les caractères : - à é ù / + . ~ { } ( ) [ ] @ # = ne sont pas pris en compte, merci de ne pas les écrires dans vos réponces.  \nLe premier qui arrive à 10 points gagne la partie."
          },
          {
            "name": "Commandes utiles",
            "value": "$join permet de rejoindre la partie\n$rules affiche les règles du jeu\n$start permet de lancer la partie\n$reset permet de réinitialiser la liste des joueurs\n$score permet d'afficher un récapitulatif du score de tout les joueurs\n$points permet de définir le nombre de points pour gagner la partie.\n$skip permet de passer à l'image suivante si personne ne trouve (Attention, seul le modérateur de la partie peut effectuer cette commande)\n$stop arrête la partie en cours (Attention, seul le modérateur de la partie peut effectuer cette commande)"
          }
        ]
      };

      joinstart.send({embed : rules}); //envoie l'embed contenant toute les informations dans le chat.
    }
    
module.exports.help = {
  name:"rules",
  description: "Affiche les règles de popsauce",
  args: false,
  admin: false,
  delete: false
}