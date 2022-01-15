import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { QuestionPapersComponent } from './components/question-papers/question-papers.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [
  
  {path:"quiz",component:QuizComponent},
  {path:"question-papers",component:QuestionPapersComponent}

];
=======
import { AboutUsComponent } from './components/about-us/about-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionPapersComponent } from './components/question-papers/question-papers.component';
import { QuizComponent } from './components/quiz/quiz.component';

const routes: Routes = [{path: '', redirectTo: '/home',pathMatch:'full'}, 
                        {path:"quiz/:path",component:QuizComponent},
                        {path:"home",component:HomeComponent},
                        {path:"about-us",component:AboutUsComponent},
                        {path:"blogs",component:BlogsComponent},
                        {path:"question-papers",component:QuestionPapersComponent}]
>>>>>>> 0f4d0168a10a6ae234d9b8e77c56f8bd5eef8627

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
