import { Component, Input } from '@angular/core';

import { AdComponent } from '../ad/ad.component';
     
@Component({
    selector: 'question',
    template: `
        <div class="question fadeIn">
            <h4>{{data.value}}</h4>
        </div>`,
    styleUrls: ["./question.css"]
})

export class QuestionComponent implements AdComponent {
    @Input() data: any;
}