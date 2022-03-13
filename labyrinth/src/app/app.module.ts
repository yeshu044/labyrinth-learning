import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar';
import { QuizComponent } from './components/quiz/quiz.component';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FileSaverModule } from 'ngx-filesaver';

import { MatRadioModule } from '@angular/material/radio';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { QuestionPapersComponent } from './components/question-papers/question-papers.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FileService } from './components/question-papers/file.service';
// import { Router } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    HomeComponent,
    AboutUsComponent,
    QuestionPapersComponent,
    BlogsComponent
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
    MatSidenavModule,
    FlexLayoutModule,HttpClientModule,FileSaverModule
  ],
  providers: [FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }

