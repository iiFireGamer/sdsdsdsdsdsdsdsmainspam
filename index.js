const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {

console.log('iiFireGame');

client.on('message', message => {
  if (message.content === '=start') {
        let count = 0;
        let ecount = 0;
        for(let x = 0; x < 90000; x++) {
          message.channel.send(`=start`)
            .then(m => {
              count++;
            })
            
          }
        }
  });

});

client.login("mfa.OxXA3ksr-FTu_x1-oAG8KB102mfa7P37_Uvufx0AkuPVZBLd9an6U8RlRGOPQ6p_bWtrRxzXG85I56YtVC8R");