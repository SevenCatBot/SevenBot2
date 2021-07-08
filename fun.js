const Discord = require("discord.js")
const prefix = "s+"
const version = "v2.4.3"
const ytdl = require('ytdl-core');
const token = "ODYwODM0MTk1NTE2NTU1MjY0.YOBAUQ.yTo_pjwj4LaAU05XIm-TaSBvdYw"
const client = new Discord.Client({
    presence: {
     status: 'online',
     activity: {
      name: version+'\nUsing '+prefix+'help',
      type: 'PLAYING',
}}});

client.on('ready', () => {
    console.log(`\n登入中的機器人 : ${client.user.tag}\n使用指令方法: `+prefix+`\n使用ctrl+c退出\n檔案: SevenBot.js\n`);
});

client.on('message',message => { //伺服器資訊
    if(message.guild) {
    if(message.content === prefix +`sinfo`) {
        var owner = message.guild.owner
        if(owner === null) {
            var owner = "**偵測不到該群創群者**"
        }
        let embed = new Discord.MessageEmbed()
        .setTitle(message.guild.name+" 的伺服器資料")
        .setColor("#3885ec")
        .setThumbnail(message.guild.iconURL())
        .addField("創群者", `${owner}`)
        .addField("伺服器區域", message.guild.region)
        .addField("成員數", message.guild.memberCount)
        .addField("頻道數", message.guild.channels.cache.size)
        .addField("表情數", message.guild.emojis.cache.size)
        .addField("身分組數", message.guild.roles.cache.size)
        .addField("創群日期", message.guild.createdAt.toUTCString())
        if(message.author.bot) return;
        console.log("有人正在使用*伺服器資訊*")
        message.channel.send(embed)
}}});

client.on('message' , message => { //隨機
    if(message.guild) {
    if(message.content === prefix +"go") {
        let go = Math.random()*2
        go = Math.floor(go+1)
        if(message.author.bot) return;
        console.log("有人正在使用*隨機*")
        message.channel.send(`結果: ${go}`)
}}});

client.on('message' , message => { //ugly
    if(message.guild) {
        if(message.content === prefix +"ugly") {
        let ugly = Math.random()*100
        ugly = Math.floor(ugly)
        if(message.author.bot) return;
            console.log("有人正在使用*ugly*")
            message.channel.send(`你有 ${ugly}% 是很醜的awa`)
}}});

client.on('message' , message => { //猜拳 1
    if(message.guild) {
    if(message.content === prefix +"rps 剪刀") {
        if(message.author.bot) return;
        let rps = Math.random()*3
        rps = Math.floor(rps+1)
        if(rps === 1) {
            rps = ("剪刀")
            abc = ("我們平手awa")
        }else if(rps === 2) {
            rps = ("石頭")
            abc = ("我贏了!!!")
        }else if(rps === 3) {
            rps = ("布")
            abc = ("我輸了Qwq")
        }
        console.log("有人正在使用*猜拳 1*")
        message.channel.send(`我出 ${rps} !\n${abc}`)
}}});

client.on('message' , message => { //猜拳 2
    if(message.guild) {
    if(message.content === prefix +"rps 石頭") {
        let rps = Math.random()*3
        rps = Math.floor(rps+1)
        if(rps === 1) {
            rps = ("剪刀")
            abc = ("我輸了Qwq")
        }else if(rps === 2) {
            rps = ("石頭")
            abc = ("我們平手awa")
        }else if(rps === 3) {
            rps = ("布")
            abc = ("我贏了!!!")
        }
        if(message.author.bot) return;
        console.log("有人正在使用*猜拳 2*")
        message.channel.send(`我出 ${rps} !\n${abc}`)
}}});

client.on('message' , message => { //猜拳 3
    if(message.guild) {
    if(message.content === prefix +"rps 布") {
        let rps = Math.random()*3
        rps = Math.floor(rps+1)
        if(rps === 1) {
            rps = ("剪刀")
            abc = ("我贏了!!!")
        }else if(rps === 2) {
            rps = ("石頭")
            abc = ("我輸了Qwq")
        }else if(rps === 3) {
            rps = ("布")
            abc = ("我們平手awa")
        }
        if(message.author.bot) return;
        console.log("有人正在使用*猜拳 3*")
        message.channel.send(`我出 ${rps} !\n${abc}`)
}}});

client.on('message' , message => { //頭貼
    if(message.content === prefix +`avatar`) {
        let embed = new Discord.MessageEmbed()
        .setTitle("你的頭貼")
        .setColor("#e6af36")
        .setImage(message.author.avatarURL({format: "png",dynamic: true,size: 1024}) )
        console.log("有人正在使用*頭貼*")
        if(message.author.bot) return;
        message.channel.send(embed)
}});

