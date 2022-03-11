var today = new Date();
var date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
const WATER_BILL = [
  {
    messageFiveDaysBeforeDueDate: `
    Conta de água para pagar 🌊

    Daqui 5 dias ⏱️
    
    data de vencimento - dia 25 🗓️

    Hoje é: ${date}
    `,

    messageDueDate: `
    Conta de água para pagar 🌊

    Daqui 0 dias ⏱️

    data de vencimento - dia 25 🗓️

    Hoje é: ${date}
    `,
  },

  
];

const INTERNET_BILL = [
  {
    messageFiveDaysBeforeDueDate: `
    Conta de internet para pagar 💻

    Daqui 5 dias ⏱️
    
    data de vencimento - dia 25 🗓️

    Hoje é: ${date}
    `,
    
    messageDueDate: `
    Conta de internet para pagar 💻

    Daqui 0 dias ⏱️

    data de vencimento - dia 25 🗓️

    Hoje é: ${date}
    `,
  },

   
];

const ELECTRICITY_BILL = [
  {
    messageFiveDaysBeforeDueDate: `
    Conta de LUZ para pagar 💡

    Daqui 5 dias ⏱️
    
    data de vencimento - dia 20 🗓️

    Hoje é: ${date}
    `,

    messageDueDate: `
    Conta de LUZ para pagar 💡

    Daqui 0 dias ⏱️

    data de vencimento - dia 20 🗓️

    Hoje é: ${date}
    `,
  },

  
];

module.exports = {
  ELECTRICITY_BILL,
  INTERNET_BILL,
  WATER_BILL,
};
