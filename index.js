const {sendAutomaticMessage} = require('./cronjobs');
class Index {
 

  services() {
    sendAutomaticMessage;
  }
}


const index = new Index;
console.log('running...');
index.services();