client.on('message' , message => { //say
    if(message.guild) {
    if(message.content.startsWith(prefix +`say`)) {
       let text = message.content.replace(prefix +'say',"")
    if(message.author.bot) return;
    if(text === ("")) return;
    console.log("有人正在使用*say*")
    let awa = new Discord.MessageEmbed()
    .setTitle(text)
    .setColor("#9473bd")
    message.channel.send(awa)
}}});
 
client.on('message',message => { //個人資訊
    if(message.guild) {
    if(message.content === prefix +`uinfo`) {
        let embed = new Discord.MessageEmbed()
        .setTitle(message.member.displayName+" 的資料")
        .setColor("#8e36e6")
        .addField("您的名字", message.member)
        .addField("加入時間", message.member.joinedAt)
        .addField("創帳時間", message.member.displayName.createdAt)
        if(message.author.bot) return;
        console.log("有人正在使用*個人資訊*")
        message.channel.send(embed)
}}});

client.on('message',message => { //設置機器人暱稱
    if(message.guild) {
    if(message.content.startsWith(prefix +`nkbot`)) {
        let nickname = message.content.replace(prefix +'nkbot',"")
        if(nickname == ("")) return;
        let awa = new Discord.MessageEmbed()
        .setTitle("改名成功!")
        .setDescription(`機器人暱稱已設為`+(`${nickname}`))
        .setColor("#c9b27b")
        .setTimestamp()
        if(message.author.bot) return;
        console.log("*機器人更改暱稱*了")
        message.guild.me.setNickname(`${nickname}`)
        message.channel.send(awa)
}}});

client.on('message',message => { //恢復機器人暱稱
    if(message.guild) {
    if(message.content === prefix +`nkbot`) {
        let nickname = message.content.replace(prefix +'nkbot',"")
        let awa = new Discord.MessageEmbed()
        .setTitle("設定成功!")
        .setDescription("機器人暱稱已恢復")
        .setColor("#c9b27b")
        .setTimestamp()
        if(message.author.bot) return;
        console.log("*機器暱稱恢復*了")
        message.guild.me.setNickname(`${nickname}`)
        message.channel.send(awa)
}}});

client.on('message', message => { //查看邀請
    if(message.content === prefix +"invite"){
    var user = null;
    user = message.author || message.mentions.users.first()

    message.guild.fetchInvites().then( invites => {
            const userInvites = invites.array().filter(o => o.inviter.id === user.id);
            var userInviteCount = 0;
                for(var i=0; i < userInvites.length; i++) {
                    var invite = userInvites[i];
                    userInviteCount += invite['uses'];
            }
        let abc = new Discord.MessageEmbed()
        .setTitle("邀請次數")
        .setDescription(`你已邀請了${userInviteCount}位玩家加入此伺服器`)
        .setColor("#fffa00")
        .setTimestamp()
        if(message.author.bot) return;
        console.log('有人正在使用*查看邀請*')
        message.channel.send(abc)
})}});

client.on('message', message => { //給反應
    if(message.content === `?`){
        if(message.author.bot) return;
        message.react('🤔')
        console.log('有人*疑惑*了(?')
}});

client.on('message' , message => { //連結
    if(message.content === prefix +`inv`) {
        let embed = new Discord.MessageEmbed()
        .setTitle("點我獲取連結")
        .setDescription("這是SevenBot的連結")
        .setColor("#64c43e")
        .setTimestamp()
        .setURL("https://discord.com/api/oauth2/authorize?client_id=860834195516555264&permissions=4294967287&scope=bot")
        if(message.author.bot) return;
        console.log("有人正在使用*連結*")
        message.channel.send(embed)
}});

client.on('message',message => { //查看版本
    if(message.guild) {
    if(message.content === prefix +`version`) {
        let awa = new Discord.MessageEmbed()
        .setDescription("**目前版本**")
        .setFooter(version)
        .setColor("#83962f")
        if(message.author.bot) return;
        console.log("有人正在查看目前*版本*")
        message.channel.send(awa)
}}});

client.on('message' , message => { //砍刀
    if(message.guild) {
    if(message.content === prefix +"kill") {
        if(message.author.bot) return;
        console.log("有人正在使用*砍刀*")
        let go = Math.random()*3
        go = Math.floor(go+1)
        if(go === 1){
            message.channel.send(`**Miss**`)
        }else{
            var blood = Math.random()*100000
            blood = Math.floor(blood+1)
            message.channel.send(`這一刀你砍了 **${blood}** 滴血!`)
        }
}}});

