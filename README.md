# LeanBot, Nefers' Discord bot

This bot is created in in order to make a discord version of the [Popsauce Game](https://jklm.fun/), I will update my bot when i have time for it.


## Features
- Minecraft rcon acces
- Minecraft server infos
- [Popsauce Game](https://jklm.fun/)
- Help command
- Message when bot is online

## RoadMap
- [x] Minecraft Rcon acces
- [x] Help command
- [ ] clean code and adding comments 
  ### Popsauce
- [x] Add quotes
- [ ] Add content
- [ ] Add a timer



## Installation

To install my bot you need Node, and the following packages :

- Discord.js 
  ```
  npm i discord.js
  ```
- minecraft-server-util
  ```
  npm i minecraft-server-util
  ```

  Here a batch file to clone my repo and add a config.js file.

```bash

git clone https://github.com/Nefers12/LeanBot.git

cd LeanBot/configs

echo > config.js

```

Then fill the `config.js` file with the following informations :

```
exports.TOKEN = ""; //Type your token here
exports.PREFIX = ""; //The prefix you want to use for commands

//Let the following informations blank if you don't have a minecraft server
exports.IPRCON = ""; 
exports.MAP = "";
exports.PASS = "";
exports.IP = "";
```

## SETUP ON YOUR SERVER

To setup the bot on your server you must have channels called :
- commands
- status
- join-start
- popsauce

If you want to activate minecraft commands, drag minecraft file into the command file.