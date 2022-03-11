const {sendAutomaticMessage} = require('./cronjobs');
const express = require('express');
class Index {
  app;
  constructor(){
    this.app =express();
  }

  services() {
    sendAutomaticMessage;
  }
}


module.exports = new Index().app;