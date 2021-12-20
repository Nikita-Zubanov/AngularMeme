import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { AdComponent } from '../ad/ad.component';
import { AdDirective } from '../ad/ad.directive';
import { AdService } from '../ad/ad.service';
import { AdItem } from '../ad/adItem';

@Component({
    selector: 'question-room',
    template: `
        <div class="question-room-class">
            <ng-template adHost></ng-template>
        </div>`,
    styleUrls: ["./questionRoom.css"]
})

export class QuestionRoomComponent implements OnInit, OnDestroy {
    INTERVAL_IN_MILLISECONDS = 3000;

    questions: AdItem[] = [];
    
    index = -1;
    lastItemIndex = 0;
    interval;
    isShow = true;
    
    @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
    
    constructor(private adService: AdService) {}
    
    ngOnInit() {
        this.questions = this.adService.getQuestions();
        this.loadComponent();
        this.getQuestions();
    }

    ngOnDestroy() {
        clearInterval(this.interval);
    }

    loadComponent() {
        this.index = (this.index + 1) % this.questions.length;
        const adItem = this.questions[this.index];

        const viewContainerRef = this.adHost.viewContainerRef;

        // Если индекс предыдущего элемента равен текущему, то не удалять предыдущий элемент, т.к. предполагается, что он должен отображаться вместе с текущим.
        if (adItem.data.index !== this.lastItemIndex) {
            viewContainerRef.clear();
        }
      
        const componentRef = viewContainerRef.createComponent<AdComponent>(adItem.component);
        componentRef.instance.data = adItem.data;
        
        this.lastItemIndex = adItem.data.index;
    }

    getQuestions() {
        this.interval = setInterval(() => {                
                if (!this.isShow) {
                    return;
                }
                else if (this.index + 1 === this.questions.length) {
                    this.isShow = false;
                    return;
                }
                
                this.loadComponent();
            },
            this.INTERVAL_IN_MILLISECONDS);
    }
}