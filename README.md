# whatsapp-send-automatic-message-bills
An app to send whatsapp message to a group when a bill is due dating

# Run the project

```bash

# clone the project 
$ git clone git@github.com:omateusamaral/whatsapp-send-automatic-message-bills.git

```

```bash

# install the packages
$ npm install
```


```bash

# now run the server
$ npm run start

expect message: Runnig at 3000 (or the port that you set)
```

change the cronjob to every minute at first time, because you should scan the QRcode with whatsapp to function to send message works and create a json with the session.

after this, in the file whatsapp-send-message.js there is a function called findMainGroup  you can set a console.log in "chats" to list all chats you have.

chosen the chat copy the id.user and paste at "< chat user id >" in the code.
  
 follow all this will work.
  
# References 
lib - https://github.com/pedroslopez/whatsapp-web.js/ <br/>
documentation - https://wwebjs.dev/guide/mentioning-contacts.html#sending-messages-with-mentions
  
# Be in touch 
Linkedin - https://www.linkedin.com/in/mateus-passos-amaral/
  

