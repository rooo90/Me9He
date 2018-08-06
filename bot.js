const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'M'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start Time] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('info:')
  console.log(`servers! [" ${client.guilds.size} "]`);
  console.log(`Users! [" ${client.users.size} "]`);
  console.log(`channels! [" ${client.channels.size} "]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('╔[════════════]╗')
  console.log('ARE YOU READY?')
  console.log('LETS GO BOT ONLINE!')
  console.log('╚[════════════]╝')
  console.log('')
});


// playing
client.on('ready', () => {                           
client.user.setGame(``,'https://www.twitch.tv/tarikrs');                                                                                                                                                                                                                                                                                                                                                                                                                             client.user.setGame(`Mhelp | Minvite`,'https://www.twitch.tv/v5bz');
}); 



client.on("message", message => {
 if (message.content === prefix + "help") {
 message.channel.send(":ballot_box_with_check: Done! ")
  const embed = new Discord.RichEmbed()
      .setColor("#00ff47")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
** Bot ${client.user.username} Commands **
╔[❖══════❖]╗
-   شكرا لأستخدام البوت 
-   By XMGX 
╚[❖══════❖]╝
╔[❖══════❖]╗
:crown: اوامر ادارية:crown: 
Mkick = لطرد عضو مع السبب
Mbc = يرسل رسالة للكل
╚[❖══════❖]╝
╔[❖══════❖]╗
:earth_africa: أوامر عامة:earth_asia: 
Minvite = لاعطائك رابط اضافة البوت
Mbot = معلومات البوت
Mping = يعطيك بنقك
Mimage = صورة السيرفر
Mavatar = يعطيك صورتك أو صورة الي تمنشنه
Mmsg = لارسال رسالة للشخص
Mreport = للتبليغ عن شخص
Mallbots = لمعرفة كل البوتات الي بالسيرفر
Musers1 = لمعرفة السيرفرات التي تستخدم البوت
Musers2 = لمعرفة عدد السيرفرات التي تستخدم البوت لكن بطريقة اخرى
Mserver = معلومات السيرفر
╚[❖══════❖]╝
:video_game:الألعاب:video_game: 
**Mhack 
لخداع صديقك انك هكرته
Mمريم
لعبة مريم
Mصراحة
لعبة صراحة
Mلوخيروك
لعبة لو خيروك
Mعقاب
لعبة عقاب**
╚[❖══════❖]╝
╔[❖══════❖]╗ 
:sunglasses:الترحيب:sunglasses:
سوي روم اسمه
welcome 
اوor
『الترحيب』
وبس
╚[❖══════❖]╝
╔[❖══════❖]╗
-invite the bot:
الرابط
https://discordapp.com/oauth2/authorize?client_id=463384497870864394&permissions=522306&scope=bot

-Support server:
https://discord.gg/Y2KaX9g.
╚[❖══════❖]╝
`)


message.author.sendEmbed(embed)
  console.log('[Help] Send By: ' + message.author.username)
}
});

const child_process = require("child_process");
const adminprefix = "M";
const devs = ['419471939493429250'];

client.on('message', message => {
if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
        console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
        client.destroy();
        child_process.fork(__dirname + "bot.js");
        console.log(`تم اعادة تشغيل البوت`);
    }
  
  }); 

client.on('message', function(message) {
    const prefix = 'M'
    const myID = "419471939493429250";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
                if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });

    } else if(message.content.startsWith(prefix + "setavatar")) {
                        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});






