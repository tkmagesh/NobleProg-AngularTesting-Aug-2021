import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector : 'app-bug-edit',
    templateUrl : './bugEdit.component.html'
})
export class BugEditComponent{
    newBugName : string = ''

    @Output()
    onAddNewBug : EventEmitter<string> = new EventEmitter<string>();

    onAddNewClick(){
        this.onAddNewBug.emit(this.newBugName);
    }
}