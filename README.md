# BorkBot (Bork)
<img src='https://ryan778.github.io/images/bork.png' alt='Bork Bork!' width=256px/>
<br/>

**Meet Bork.**
<br/>
Discord is for you and your friends. But wait, this is the internet! You don't have any friends, right?

This is where Bork comes in. He'll be your friend. Friend...?

## About Bork
![Discord Hack Week](https://cdn-images-1.medium.com/max/2560/1*lh6NS8hx0pu5mlZeSqnu5w.jpeg)
Bork is a cat bot for Discord Hack Week. Why isn't he a dog? Good question, I don't know. I just like cats?
It's also a common(?) saying that dogs tend to think of us as gods, while cats think of themselves of gods. You better pay attention to Bork!

To ensure this, Bork has a multitude of "features" that help ensure **you'll never forget about Bork**. Bork will bork to you, you'll be forced to bork back to Bork, Bork will sometimes bork in other languages, and a few other tidbits. In fact, this readme has exactly 100 borks! Don't borking believe it? CTRL+F! Don't like Bork? You can try to stab him! If you succeed (you probably won't), then Bork will leave forever D: 

**Why "Bork"? What's your obsession?**
It's an inside joke. Bork sounds like "bark", but Bork is most definitely a cat. Bork was originally a verb, but now Bork's also a name after a friend named their Pokemon trainer Bork and I named my Stardew Valley cat Bork. Bork borks a lot. 

Bork's also used both a verb and a noun, which means this readme will be extra confusing for everyone. (I mean, did you understand the above two sections?) ~~Yay~~Bork!

If you want to see some of Bork's features without actually going through the trouble of setting up Bork, check out [the screenshots](https://github.com/Ryan778/BorkBot/tree/master/screenshots). 

## Features

### Talk to (or about) Bork!
If you don't use "bork" in your messages at least every six messages, **Bork won't let you talk until you do**. You won't ever forget him! (Using commands count as "borking")

If you're good friends with Bork (>=100 friendship), then you only have to bork a "bork" every twelve messages. 

### Random Borks Everywhere
Everytime someone says anything, there's a relatively small (8%) chance that Bork will bork up and say "bork". 
If Bork is in a ~~voice~~ borking channel (see commands), he'll also meow (bork?) randomly for no reason. 

### Multilingual Bork
Bork is fluent in French, Spanish, German, and Japanese. On occasion (10% if you're on good terms, 25% if you have negative friendship), Bork will translate your messages into one of these languages for no reason. 

If you're not on good terms with Bork (<10 friendship), then he'll also delete your original message so your other friends won't understand you (unless they speak such language, of course). 

### Bork Loves You
If you get your friendship with Bork to 1,000, then he'll love you. Forever. That's right, once you reach 1,000, then the friendship can no longer go down no matter how many times you poke or slap him (trying to stab him will still make him retaliate). Other than that, not much else happens. 
Potentially a reference to [Stardew Valley](https://stardewvalleywiki.com/Animals#Cat_or_Dog)

### Borkship
At the heart of Bork is friendship points, already briefly mentioned above. Why? Because currency is overrated. Using `bork status` lets you see what Bork things of you (with pictures too!!!), and various commands can change your friendship with Bork. Does it actually mean anything? Well, maybe a little. There's a few advantages here and there, but that's about it.

### Bork Abuse
Malicious users can choose to take advantage of Bork's fighting capabilities to wreak havoc and mass delete messages. Anyone can get Bork to scrach at messages, but if you're good enough friends with Bork, he can wipe out up to 50 messages at once! 

### Commands
All commands are prefixed with **bork**. Who needs random and confusing symbols?

`bork bork`: bork! (replacement for ping)

`bork status`: shows your friendship status (with pictures!!)

`bork help`: doesn't give help, decreases friendship (-3) because you thought you could ask bork for help (no, you can't)

`bork vc`: joins bork to your voice channel. He'll meow randomly. 

`bork lvc`: makes bork leave the voice channel, can be used by anyone. Decreases friendship because Bork doesn't like that (-3). 

`bork pet`: pets Bork. Increases friendship (+5). 30 second cooldown. 

`bork poke`: pokes Bork. Decreases friendship (-5). 3 minute cooldown. 

`bork slap`: slaps Bork. Significantly decreases friendship (-30). 10 minute cooldown. 

`bork scratch`: makes Bork randomly scratch (delete) between one and five messages from the channel. 

`bork nuke`: Bork borks into a borking frenzy! 10-50 messages will be deleted (you don't get to choose, Bork does what he wants). Requires 25 friendship. 

`bork stab`: attempts to stab Bork. If you succeed, Bork will die and leave the server. However, if you fail, you'll be kicked from the server. 

Bork is very aggressive when need be, which is why there's a 98% chance that you'll be on the losing side. Still, feel free to try! *If someone unkickable (due to permissions) tries to stab Bork, they'll lose 1,000 friendship points instead.*

## Self-hosting
- You'll need to have NodeJS on the machine you're running Bork. 
- Download this repository, and run `npm install` to install the necessary packages. 
- Voice channel features require ffmpeg. Download a copy of ffmpeg and put it in the bot directory, DiscordJS should automatically detect and use it. It's somewhat finicky, but it's also a rather minor component. 
- If you want to use my profile picture of Bork, upload `images/happy.png` as the profile picture. 
- Put your bot token into token.json, and start the bot with `node index.js`!

## Disclaimers
- Bork is not intended to be used on production servers for (hopefully) obvious reasons. 
- Bork stores friendship data in memory. If you stop the bot, you'll lose friendship values. 
- There's no guarantee that the bot won't spontaneously combust, despite the (quite possibly excessive) amount of effort I put into making a (near) useless bot and a fancy readme file. 

### Third-Party Libraries
- Bork images are from [Freepik](https://www.freepik.com/free-vector/flat-pack-cute-cat-emojis_1001312.htm) and are licensed under Creative Commons. 
- The meow sound is from [FreeSounds](https://freesound.org/people/tuberatanka/sounds/110011/) and is licensed under CC0
- This bot uses [DiscordJS](https://discord.js.org/#/) because I don't have the time to write [my own freaking batch API wrapper](https://github.com/Mad0Max/discord.bat) (but wouldn't it be cool to make it out of Batch?)
