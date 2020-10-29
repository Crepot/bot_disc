const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
   console.log(`Wake UP!`);
});

client.on('ready',() =>{
  client.user.setActivity("Queso")
})


client.on('message', (message) => {
  if(message.content.startsWith('que') || message.content.startsWith('Que') || message.content.startsWith('QUE')) {
    message.channel.send(" ``` so ``` ");
  }
});

client.on('message', (message) => {
  if(message.content.startsWith('qhelp')) {
    message.channel.send(`
    
      **Esta es una lista de comandos que puedes usar para Queso**

      Si escribes: que, recibiras un so por respuesta.
    
      `);
  }
});

client.on('message', (message) => {
  if(message.content.startsWith('Dungla#8009  || @1v1')) {
    message.channel.send("```Falta lvl Pa ```");
  }
});



//A partir de acá vamos a hacer todo lo vueno


client.on('message', message => {
  // Ignore messages that aren't from a guild
 // if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('qmute')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    //const rol = message.mentions.roles.first();

    const user = message.mentions.users.first();

    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user


      const member = message.guild.member(user);
      console.log(member);
      // If the member is in the guild
      
      
      if (member) {
        
        //  Kick the member
        //  Make sure you run this on a member, not a user!
        // There are big differences between a user and a member
         
        member
          //.setMute(true,"Uusario mutea2")
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`Successfully kicked`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('I was unable to mute the member');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      
      // Otherwise, if no user was mentioned
    } else {
      message.reply("No fue mencionado ningún usuario");
    }
  }
});



client.login('NzA0NDg2MTUwMjE1MDQxMDM1.XqeOgA.miVzidnVBuv9c4GneuwzkvRd5YE');