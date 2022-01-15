import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { QuizComponent } from './components/quiz/quiz.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';

import { MatRadioModule } from '@angular/material/radio';
<<<<<<< HEAD
import { QuestionPapersComponent } from './components/question-papers/question-papers.component';
=======
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { QuestionPapersComponent } from './components/question-papers/question-papers.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { Router } from '@angular/router';
>>>>>>> 0f4d0168a10a6ae234d9b8e77c56f8bd5eef8627

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
<<<<<<< HEAD
    QuestionPapersComponent
=======
    HomeComponent,
    AboutUsComponent,
    QuestionPapersComponent,
    BlogsComponent
>>>>>>> 0f4d0168a10a6ae234d9b8e77c56f8bd5eef8627
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
<<<<<<< HEAD
    MatSidenavModule
=======
    MatSidenavModule,
    FlexLayoutModule,
>>>>>>> 0f4d0168a10a6ae234d9b8e77c56f8bd5eef8627
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

