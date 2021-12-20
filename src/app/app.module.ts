import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdDirective } from './ad/ad.directive';
import { AdService } from './ad/ad.service';
import { AppComponent } from './app.component';
import { BlackRoomComponent } from './blackRoom/blackRoom.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './questionRoom/answer.component';
import { QuestionRoomComponent } from './questionRoom/questionRoom.component';
import { RepeatButtonComponent } from './questionRoom/repeatButton.component';
import { WinnerComponent } from './winnerRoom/winner.component';

const appRoutes: Routes =[
    { path: '', component: BlackRoomComponent},
    { path: 'questionroom', component: QuestionRoomComponent},
    { path: 'blackroom', component: BlackRoomComponent},
    { path: 'winnerroom', component: WinnerComponent}
];

@NgModule({
    imports: [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AdDirective, AppComponent, BlackRoomComponent, AnswerComponent, QuestionComponent, QuestionRoomComponent, RepeatButtonComponent ],
    bootstrap: [ AppComponent ],
    exports: [ ],
    providers: [ AdService ]
})

export class AppModule { }