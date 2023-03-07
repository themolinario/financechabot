const mongoose = require('mongoose');
const Answers = mongoose.model('answers');

module.exports = {
  saveAnswers : async function (data){
    const answers = new Answers({
      actionsCreditAmount: data.actionsCreditAmount,
      actualWorkTime: data.actualWorkTime,
      amountOnTheAccount: data.amountOnTheAccount,
      cellphone: data.cellphone,
      creditPurpose: data.creditPurpose,
      creditRequestAmount: data.creditRequestAmount,
      dwellingTime: data.dwellingTime,
      dwellingType: data.dwellingType,
      existentCreditHere: data.existentCreditHere,
      familyStatus: data.familyStatus,
      foreignerWorker: data.foreignerWorker,
      maintenanceRightNumber: data.maintenanceRightNumber,
      monthTime: data.monthTime,
      othersCreditAccount: data.othersCreditAccount,
      othersDebtors: data.othersDebtors,
      pastCredit: data.pastCredit,
      property: data.property,
      rateTax: data.rateTax,
      workType: data.workType,
      years: data.years,
      answersDate: Date.now()
    });
    try {
      let reg = await answers.valueOf().save();
      console.log(reg);
    } catch (err) {
      console.log(err);
    }
  }
}