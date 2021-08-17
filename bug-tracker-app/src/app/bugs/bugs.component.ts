import { Component, OnInit } from "@angular/core";
import { Bug } from "./models/bug";
import { BugOperationsService } from "./services/bugOperations.service";


@Component({
    selector : 'app-bugs',
    templateUrl : './bugs.component.html',
    styleUrls : ['./bugs.component.css']
})
export class BugsComponent implements OnInit{
    
    sortAttrName : string = '';
    sortByDesc : boolean = false;
    
    constructor( public bugOperations : BugOperationsService){
        
    }
    
    ngOnInit(): void {
        this.bugOperations.loadBugs();
    }

    onNewBugCreation(newBugName : string){
        this.bugOperations.createNew(newBugName)
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugOperations.remove(bugToRemove)
    }

    onBugNameClick(bugToToggle : Bug){
        this.bugOperations.toggle(bugToToggle)
    }

    onRemoveClosedClick(){
        this.bugOperations.removeClosed()
    }

    getClosedCount() : number {
        /* 
        let closedCount = 0;
        for (let bug of this.bugs){
            if (bug.isClosed)
                closedCount++
        }
        return closedCount; 
        */

        //return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
        return 0;
    }

    /* getTrimText(data:string) : string {
        console.log('getTrimText triggered')
        return data.length <= 30 ? data : data.substr(0,30) + '...';
    } */
}