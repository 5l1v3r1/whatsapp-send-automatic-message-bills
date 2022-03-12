const qrcode = require("qrcode-terminal");
const { Client, LegacySessionAuth } = require("whatsapp-web.js");
const fs = require("fs");

class WhatsAppSendMessage {
  sessionData;
  PATH_SESSION_FILE;
  client;
  message;

  constructor(message) {
    this.PATH_SESSION_FILE = `${__dirname}/session.json`;
    this.message = message;
    this.fileExists();
    this.client = new Client({
      authStrategy: new LegacySessionAuth({
        session: this.sessionData,
      }),
    });

    this.generateQRCode();
    this.authenticateWhatsAppUser();
  }

  async execute() {
    await this.findMainGroup();
    await this.client.initialize();
  }

  fileExists() {
    if (fs.existsSync(this.PATH_SESSION_FILE)) {
      this.sessionData = require(this.PATH_SESSION_FILE);
    }
  }

  generateQRCode() {
    if(!fs.existsSync(this.PATH_SESSION_FILE)){
      this.client.on("qr", (qr) => {
        qrcode.generate(qr, { small: true });
      });
    }
   
  }

  authenticateWhatsAppUser() {
    this.client.on("authenticated", (session) => {
      this.sessionData = session;
      fs.writeFile(this.PATH_SESSION_FILE, JSON.stringify(session), (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  }

   findMainGroup() {
    this.client.on("ready", async () => {
     await this.client.getChats().then(async(chats) => {
        const group = chats.find(
          (chat) => chat.id.user === "<chat user id>"
        );

          await this.sendMessage(group.id._serialized,this.message);
      }).catch((err)=>{
        console.log('error: ',err);
      })
      console.info("Messaged sended");
    });
  }

  async sendMessage(groupId, message){
    await this.client.sendMessage(groupId,message);
  }
}

module.exports = {
  WhatsAppSendMessage,
};