class Music { //音樂機器人
    constructor() {
        this.isPlaying = {};
        this.queue = {};
        this.connection = {};
        this.dispatcher = {};
    }
    async join(msg) {
        if (msg.member.voice.channel !== null) {
            this.connection[msg.guild.id] = await msg.member.voice.channel.join();
        } else {
            let owo = new Discord.MessageEmbed()
            .setDescription(`請先進入語音頻道`)
            msg.channel.send(owo);
        }}
    async play(msg) {
        const guildID = msg.guild.id;
        if (!this.connection[guildID]) {
            let owo = new Discord.MessageEmbed()
            .setDescription(`請先將機器人 ${prefix}join 加入頻道`)
            msg.channel.send(owo);
            return;
        }
        if (this.connection[guildID].status === 4) {
            let owo = new Discord.MessageEmbed()
            .setDescription(`請先將機器人 ${prefix}join 重新加入頻道`)
            msg.channel.send(owo);
            return;
        }
        const musicURL = msg.content.replace(`${prefix}play`, '').trim();
        try {
            const res = await ytdl.getInfo(musicURL);
            const info = res.videoDetails;
            if (!this.queue[guildID]) {
                this.queue[guildID] = [];
            }

            this.queue[guildID].push({
                name: info.title,
                url: musicURL
            });
            if (this.isPlaying[guildID]) {
                let owo = new Discord.MessageEmbed()
                .setDescription(`歌曲加入隊列：${info.title}`)
                msg.channel.send(owo);
            } else {
                this.isPlaying[guildID] = true;
                this.playMusic(msg, guildID, this.queue[guildID][0]);
            }
        } catch(e) {
            console.log(e);
}}
    playMusic(msg, guildID, musicInfo) {
        let owo = new Discord.MessageEmbed()
        .setDescription(`播放音樂：${musicInfo.name}`)
        msg.channel.send(owo);
        this.dispatcher[guildID] = this.connection[guildID].play(ytdl(musicInfo.url, { filter: 'audioonly' }));
        this.dispatcher[guildID].setVolume(0.5);
        this.queue[guildID].shift();
        this.dispatcher[guildID].on('finish', () => {
            if (this.queue[guildID].length > 0) {
                this.playMusic(msg, guildID, this.queue[guildID][0]);
            } else {
                this.isPlaying[guildID] = false;
                let nomusic = new Discord.MessageEmbed()
                .setDescription("目前沒有音樂了，請加入音樂 :D")
                msg.channel.send(nomusic);
}})};
    resume(msg) {
        if (this.dispatcher[msg.guild.id]) {
            let go = new Discord.MessageEmbed()
            .setDescription("繼續撥放")
            msg.channel.send(go);
            this.dispatcher[msg.guild.id].resume();
}}
    pause(msg) {
        if (this.dispatcher[msg.guild.id]) {
            let STOP = new Discord.MessageEmbed()
            .setDescription("停止撥放")
            msg.channel.send(STOP);
            this.dispatcher[msg.guild.id].pause();
}}
    skip(msg) {
        if (this.dispatcher[msg.guild.id]) {
            let skip = new Discord.MessageEmbed()
            .setDescription("跳過目前歌曲")
            msg.channel.send(skip);
            this.dispatcher[msg.guild.id].end();
        }}
    nowQueue(msg) {
        if (this.queue[msg.guild.id] && this.queue[msg.guild.id].length > 0) {
            const queueString = this.queue[msg.guild.id].map((item, index) => `[${index+1}] ${item.name}`).join();
            msg.channel.send(queueString);
        } else {
            let nomusic = new Discord.MessageEmbed()
            .setDescription("目前隊列中沒有歌曲")
            msg.channel.send(nomusic);
}}

    leave(msg) {
        if (this.connection[msg.guild.id] && this.connection[msg.guild.id].status === 0) {
            if (this.queue.hasOwnProperty(msg.guild.id)) {
                delete this.queue[msg.guild.id];
                this.isPlaying[msg.guild.id] = false;
            }
            this.connection[msg.guild.id].disconnect();
        } else {
            let nojoin = new Discord.MessageEmbed()
            .setDescription("機器人未加入任何頻道")
            msg.channel.send(nojoin);
}}}
const music = new Music();
client.on('message', async (msg) => {
    if (!msg.guild) return;
    if (msg.content === `${prefix}join`) {
        music.join(msg);
    }
    if (msg.content.indexOf(`${prefix}play`) > -1) {
        if (msg.member.voice.channel) {
            await music.play(msg);
        } else {
            let nojoin = new Discord.MessageEmbed()
            .setDescription("機器人需要先加入頻道")
            msg.channel.send(nojoin);
        }}
    if (msg.content === `${prefix}resume`) {
        music.resume(msg);
    }
    if (msg.content === `${prefix}pause`) {            
        music.pause(msg);
    }
    if (msg.content === `${prefix}skip`) {
        music.skip(msg);
    }
    if (msg.content === `${prefix}queue`) {
        music.nowQueue(msg);
    }
    if (msg.content === `${prefix}leave`) {
        music.leave(msg);
}});

client.login(token)