import express from "express";
import cookieParser from "cookie-parser";
import multer from "multer";
import mammoth from "mammoth";
import { connectDatabase } from "./connectDB.js";
import Question from "./model.js";
import cors from "cors";
const app = express();
const upload = multer({ dest: "uploads/" });

app.use(express.json());
app.use(cookieParser());
connectDatabase();
app.use(cors({ origin: "*" }));

app.listen(3000, () => {
  console.log("Server is running on port 3000!");
});

app.get("/", async (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});


app.post("/api/upload", upload.single("file"), async (req, res) => {
  if (!req.file) {
    return res.status(400).send({ message: "No file uploaded" });
  }

  if (!req.file.originalname.endsWith(".docx")) {
    return res.status(400).send("Please upload a .docx file");
  }

  const filePath = req.file.path;

  try {
    const result = await mammoth.extractRawText({ path: filePath });
    const extractedText = result.value.split(/\n(?=Q\d+\.\s)/g);
    const equations = result;
    console.log(equations);
    const questions = extractedText.map((question) => {
      const [questionPart, optionsPart] = question.split("\nAnswer: ");
      const options = optionsPart.split(/\n(?=[A-Z]\))/).filter(Boolean);
      const correctAnswer = options.pop();
      const result = questionPart.split("\n");
      const filteredQuestion = result.filter((item) => item !== "");

      return {
        question: filteredQuestion[0],
        option1: filteredQuestion[1],
        option2: filteredQuestion[2],
        option3: filteredQuestion[3],
        option4: filteredQuestion[4],
        correctAnswer,
      };
    });

    for (const questionData of questions) {
      const newQuestion = new Question(questionData);
      await newQuestion.save();
    }

    res.status(200).json({
      message: "data saved successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error extracting data");
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

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
