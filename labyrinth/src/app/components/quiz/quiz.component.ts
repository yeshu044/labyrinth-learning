import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }
  quiz = {
    "type": "list",
    "questions": [],
    "title": "",
    "subject": "",
    "list": {
      "CET": {
        "type": "list",
        "questions": [],
        "title": "",
        "subject": "",
        "list": {
          "2021": {
            "type": "quiz",
            "list": [],
            "subject": "MATHS",
            "title": "CET-MATHS-2021",
            "questions": [
              {
                "serialNumber": "1",
                "question": "what is the product of 1 and 2",
                "correctAnswer": "2",
                "options": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "explanation": "if  you multiply 1 and 2 the product  is 2"
              },
              {
                "serialNumber": "2",
                "correctAnswer": "1",
                "question": "what is the product of 1 and 2",
                "options": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "explanation": "if  you multiply 1 and 2 the product  is 2"
              }
            ]
          }
        }
      },
      "PG CET": {
        "type": "list",
        "questions": [],
        "title": "",
        "subject": "",
        "list": {
          "2021": {
            "type": "quiz",
            "list": [],
            "subject": "MATHS",
            "title": "CET-MATHS-2021",
            "questions": [
              {
                "serialNumber": "1",
                "question": "what is the product of 1 and 2",
                "correctAnswer": "2",
                "options": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "explanation": "if  you multiply 1 and 2 the product  is 2"
              },
              {
                "serialNumber": "2",
                "correctAnswer": "1",
                "question": "what is the product of 1 and 2",
                "options": [
                  "1",
                  "2",
                  "3",
                  "4"
                ],
                "explanation": "if  you multiply 1 and 2 the product  is 2"
              }
            ]
          }
        }
      }
    }
  }
  currentQuestion: any;
  optionSelected: any;
  showExplanation: any;
  answerCorrect: any;
  answerWrong: any;
  totalNumberOfQuestions: any;
  favoriteSeason: string | undefined;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  showFiller = false;
  list: any;
  quizDisabled: any;
  currentIndex: any;
  ngOnInit(): void {

    this.start()
  }
  start() {
    if (this.quiz.type == "quiz") {
      this.quizDisabled = true
      this.quizInit()
    } else if (this.quiz.type == "list") {
      this.quizDisabled = false
      this.list = Object.keys(this.quiz.list)
    }

  }
  forward(item: string) {
    this.quiz = JSON.parse(JSON.stringify(this.quiz.list))[item]
    this.start()
  }


  quizInit() {
    this.showExplanation = false
    this.answerCorrect = false;
    this.answerWrong = false;
    this.currentIndex = 0
    this.totalNumberOfQuestions = this.quiz.questions.length;
    this.currentQuestion = this.quiz.questions[this.currentIndex]

  }
  nextQuestion() {
    console.log("calling the function")
    this.currentIndex = this.currentIndex + 1
    console.log(this.currentIndex)
    this.currentQuestion = this.quiz.questions[this.currentIndex]
    this.showExplanation = false

  }

  prevQuestion() {
    console.log("calling the function")
    this.currentIndex = this.currentIndex - 1
    console.log(this.currentIndex)
    this.currentQuestion = this.quiz.questions[this.currentIndex]
    this.showExplanation = false

  }
  onSubmit() {
    this.showExplanation = true
    if (this.currentQuestion.correctAnswer == this.optionSelected) {
      console.log("correct answer")
      this.answerCorrect = true;
      this.answerWrong = false;
    } else {
      this.answerCorrect = false;
      this.answerWrong = true;
      console.log("wrong answer")
    }
  }

}
