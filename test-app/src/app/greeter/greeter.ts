import { ITimeService } from './time.service';

export class Greeter{

    constructor(private timeService: ITimeService){

    }
    greet(userName : string) : string {
        if (this.timeService.getCurrent().getHours() <= 12){
            return `Hi ${userName}, Have a good morning!`
        } else {
            return `Hi ${userName}, Have a good day!`
        }
    }
}