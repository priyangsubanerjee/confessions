const mongoose = require("mongoose");
const { Schema } = mongoose;

const confessionSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
    default: "0.0.0.0",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

mongoose.models = {};
module.exports =
  mongoose.models.messages || mongoose.model("messages", confessionSchema);
