import { Component } from "@angular/core";

@Component({
    selector: 'teams',
    template: `<h2> {{getTitle()}} </h2>
                <ul>
                    <li *ngFor="let team of teams">
                        {{ team }}
                    </li>
                </ul>

                <h2>Details</h2>
                
                <ul>
                    <li *ngFor="let club of clubs" >
                        {{ club.name }},
                         {{ club.location }},    
                         {{ club.teamSize }}.                    
                    </li>
                </ul>`
})

export class TeamsComponent {
    title = "UK Roller Derby Teams";

    getTitle() {
        return this.title;
    }

    teams = ["Portsmouth Roller Wenches","London Roller Derby","Killahurtz","Seaside Sirens Roller Derby"];

    clubs = [
        {
            name:"Portsmouth Roller Wenches",
            location:"Portsmouth",
            teamSize:"50",
        },
        {
            name:"London Roller Derby",
            location:"London",
            teamSize:"200",
        },
        {
            name:"Killahurtz",
            location:"Chelmsford",
            teamSize:"30",
        },
        {
            name:"Seaside Sirens Roller Derby",
            location:"Southend",
            teamSize:"10",
        }
    ]
}