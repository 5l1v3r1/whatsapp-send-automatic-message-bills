const {sendAutomaticMessage} = require('./sendAutomaticMessage');
const express = require('express');
class App {
  app;
  constructor(){
    this.app =express();
  }

  services() {
    sendAutomaticMessage;
  }
}


module.exports = new App().app;