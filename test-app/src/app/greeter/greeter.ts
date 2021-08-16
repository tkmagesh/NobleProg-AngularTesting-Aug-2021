export class Greeter{
    greet(userName : string) : string {
        var date = new Date()
        if (date.getHours() <= 12){
            return `Hi ${userName}, Have a good morning!`
        } else {
            return `Hi ${userName}, Have a good day!`
        }
    }
}