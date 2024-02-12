import express from "express";
import multer from "multer";
import fs from "fs";
import WordExtractor from "word-extractor";
const app = express();
import { connectDatabase } from "./connectDB.js";
import Question from "./model.js";
const upload = multer({ dest: "uploads/" });
import cors from "cors";

app.use(cors({ origin: "*" }));

connectDatabase();
const extractDocument = async (filePath) => {
  const extractor = new WordExtractor();

  try {
    const buffer = fs.readFileSync(filePath);
    const extracted = await extractor.extract(buffer);
    const text = extracted.getBody();

    return { text };
  } catch (error) {
    console.error("Error extracting document:", error);
    throw error;
  }
};

app.post("/api/upload", upload.single("file"), async (req, res) => {
  const { path: filePath } = req.file;

  try {
    const { text } = await extractDocument(filePath);
    console.log(text);
    const extractedText = text.split(/\n(?=Q\d+\.\s)/g);
    const filteredText = extractedText.map((item) =>
      item.split("\n").filter((i) => i !== "")
    );
    for (const questionData of filteredText) {
      const newQuestion = new Question({
        question: questionData[0],
        option1: questionData[1],
        option2: questionData[2],
        option3: questionData[3],
        option4: questionData[4],
        correctAnswer: questionData[5],
      });
      await newQuestion.save();
    }

    res.status(200).json({
      filteredText,
      message: "data saved successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "Error extracting document" });
  }
});

app.get("/api/clear", async (req, res) => {
  try {
    await Question.deleteMany({});
    res.status(200).json({ message: "cleared questions successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/api/questions", async (req, res) => {
  try {
    const question = await Question.find();
    res.status(200).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
// Other app configurations and server listening
