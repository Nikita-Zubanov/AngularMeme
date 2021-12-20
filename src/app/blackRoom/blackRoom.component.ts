import { Component } from "@angular/core";

@Component({
    selector: "black-room",
    template: `
        <div class="screen" [ngStyle]="{'background-color': isLightOn ? '#F0F8FF' : '#2D2D2D'}">
            <input (change)="action()" class="light" type="checkbox">
            <div class="help" [hidden]="!isLightOn">
                <a routerLink="/questionroom">ДАЛЕЕ</a>
            </div>
        </div>`,
    styleUrls: ["./lightCheckbox.css", "./blackRoom.css"]
})

export class BlackRoomComponent {
    isLightOn: Boolean = false;

    action() {
        this.isLightOn = !this.isLightOn; 
    }
}