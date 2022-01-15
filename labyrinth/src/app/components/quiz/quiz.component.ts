import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }
=======
  tracking = [{"index":-1,
                "header":"Main"}
]

  currentTrackingIndex = 0;
>>>>>>> 0f4d0168a10a6ae234d9b8e77c56f8bd5eef8627
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
<<<<<<< HEAD
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
=======
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
  temp:any;
  path:any;
  

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.path = this.route.snapshot.paramMap.get('path');
    console.log(this.path)
    this.temp = this.quiz;
    if(this.path == '0')
    {
    this.start()
    }else{
      let stages =  this.path.split('.')
      console.log(stages)
      // console.log(this.quiz)
      for(let i=0;i<stages.length;i++)
      {
          this.forward_internal(stages[i].toUpperCase())

      }
      this.start()
    }
    
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
  forward_internal(item:string){
    this.quiz = JSON.parse(JSON.stringify(this.quiz.list))[item]
    this.tracking.push({"index":this.currentTrackingIndex,
    "header":item})
    this.currentTrackingIndex = this.currentIndex+1;
  }
  forward(item: string) {
    this.quiz = JSON.parse(JSON.stringify(this.quiz.list))[item]
    this.tracking.push({"index":this.currentTrackingIndex,
    "header":item})
    this.currentTrackingIndex = this.currentIndex+1;
    this.start()
    
    
  }
>>>>>>> 0f4d0168a10a6ae234d9b8e77c56f8bd5eef8627

  }
  forward(item: string) {
    this.quiz = JSON.parse(JSON.stringify(this.quiz.list))[item]
    this.start()
  }

<<<<<<< HEAD

=======
>>>>>>> 0f4d0168a10a6ae234d9b8e77c56f8bd5eef8627
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
  navigateTo(index:any,header:string){
    this.quiz = this.temp
    if (header == 'Main')
    {
      this.tracking = [{"index":-1,
                "header":"Main"}
]

  this.currentTrackingIndex = 0;
      this.start()

      return

    }
    console.log(index,header)
   
    
    for(let i =0;i<=index;i++)
    {
      // this.quiz = this.quiz[]
      console.log(i, this.tracking[i]['header'])
      this.quiz = JSON.parse(JSON.stringify(this.quiz.list))[this.tracking[i+1]['header']]
      this.start()
    }
    if (this.tracking.length > 1) {
    this.tracking = this.tracking.filter(item=>{
      return item.index <= index
    })
    this.currentTrackingIndex = index + 1
    console.log(this.tracking)
    console.log(this.currentTrackingIndex)

  }

  }

}
