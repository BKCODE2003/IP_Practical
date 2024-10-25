const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const quizquestions = [
    {
      id:1,
      question: "6 x 5 = ?",
      options: [10,30,25,50],
      correctAnswer: 30,
    },
    {
      id:2,
      question: "(7^2) + 1 = ?",
      options: [50,15,49,20],
      correctAnswer: 50,
    },
    {
        id: 3,
        question: "Select the symbol for Logical And .",
        options: ["|","&","||","&&"],
        correctAnswer: "&&",
      },
      {
        id: 4,
        question: "What is full form of HTML ?",
        options: ["Higher Text Markup Language","High Text Markup Language","Hyper Text Markup Language","Hyper Text Main Loader"],
        correctAnswer: "Hyper Text Markup Language"
      },
      {
        id: 5,
        question: "10 X 9 = ?",
        options: [19,90,1,109],
        correctAnswer: 90,
      },
  ];

  app.get('/api/questions',(req,res)=>{
    res.json(quizquestions);
  });
  app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
  });

