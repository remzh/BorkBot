// Invite my bot: https://discordapp.com/api/oauth2/authorize?client_id=593866081333149706&permissions=201583616&scope=bot
let botVer = 'v0.1 pre'; //v(major).(minor).(patch) ((build))
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

const { PerformanceObserver, performance } = require('perf_hooks'); //For eval command
const {VM} = require('vm2');
const vm = new VM({
  timeout: 500, 
  sandbox: {
    console: {
      log: (d) => {ext_secureLog(d)}
    }
  }
});
let vm_log = '';
function ext_secureLog(data) {
  if(typeof data === 'object'){data = JSON.stringify(data)}
  vm_log += `> ${data}\n`; 
};



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

function randInt(min, max){
	return Math.round(Math.random()*(max-min))+min; 
}

client.on('message', msg => {
if(msg.author.id === client.user.id || msg.author.bot){return}  // Don't reply to self, don't reply to bots
  
let mf = msg.content; //message formatted
if(mf.slice(0, cmdPrefix.length).toLowerCase() === cmdPrefix){//Command
  mf = mf.slice(cmdPrefix.length);
  if(mf.slice(-1) === ' '){mf = mf.slice(0, -1)} //Trim off extra space
  let mspl = mf.split(' '); //message split (as commands generally work like this)
  logCmd(msg);
  switch(mspl[0].toLowerCase()){  
    case 'ping': 
      msg.reply(`:ping_pong: Pong! (*Time: ${Date.now() - msg.createdTimestamp}ms*)`);
      break;
    case 'sp:killswitch':
      msg.channel.send(`**Initiating emergency kill switch...**\n*Note that this will terminate the connection between the bot and the Discord server, and the bot will no longer be able to respond to anything. This action is logged to prevent abuse.*`); 
      console.log(`Terminating Discord connection... (Initiated by ${msg.author.username} (id: ${msg.author.id}))`);
      client.destroy(); 
      break;
  }
}
});

client.on('error', console.error); // Placeholder for now, will be properly handled later

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

http.listen(port, function(){
  client.login(token);
  console.log('Connected! Now listening on localhost:'+port);
});