import { Component } from '@angular/core';

@Component({
    selector: 'repeat-button',
    template: `
        <div class="repeat-button-class fadeIn">
            <span><a href="questionroom"></a></span>
        </div>`,
    styleUrls: ["./repeatButton.css", "../question/question.css"]
})

export class RepeatButtonComponent {}
