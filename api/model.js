import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  ID: String,
  question:String,
  option1:String,
  option2:String,
  option3: String,
  option4:String,
  correctAnswer:String,
  img:String,
  formula:String,
  equation:String,
  symbols:String,
});

const Question = mongoose.model("Question", questionSchema);

export default Question;
