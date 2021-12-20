import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdService } from '../ad/ad.service';

@Component({
    selector: 'answer',
    template: `
        <div class="answer-class fadeIn">
            <input
                type="text"
                maxlength="3"
                [(ngModel)]="answerText"
                (ngModelChange)="onAwnswerChange()" />
        </div>`,
    styleUrls: ["./answer.css", "../question/question.css"]
})

export class AnswerComponent {
    answerText: String = "";

    constructor(private adService: AdService, private router: Router) {}

    onAwnswerChange() {
        if (this.answerText.toLowerCase() === this.adService.getAnswer()) {
            this.router.navigate(['/winnerroom']);
        }
    }
}