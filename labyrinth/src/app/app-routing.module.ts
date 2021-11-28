import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionPapersComponent } from './components/question-papers/question-papers.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  
  {path:"quiz",component:QuizComponent},
  {path:"question-papers",component:QuestionPapersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
