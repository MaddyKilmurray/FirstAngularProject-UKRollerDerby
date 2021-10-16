import { Component } from "@angular/core";

@Component({
    selector: 'date',
    template: `
            <h4> {{ getDate() }}</h4>`
})


export class DateComponent {
    getDate() {
        return new Date().toLocaleString();
    }
}