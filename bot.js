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
╔[❖══════❖]╗
-   شكرا لأستخدام البوت 
-   By XMGX 
╚[❖══════❖]╝
╔[❖══════❖]╗
:crown: اوامر ادارية:crown: 
Mbc = يرسل رسالة للكل
╚[❖══════❖]╝
╔[❖══════❖]╗
:earth_africa: أوامر عامة:earth_asia: 
Mping = يعطيك بنقك
Mavatar = يعطيك صورتك أو صورة الي تمنشنه
Mmsg = لارسال رسالة للشخص
Mallbots = لمعرفة كل البوتات الي بالسيرفر
Muser = لمعرفة السيرفرات التي تستخدم البوت
Muse2 = لمعرفة عدد السيرفرات التي تستخدم البوت لكن بطريقة اخرى
Mserver = معلومات السيرفر
╚[❖══════❖]╝
:video_game:الألعاب:video_game: 
Mصراحة
لعبة صراحة
Mhack 
لخداع صديقك انك هكرته
Mمريم
لعبة مريم
Mعقاب
لعبة عقاب
╚[❖══════❖]╝
╔[❖══════❖]╗
:innocent: بعض المميزات الجانبية:innocent: 
:no_entry: مانع السب :no_entry: 
البوت تحت التطوير........
╚[❖══════❖]╝
╔[❖══════❖]╗
-invite the bot:
الرابط
https://discordapp.com/api/oauth2/authorize?client_id=463384497870864394&permissions=522304&scope=bot
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

 client.on('guildCreate', guild => {
  client.channels.get("470304850081480724").send(`**:innocent: البوت نور سيرفر جديد :innocent: 
سيرفر: __${guild.name}__
صاحب السيرفر: __${guild.owner}__**`)
}); 
      

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
       if (message.content.startsWith(prefix + 'users')) {
     let msg =  client.guilds.map(guild => `**${guild.name}** عدد الاعضاء: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.guilds.size}سيرفرات `)
  .setDescription(`${msg}`)
  .setColor("#00ff47");
  message.channel.send(embed);
}
});


client.on("message", function(message) {

  const bannedwords = [
    "زق",
    "زب",
    "محنة",
    "انيك",
    "خنيث",
    "خرا",
    ":middle_finger: ",
    "خرى"

  ];

  if(bannedwords.some(word => message.content.includes(word))) {
    message.delete()
    message.reply("ممنوع السب وأذكر الله");
  };
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
 .addField('M Bot' ,
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


 
const Sra7a = [
            'صراحه  |  صوتك حلوة؟',
            'صراحه  | قابلت ناس لهم وجهين؟',
            'صراحه  |  شيء وكنت تحقق اللسان؟',
            'صراحه  | هل يعجبك البوت؟',
            'صراحه  | وش هو جوالك؟',
            'صراحه  | تكذب كثير؟',
            'صراحه  | تعرف تطبخ؟ واذا تعرف وش تطبخ؟',
            'صراحه  | كيف تكشف الي يكذب عليك؟',
            'صراحه  | هل تحس انك وحيد؟',
            'صراحه  |  أشجع شيء في حياتك؟',
            'صراحه  | موقف سجدت لله شكر؟',
            'صراحه  | أكثر شي تخاف منه؟',
            'صراحه  |  المواقف الصعبة تضعف لك ولا ترفع؟',
            'صراحه  | موقف هزك؟',',
            'صراحه  | شي ودك تعدله في نفسك؟',
            'صراحه | الفقر فقر العقول ليس الجيوب " ، تتفق؟',
            'صراحه  |  تصلي صلواتك الخمس كلها؟',
            'صراحه | تجامل أحد على راحتك؟',
            'صراحه  |  اشجع شيء سويتة بحياتك؟',
            'صراحه  |  وش ناوي تسوي اليوم؟',
            'صراحه  |  وش شعورك لما تشوف المطر؟',
            'صراحه  | شي ودك يختفي من حياتك؟',
            'صراحه  | شي ندمان عليه الى الان؟',
            'صراحه  |  اي الدول تتمنى ان تزورها؟',
            'صراحه  |  متى اخر مره بكيت؟',
            'صراحه  |  تقيم حظك ؟ من عشره؟',
            'صراحه  | شي نفسك فيه؟',
            'صراحه  | أسخف كذبة مشت عليك؟',
            'صراحه  |  كلمة تود سماعها كل يوم؟',
            'صراحه  | هل تحب المدرسة؟',
            'صراحه  | أكبر كذبة كذبتها؟',
            'صراحه  |  متى آخر مرة قمت بعمل مُشكلة كبيرة وتسببت في خسائر؟',
            'صراحه  |  ما هو اسوأ خبر سمعته بحياتك؟',
            'صراحه  |  ما هي أمنياتك المُستقبلية؟',
       ]
          client.on('message', message => {
			  	var prefix = "M"
        if (message.content.startsWith(prefix + 'صراحه')) {
            if(!message.channel.guild) return message.reply('** :innocent: هذا الأمر بالسيرفرات لا تجي تزعجني:innocent:  **');
         var client= new Discord.RichEmbed()
         .setTitle("M Games")
         .setColor('#00ff47')
         .setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
         .setImage("https://cdn.discordapp.com/attachments/371269161470525444/384103927060234242/125.png")
                         .setTimestamp()
       
          message.channel.sendEmbed(client);
          message.react("??")
        }
       });





client.login(process.env.BOT_TOKEN);


