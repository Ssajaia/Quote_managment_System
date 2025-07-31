const mongoose = require('mongoose');
const AutoIncrement=require("mongoose-sequence")(mongoose)

const quoteSchema = new mongoose.Schema({
  quote:String,
  author:String
},{collection:"Quotes"});
quoteSchema.plugin(AutoIncrement, { inc_field: 'numericId' });

module.exports = mongoose.model('Quotes', quoteSchema);
