const Discord = require('discord.js');
const client = new Discord.Client();

const cevaplar=['evet','hayır','belli değil','başka zaman sor'];

client.on('ready', ()=>{
    console.log('hazırım');
});

client.on('message' , (msg)=>{
    if(msg.content.toLowerCase()==='naber'){
        msg.channel.send('iyi sen');
    }
let regex = /^!soru\s.+/i;
if(regex.exec(msg.content)){
const a = Math.floor(Math.random()*cevaplar.length);
const cevap = cevaplar[a];
msg.reply(cevap);

};
})

client.login('TOKENİNİZ BURAYA GELECEK');
