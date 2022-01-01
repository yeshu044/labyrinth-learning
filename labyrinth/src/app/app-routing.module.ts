import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
