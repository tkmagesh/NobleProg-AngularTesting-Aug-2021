import { Injectable } from '@angular/core';
import { TimeService } from './time.service';

@Injectable({
    providedIn: 'root'
})
export class Greeter{

    constructor(private timeService: TimeService){

    }
    greet(userName : string) : string {
        if (this.timeService.getCurrent().getHours() <= 12){
            return `Hi ${userName}, Have a good morning!`
        } else {
            return `Hi ${userName}, Have a good day!`
        }
    }
}