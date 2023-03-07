const mongoose = require('mongoose');
const {Schema} = mongoose;

const answersSchema = new Schema({
  actionsCreditAmount : String,
  actualWorkTime : String,
  amountOnTheAccount : String,
  cellphone : String,
  creditPurpose : String,
  creditRequestAmount : String,
  dwellingTime : String,
  dwellingType : String,
  existentCreditHere : String,
  familyStatus : String,
  foreignerWorker : String,
  maintenanceRightNumber : String,
  monthTime : String,
  othersCreditAccount : String,
  othersDebtors : String,
  pastCredit : String,
  property : String,
  rateTax : String,
  workType : String,
  years : String,
  answersDate : Date,
});

mongoose.model('answers', answersSchema);