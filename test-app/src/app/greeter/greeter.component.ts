import { Component } from "@angular/core";

@Component({
    selector: "app-greeter",
    template : `
        <h1>Greeter</h1>
        <hr>
        <label for="">User Name :</label>
        <input type="text" name="" id="">
        <input type="button" value="Greet">
        <div class="message">{{greetMessage}}</div>
    `,
    styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
    userName : string = ''
    greetMessage : string = ''

    onGreetClick(){
        this.greetMessage = `Hello, ${this.userName}!`
    }
}