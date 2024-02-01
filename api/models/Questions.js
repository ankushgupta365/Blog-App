const mongoose = require("mongoose");

const QuestionsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
        type: String,
        required: true
    }, 
    query: {
        type: String,
        required: true
    }, 
    answer: {
        type: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Questions", QuestionsSchema);
