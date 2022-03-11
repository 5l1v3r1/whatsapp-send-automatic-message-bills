const CronJob = require("cron").CronJob;
const { WhatsAppSendMessage } = require("./whatsapp-send-message");
const { WATER_BILL, ELECTRICITY_BILL, INTERNET_BILL } = require("./messages");

class SendAutomaticMessage {
  constructor() {
    this.sendMessageWaterBillFiveDaysBeforeDueDate();
    this.sendMessageWaterBillDueDate();
    this.sendMessageElectricityBillFiveDaysBeforeDueDate();
    this.sendMessageElectricityBillDueDate();
    this.sendMessageInternetBillFiveDaysBeforeDueDate();
    this.sendMessageInternetBillDueDate();
  }

  sendMessageWaterBillFiveDaysBeforeDueDate() {
    const whatsAppSendMessage = new WhatsAppSendMessage(
      WATER_BILL[0].messageFiveDaysBeforeDueDate
    );
    this.job = new CronJob(
      "0 8,12 25 * *",
      async ()=>{
        await whatsAppSendMessage.execute()
       },
      null,
      true,
      "Brazil/East"
    );
  }

  sendMessageWaterBillDueDate() {
    const whatsAppSendMessage = new WhatsAppSendMessage(
      WATER_BILL[0].messageDueDate
    );
    this.job = new CronJob(
      "0 8,12 25 * *",
      async ()=>{
        await whatsAppSendMessage.execute()
       },
      null,
      true,
      "Brazil/East"
    );
  }

  sendMessageElectricityBillFiveDaysBeforeDueDate() {
    const whatsAppSendMessage = new WhatsAppSendMessage(
      ELECTRICITY_BILL[0].messageFiveDaysBeforeDueDate
    );
    this.job = new CronJob(
      "0 8,12 20 * *",
      async ()=>{
        await whatsAppSendMessage.execute()
       },
      null,
      true,
      "Brazil/East"
    );
  }

  sendMessageElectricityBillDueDate() {
    const whatsAppSendMessage = new WhatsAppSendMessage(
      ELECTRICITY_BILL[0].messageDueDate
    );
    this.job = new CronJob(
      "0 8,12 20 * *",
      async ()=>{
        await whatsAppSendMessage.execute()
       },
      null,
      true,
      "Brazil/East"
    );
  }

  sendMessageInternetBillFiveDaysBeforeDueDate() {
    const whatsAppSendMessage = new WhatsAppSendMessage(
      INTERNET_BILL[0].messageFiveDaysBeforeDueDate
    );
    this.job = new CronJob(
      "0 8,12 25 * *",
      async ()=>{
        await whatsAppSendMessage.execute()
       },
      null,
      true,
      "Brazil/East"
    );
  }

  sendMessageInternetBillDueDate() {
    const whatsAppSendMessage = new WhatsAppSendMessage(
      INTERNET_BILL[0].messageDueDate
    );
    this.job = new CronJob(
      "0 8,12 25 * *",
     async ()=>{
      await whatsAppSendMessage.execute()
     },
      null,
      true,
      "Brazil/East"
    );
  }
}

module.exports = {
 sendAutomaticMessage: new  SendAutomaticMessage,
};
