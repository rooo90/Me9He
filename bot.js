const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'M'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


  client.on('ready', function(){
    var ms = 1000 ;
    var setGame = [`Mh `,` Mhe`,`Mhel`,`Mhelp`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`http://www.twitch.tv/idk`);
    }, ms);1000

});  


client.on("message", message => {
 if (message.content === prefix + "help") {
 message.channel.send(":white_check_mark: ")
  const embed = new Discord.RichEmbed()
      .setColor("#00ff47")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
** Bot ${client.user.username} Commands **
╔[❖════════════════════════❖]╗
-   شكرا لأستخدام البوت 
-   By XMGX 
╚[❖════════════════════════❖]╝
╔[❖════════════════════════❖]╗
:crown: اوامر ادارية:crown: 
Mbc = يرسل رسالة للكل
╚[❖════════════════════════❖]╝
╔[❖════════════════════════❖]╗
:earth_africa: أوامر عامة:earth_asia: 
Msay = البوت يقول الكلام الي بعد الأمر
Mping = يعطيك بنقك
Mavatar = يعطيك صورتك أو صورة الي تمنشنه
╚[❖════════════════════════❖]╝
البوت تحت الانشاء.......
╔[❖════════════════════════❖]╗
-invite the bot :
https://discordapp.com/api/oauth2/authorize?client_id=463384497870864394&permissions=522304&scope=bot
-Support server:
https://discord.gg/fHz84Z
╚[❖════════════════════════❖]╝
`)


message.author.sendEmbed(embed)

}
});
         




client.on("message", message => {
      if (message.content === "Mping") {
      const embed = new Discord.RichEmbed()
  .setColor("#00ff47")
  .addField('**Your ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
   let args = message.content.split(" ").slice(1);
   if(message.member.hasPermission("MANAGE_MESSAGES")) {
  if (message.content.startsWith("Msay")) {
      message.delete().then;
       
           message.channel.send(args);
       }
  }
});

client.on('message', message => {
    if (message.content.startsWith("Mavatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("#00ff47")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#00ff47')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              message.channel.startTyping()
 let responses = [
        'تحتاج مساعدة جرب Mhelp',
        'هلا امرني',
       'احبك ياخي'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
   message.channel.stopTyping()
       }
  
});


   client.on('message', message => {
            if (message.content.startsWith("السلام عليكم")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**وعليكم السلام **', ' . ')
.setColor('#00ff47')
  message.channel.sendEmbed(embed);
            }
 });
    client.on('message', message => {
            if (message.content.startsWith("ههه")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**دوم يارب:kissing_heart: **', ' . ')
.setColor('#00ff47')
  message.channel.sendEmbed(embed);
            }
 });


client.on('message', function(msg) {
    const prefix = 'M'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('#00ff47')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });


 client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#00ff47")
  .addField("** :white_check_mark: Servers: **" , client.guilds.size)
  .addField("** :white_check_mark: Users: **" , client.users.size)
  .addField("** :white_check_mark: Channels: **" , client.channels.size)
  .addField("** :rocket: Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
}); 


client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('Mbcu')){
 if(!message.author.id === '419471939493429250') return;
message.channel.sendMessage(' :white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.login(process.env.BOT_TOKEN);


