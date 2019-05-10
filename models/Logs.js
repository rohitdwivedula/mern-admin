const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

const LogsSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  hits: {
    type: Number,
    required: true
  }
});

module.exports = Logs = mongoose.model("logs", LogsSchema);