client.on('guildCreate', guild => {
  client.channels.get("470304850081480724")
const embed = new Discord.RichEmbed()
   .setAuthor(`البوت نور سيرفر جديد`)
   .setDescription(`
اسم السيرفر: **${guild.name}**
صاحب السيرفر: **${guild.owner}**`)
         .setColor("#00ff47")
         .setFooter('M Games' , client.user.avatarURL)
           client.channels.get("470304850081480724").send({embed});
}

);

         
client.on('guildDelete', guild => {
  client.channels.get("Channel ID")
const embed = new Discord.RichEmbed()
   .setAuthor(`ناس ما يفهمون الفن`)
   .setDescription(`
اسم السيرفر: **${guild.name}**
صاحب السيرفر: **${guild.owner}**`)
         .setColor("#ff0004")
         .setFooter('M Games' , client.user.avatarURL)
           client.channels.get("470304850081480724").send({embed});
}

);   


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '『الترحيب』');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('#00ff47')
        .setThumbnail(memberavatar)
        .addField(':crown: | اسمك:  ',`${member}`)
        .addField(':pencil:|اطلق من دخل' , `منور السيرفر, ${member}`)
        .addField('🆔 |ايديك:', "**[" + `${member.id}` + "]**" )
                .addField(':arrow_down:|عضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("Welcome")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });

client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('#00ff47')
        .setThumbnail(memberavatar)
        .addField(':crown: | اسمك:  ',`${member}`)
        .addField(':pencil:|اطلق من دخل' , `منور السيرفر, ${member}`)
        .addField('🆔 |ايديك:', "**[" + `${member.id}` + "]**" )
                .addField(':arrow_down:|عضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter("Welcome")
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:hearts:منور السيرفر:hearts:
:crown:اسمك:crown: : ${member}  
:أنت العضو رقم:1234:1234: : ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on("message", message => {
      if (message.content === "Mping") {
      const embed = new Discord.RichEmbed()
  .setColor("#00ff47")
  .addField('**Pingo:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
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



client.on("message", message => {
    const prefix = "M"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is ${message.guild.name} Photo!`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(`#00ff47`)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });


client.on('message', message => {
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**Mbc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' The server', `${message.guild.name}`, true)
          .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)
          .addField(' the messege ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('#00ff47')
          m.send(`${m}`,{embed: bc});
      });
      const Himo = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| the messege is loading ')
      .addBlankField(true)
      .addField('♨| i got sended to  ', message.guild.memberCount , true)
      .addField('📝| the message ', args)
      .setColor('#00ff47')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});



client.on('message', message => {
    if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('RSALH')){
if(!message.author.id === '419471939493429250') return;
message.channel.sendMessage('LOADING |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message' , async (message) => {
       if(message.content.startsWith(`<@${client.user.id}>`)) {
              message.channel.startTyping()
 let responses = [
        'تحتاج مساعدة جرب Mhelp',
        'هلا امرني',
        'تحبني؟',
         'طفشان عندك نكتة؟',
         'تمنشن بوت؟',
         'اعجبك البوت',
         'لا تنسى تزور سيرفر السبورت',
       'احبك ياخي'
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
   message.channel.stopTyping()
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
     if (message.content === (prefix + "users2")) {
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
    if (message.content.startsWith("Mhack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });



client.on('message', message => {
     if(!message.channel.guild) return;
var prefix = "M";
                if(message.content.startsWith(prefix + 'allbots')) {

    
    if (message.author.bot) return;
    let i = 1;
        const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
          const embed = new Discord.RichEmbed()
          .setAuthor(message.author.tag, message.author.avatarURL)
          .setDescription(`**Found ${message.guild.members.filter(m=>m.user.bot).size} bots in this Server**
${botssize.join('\n')}`)
.setFooter(client.user.username, client.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});



client.on('message', message => {
       if (message.content.startsWith(prefix + 'users1')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#00ff47");
  message.channel.send(embed);
}
});





const perfix = 'M';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'msg')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let norElden = msg.mentions.members.first()
      if (!norElden) return msg.reply(`**يجب تحديد الشخص**`)
      let norEldenEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديده لك من شخص ما**`)
      .setDescription(args.join(" "))

      client.users.get(`${norElden.id}`).send(norEldenEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});


const Za7f = [
    "**صورة وجهك او رجلك او خشمك او يدك**.",
    "**اصدر اي صوت يطلبه منك أخوياك**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
    "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
    "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
    "**ذي المرة لك لا تعيدها**.",
    "**قل لأخوياك الي عندك احبك واحد واحد**.",
    "**صور اي شيء يطلبه منك الاعبين**.",
    "**سو اي شي يطلبه منك الي عندك**.",
    "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
    "**سو مشهد تمثيلي عن مصرية بتولد**.",
    "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
    "**ذي المرة لك لا تعيدها**.",
    "**رحمناك لا تعودها**.",
    "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
    "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
    "**تكلم مصري لدقيقة**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
    "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
    "**اتصل على امك و قول لها انك تحبها :heart:**.",
    "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
    "**سوو قرعة والي يفوز عطه 1000 كريدت**.",
    "**منشن الجميع وقل انا اكرهكم**.",
    "**اعطي احد من الموجودين رتبة عالية**.",
    "**روح لأي واحد خاص قل له احبك**.",
    "**اعطي نفسك كف وخلينا نسمع الصوت**.",
    "**حط صورتك واسمك بنت**.",
    "**تكلم قصيمي اولاه لين يقولون لك اخوياك خلاص**.",
    "**لا تتكلم ولا تكتب لين يسمحون لك اخوياك واذا نسوك مدري وش نسوي :joy: **.",
    "**قول قصيدة **.",
    "**تكلم سوداني لخمس دقايق**.",
    "**اعطي اي واحد هدية**.",
    "**اول شخص يجي ببالك قل له احبك**.",
    "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
    "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
    "**خل اخوك الصغير يعطيك اي عقاب**.",
    "**اعطي اي واحد 2000 كريدت**.",
    "**خذ عقابين :joy: **.",
    "**اسم امك افتخر به**.",
    "**خل الي معك يختارون عقاب لك**.",
    "**رحمناك لا تعيدها**.",
    "**عط اقرب واحد لك بوسة**.",
    "**تحط صورتك صورة بنت واسمك ليوم كامل**.",
    "** خل اي واحد يختار لك عقاب**.",
    "**اكتب قصيدة وقولها**.",
      "**المسامح كريم:innocent:**.",
      "**خلاص سامحتك**.",
      "** تكلم سعودي :flag_sa:**.",
      "** اخوياك يختارون شخص تروح تقول له احبك**.",
  
]


 client.on('message', message => {
   if (message.content.startsWith("Mعقاب")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('#00ff47')
   .setThumbnail(message.author.avatarURL) 
 .addField('M Games' ,
  `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
  message.channel.sendEmbed(embed);
    }
});





const zead = [
     '*** انا اسمي مريم ***',
     '*** مرحباَ ماهو اسمك ؟ ***',
     `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
     '*** هل تود مساعدتي ؟ ***',
     '*** لماذا هل انت قاسي القلب ؟ ***',
     '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** هل تود مساعدتي ؟ ***',
     '*** واو اشكرك انك شخصاَ رائع ! ***',
     '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
     '*** ولكن عندما حل الليل لم اعد ارى اي شيء ***',
     '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
     '*** هيا اذاَ ***',
     '*** اود ان اسئلك سؤال ونحن في الطريق ***',
     '*** هل تراني فتاة لطيفة ام مخيفة ***',
     '*** اشكرك !  ***',
     '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
     '*** هل انت جاهز ؟ ***',
     '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
     '*** هل تود ان تراهم الان ***',
  '*** انا لست الحوت الازرق كما يدعون ***',
     '*** انا لست كاذبة صدقني***',
     '*** لماذا ارى في عينيك الخوف ؟ ***',
     '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
     '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
     '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
     '*** لماذا لم تدخل الغرفة ؟ ***',
     '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
     '*** لن تخرج حتى اعود لك بعد قليل ***',
     '*** المفتاح معك ! اكتب .مريم  ***',
     '*** مفتاح احمر , هل حصلت عليه ؟ ***',
     '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
     '*** مفتاح اسود . هل حصلت عليه ؟ ***',
     '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
     '*** لقد عادت من جديد الى المنزل ***',
     '*** لا تصدر اي صوت ! ***',
     '*** مريم : لقد عدت ***',
     '*** مريم : يا ايها المخادع اين انت ***',
     '*** مريم : اعلم انك هنا في المنزل ***',
     '*** مريم : ماذا تريد ان تسمع ***',
     '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/channel/UCpjf9L0G7TalNYkbq13SqAQ ***',
     '*** احد ما خرج من المنزل ***',
     '*** انتظر الجزء الثاني ساعدنا وانشر البوت  ***'
  ]
   client.on('message', message => {
	   	var prefix = "M"
   if (message.content.startsWith(prefix + 'مريم')) {
    var mariam= new Discord.RichEmbed()
    .setTitle("M Games")
    .setColor('#00ff47')
    .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
    .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
     message.channel.sendEmbed(mariam);
     message.react("??")
    }
  });


client.on('message', message => {
    if (message.content.startsWith("Mbot")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('#00ff47')
            .setTitle(':innocent:**__INFO OF ME__**:innocent:')
            .addField(':rocket:**MY PING**:rocket:' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField(':inbox_tray:**RAM**:inbox_tray:', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField(':sunglasses:**SERVERS**:sunglasses:', [client.guilds.size], true)
            .addField(':rose:**CHANNELS**:rose:' , `[ ${client.channels.size} ]` , true)
            .addField(':hearts:**USERS**:hearts:' ,`[ ${client.users.size} ]` , true)
            .addField(':crown:**MY NAME**:crown:' , `[ ${client.user.tag} ]` , true)
            .addField(':id:**MY ID**:id:' , `[ ${client.user.id} ]` , true)
                  .addField('**MY PREFIX**' , `[M]` , true)
                  .addField('**My Language**' , `[JS]` , true)
                  .setFooter('|-👑>XMGX <👑-|#7091')
    })
}
});


client.on('message' , message => {
  if (message.author.bot) return;
    if(message.content.startsWith (prefix  + 'invite')) {
const embed = new Discord.RichEmbed()
.setColor("#00ff47")
.setAuthor(message.author.username, message.author.avatarURL)
.setTitle('اضغط هنا')
.setURL('https://discordapp.com/api/oauth2/authorize?client_id=463384497870864394&permissions=522304&scope=bot')
message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
    var name1 = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
    if(message.content.startsWith(prefix + 'report')) {
        if(message.author.bot) return;
        if(!message.guild.channels.find('name', 'الابلاغات')) return message.channel.send('**نرجوا عمل روم باسم الابلاغات كي توصل الابلاغات له**').then(msg => msg.delete(5000));
    if(!name1) return message.reply('**:innocent:منشن:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    if(!reason) return message.reply('**:innocent:وش سوى؟:innocent:**').then(msg => msg.delete(3000))
        message.delete();
    var abod = new Discord.RichEmbed()
    .setTitle(`بلاغ من قبل: ${message.author.tag}`)
    .addField('**المبلغ:**', `${name1}`, true)
    .addField('**بروم:**', `${message.channel.name}`, true)
    .addField('**البلاغ:**', `${reason}`, true)
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.author.avatarURL)
    .setTimestamp()
        message.guild.channels.find('name', 'الابلاغات').sendEmbed(abod)
    message.reply('**:sunglasses:بنأخذ حقك:sunglasses:**').then(msg => msg.delete(3000));
    }
});


client.on('message', message => {
    var prefix = "M"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**ليس لديك البرمشن المطلوب**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**ليس لدي البرمشن المطلوب**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**:innocent:منشن:innocent:**");
  if(!reason) return message.reply ("**:innocent:سبب الطرد:innocent:**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**الشخص أعلى من رتبتي يرجى رفع رتبتي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`انطرد`, user.displayAvatarURL)
  .setColor("#ff0005")
  .setTimestamp()
  .addField("**المطرود:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**الي طرده:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});


const Sra7a = [
    'صراحة|  صوتك حلوة؟',
    'صراحة|  التقيت الناس مع وجوهين؟',
    'صراحة| أعبجك البوت؟',
    'صراحة  | متى تحس نفسك ضعيف؟',
    'صراحة| هل تظهر حبك لشخص؟',
    'صراحة| اخر مرة كذبت فيها؟',
    'صراحة| تسب كثير؟',
    'صراحة| كيف تكشف الي يكذب عليك؟',
    'صراحة| أسخف كذبة مشت عليك؟',
    'صراحة| موقف تمنيت الأرض تبلعك؟',
    'صراحة| قد حبيت بنت؟',
    'صراحة| كيف تتصر مع الي يسيؤون لك؟',
    'صراحة| أعز صديق لك بالدسكورد؟',
    'صراحة| أعز صديق لك بالحياة الحقيقة؟',
    'صراحة| شخص تبي تنتقم منه؟',
    'صراحة| إذا أحد قالك كلام سيء بالغالب وش تكون ردة فعلك؟',
    'صراحة| شخص معك بالراحة والمشاكل؟',
    'صراحة| تأخذ النصيحة ولا تسحب؟',
    'صراحة| وش تبي الناس تعرفك عليه؟',
    'صراحة| تحب الدراسة؟',
    'صراحة| أكثر يوتيوبر تحبه؟',
    'صراحة| مع من تبي تنام اليوم؟ ',
    'صراحة| أحلى صدفة؟',
    'صراحة| صفة تحبها في نفسك؟',
    'صراحة| صفة ودك تغيرها بنفسك؟',
    'صراحة|  تصلي صلواتك الخمس كلها؟',
    'صراحة| تجامل على راحتك؟',
    'صراحة| عمرك؟',
    'صراحة|  أكثر شيء ندمان عليه؟',
    'صراحة| أمنيتك المستقبلية',
]
  client.on('message', message => {
if (message.content.startsWith('Mصراحة')) {
    if(!message.channel.guild) return message.reply('**الأمر ذا بالسيرفرات لا تلعب عندي**');
 var client= new Discord.RichEmbed()
 .setTitle("صراحة")
 .setColor('#00ff47')
 .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
 .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                 .setTimestamp()
 
  message.channel.sendEmbed(client);
  message.react("??")
}
});


const secre = [
  "**تعيش لحالك لكن عندك كل شي او العكس**.",
  "**ترجع صف أول أو تعيش فاقد الذاكرة**.",
  "**تعيش على النباتات أو تعيش على اللحوم**.",
  "**تشوف الأشباح أو تسمعها**.",
  "**تقرأ أفكار الناس أو تقدر تسافر عبر الزمن**.",
  "**تقدر تختفي أو تقدر تطير**.",
  "**تعيش 5 دقايق في الماضي أو المستقبل**.",
  "**يكون معك فلوس أو تعيش سعيد**.",
  "**تشتري جوال اخر موديل بس مو لك أو تشتري جوال قديم**.",
  "**تكون حسود أو متسامح**.",
  "**تنقذ نفسك ويموت الباقين أو تموت ويعيش الباقين**.",
  "**تعيش في الماضي أو الحاضر**.",
  "**سرعة الفهد أو دهاء الثعلب**.",
  "**تنجح بكل اختباراتك أو تسافر كل سنه مجانا**.",
  "**تعيش على الجبال أو تعيش عند البحر**.",
  "**تتحق 3 اماني لك أو تعيش مع أشخاص تحبهم طول حياتك**.",
  "**تنام في غابة مظلمة أو على ظهر سفينه والجو عاصفة**.",
  "**المال أو العقل**.",
  "**الصحة أو الحكمة**.",
  "**المال أو السعادة**.",
  "**تاكل احر فلفل في العالم أو ترقص بالشارع وانت متفصخ**.",
  "**الذكاء أو الصحة**.",
  "**ترسل رسالة صوتية لأمك كلها صراخ أو تكسر بيضه على راسك**.",
]
 
 
 client.on('message', message => {
   if (message.content.startsWith("Mلوخيروك")) {
                if(!message.channel.guild) return message.reply('__**الأمر ذا بالسيرفرات لا تجي تلعب عندي**__');
  var embed = new Discord.RichEmbed()
  .setColor('#ff00db')
 
   .setThumbnail(message.author.avatarURL)
 .addField('لو خيروك:' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
    }
});




client.login(process.env.BOT_TOKEN);


