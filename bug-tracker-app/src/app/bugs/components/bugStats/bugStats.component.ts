import { Component, Input } from "@angular/core";
import { Bug } from "../../models/bug";

@Component({
    selector : 'app-bug-stats',
    templateUrl : './bugStats.component.html'
})
export class BugStatsComponent{

    @Input('data')
    bugs : Bug[] = [];

}