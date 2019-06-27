// Invite my bot: https://discordapp.com/api/oauth2/authorize?client_id=593866081333149706&permissions=201583616&scope=bot
let botVer = 'v1'; //v(major).(minor).(patch) ((build))
let cmdPrefix = 'bork ';
let port = process.env.PORT || 1337;

const token = require('./token.json').token;
const path = require('path');

// Translate Module
const translate = require('@vitalets/google-translate-api');

// Main app
const app = require('express')(); //Web server component
const Discord = require('discord.js');
const client = new Discord.Client(); 
const http = require('http').Server(app);

client.on('ready', () => {//Initialize Discord connection
  console.log(`[Bork ${botVer}] Logged in as ${client.user.tag}!`);
  client.user.setActivity('Bork Bork', { type: 'PLAYING' });
});

function logCmd(msg){
  console.log(`Found Cmd (from ${msg.author}): ${msg.content}`);
}

function getParams(msg, sp){
	msg = msg.slice(sp);
	if(msg.slice(0, 1) === ' ' && msg.length > 1){
		msg = msg.slice(1); 
	}
	else if(msg.length <= 1){
		return [];
	}
	return msg.split(' ');
}

let borkCount = {

}

let friendshipStatus = {

}

let cooldowns = {

}

let voiceConnection; //For voice input

client.on('message', msg => {
if(msg.author.id === client.user.id || msg.author.bot){return}  // Don't reply to self, don't reply to bots
 
if(Math.random() < 0.08) {msg.channel.send('bork')}

let mf = msg.content; //message formatted

if(mf.toLowerCase().indexOf('bork') !== -1){
  borkCount[msg.author.id] = 0; 
}
else{
  if(borkCount[msg.author.id]){
    borkCount[msg.author.id] ++; 
  }
  else{
    borkCount[msg.author.id] = 1; 
  }
}

if(!friendshipStatus[msg.author.id]){
  friendshipStatus[msg.author.id] = 0; 
}

if(borkCount[msg.author.id] >= 6 && friendshipStatus[msg.author.id] < 100 || borkCount[msg.author.id] >= 12){
  msg.delete(); 
  msg.channel.send('bORK! *(you\'re not paying enough attention to bork! use his name more!)*').then(m => m.delete(5000));
}

if(mf.slice(0, cmdPrefix.length).toLowerCase() === cmdPrefix){//Command
  mf = mf.slice(cmdPrefix.length);
  if(mf.slice(-1) === ' '){mf = mf.slice(0, -1)} //Trim off extra space
  let mspl = mf.split(' '); //message split (as commands generally work like this)
  logCmd(msg);
  switch(mspl[0].toLowerCase()){  
    case 'help': 
      msg.channel.send('go read the readme, bork');
      friendshipStatus[msg.author.id] -= 3; 
      break;
    case 'bork': 
      msg.channel.send(`:cat: Bork! (*${Date.now() - msg.createdTimestamp}ms*)`);
      break;
    case 'pet': 
      if(Date.now() > cooldowns[msg.author.id+'-pet'] + 30000 || !cooldowns[msg.author.id+'-pet']){
        msg.channel.send(`Bork!`); 
        friendshipStatus[msg.author.id] += 5; 
        cooldowns[msg.author.id+'-pet'] = Date.now(); 
      }
      else{
        msg.channel.send(`Too many pets!`)}
      break;
    case 'poke': 
      if(Date.now() > cooldowns[msg.author.id+'-poke'] + 180000 || !cooldowns[msg.author.id+'-poke']){
        msg.channel.send(`bOrk!`); 
        friendshipStatus[msg.author.id] -= 5; 
        cooldowns[msg.author.id+'-poke'] = Date.now(); 
      }
      else{
        msg.channel.send(`Too many pokes!`)}
      break;
    case 'slap': 
      if(Date.now() > cooldowns[msg.author.id+'-slap'] + 600000 || !cooldowns[msg.author.id+'-slap']){
        msg.channel.send(`bORk!!!!`); 
        friendshipStatus[msg.author.id] -= 30; 
        cooldowns[msg.author.id+'-slap'] = Date.now(); 
      }
      else{
        msg.channel.send(`Too many slaps!`)}
      break;
    case 'status': 
      let frs = friendshipStatus[msg.author.id]; 
      msg.reply(`you have ${(frs < 1000?frs:'∞')} friendship points with Bork!`);
      if(frs < -30){
        msg.channel.sendFile(path.join(__dirname, 'images', 'mad.png'))}
      else if(frs < 0){
        msg.channel.sendFile(path.join(__dirname, 'images', 'unhappy.png'))}
      else if(frs < 100){
        msg.channel.sendFile(path.join(__dirname, 'images', 'happy.png'))}
      else{
        msg.channel.sendFile(path.join(__dirname, 'images', 'very happy.png'))}
      break; 
    case 'stab': 
      if(Math.random() < 0.98){
        msg.member.kick().then(res => {
          msg.channel.send('BOOORRKKK!!! \\*attacking*\n*(The user attempted to stab Bork, but got stabbed back and is now kicked from the server.*'); 
        }).catch(err => {
          msg.channel.send('*(Cannot kick user due to insufficient permissions. You\'ve lost 1,000 friendship points with Bork.)*')
          friendshipStatus[msg.author.id] -= 1000; 
        }); 
      }
      else{
        msg.channel.send('bork? booooorkkkkk.... :\'(\n*(Bork was successfully stabbed)*')
        msg.guild.leave(); 
      }  
      break;
    case 'vc':
      if(msg.member.voiceChannel){
        msg.member.voiceChannel.join()
        .then(connection => { // Connection is an instance of VoiceConnection
          voiceConnection = connection;
          msg.reply('borked into a borking channel!');
        })
        .catch(console.log);
      }
      else{
        msg.reply('you need to bork into a borking channel first!!')
      }
      break;
    case 'lvc': 
      if(voiceConnection){
        voiceConnection.disconnect(); 
        delete voiceConnection;
        friendshipStatus[msg.author.id] -= 3; 
        msg.channel.send(`Borked out of the borking channel!`);
      }
      break;
  }
}
else{
  if(mf.length > 4){
    if(Math.random() > 0.9){
      translate(mf, {from: 'auto', to: 'fr'}).then(res => {
        if(friendshipStatus[msg.author.id] < 0){
          msg.delete() }
        msg.channel.send(`*(from ${msg.author.username})* ${res.text}`);
      })
    }
  }
}


if(friendshipStatus[msg.author.id] >= 1000 && friendshipStatus[msg.author.id] < 2000){
  friendshipStatus[msg.author.id] = 10000000; // close enough to infinity, using "Infinity" can cause issues
  msg.reply('Bork loves you ♡')
}

});

setInterval(function(){ // random meowing
  if(voiceConnection){
    if(Math.random() > 0.92){
      voiceConnection.playFile(path.join(__dirname, 'meow.mp3'));
    }
  }
}, 3000); 

client.on('error', console.error); // Placeholder for now, will be properly handled later

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

http.listen(port, function(){
  client.login(token);
  console.log('Connected! Now listening on localhost:'+port);
});