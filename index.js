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

client.login("mfa.57v_r3-ouiiS5AHcMIrxtug5ylFpN8h4oWuYOw4SGWqPHzM_ya7rA3qJA3ebnY2H-mcnY6NakmdFVKDQ-wsm");
