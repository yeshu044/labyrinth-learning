import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }
 quiz = {
  "type": "quiz",
  "subject": "MATHS",
  "title": "CET-MATHS-2021",
  "questions": [
    {
      "serialNumber": "1",
      "question": "what is the product of 1 and 2",
      "correctAnswer":"2",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "explanation":"if  you multiply 1 and 2 the product  is 2"
    },
    {
      "serialNumber": "2",
      "correctAnswer":"1",
      "question": "what is the product of 1 and 2",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "explanation":"if  you multiply 1 and 2 the product  is 2"
    }
  ]
}
currentQuestion:any;
optionSelected:any;
showExplanation:any;
answerCorrect:any;
answerWrong:any;
favoriteSeason: string | undefined;
seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];



currentIndex:any;
  ngOnInit(): void {
    this.showExplanation = false
    this.answerCorrect=false;
    this.answerWrong=false;
    this.currentIndex = 0
    this.currentQuestion = this.quiz.questions[this.currentIndex]
    
  }

  nextQuestion()
  {
    console.log("calling the function")
    this.currentIndex = this.currentIndex + 1
    console.log(this.currentIndex)
    this.currentQuestion = this.quiz.questions[this.currentIndex]
    this.showExplanation = false

  }

  prevQuestion()
  {
    console.log("calling the function")
    this.currentIndex = this.currentIndex - 1
    console.log(this.currentIndex)
    this.currentQuestion = this.quiz.questions[this.currentIndex]
    this.showExplanation = false

  }
  onSubmit()
  {
    this.showExplanation = true
    if (this.currentQuestion.correctAnswer == this.optionSelected)
    {
      console.log("correct answer")
      this.answerCorrect = true;
      this.answerWrong = false;
    }else{
      this.answerCorrect = false;
      this.answerWrong = true;
      console.log("wrong answer")
    }
  }

}
