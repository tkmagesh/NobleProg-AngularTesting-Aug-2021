import { ComponentFixture, TestBed } from "@angular/core/testing"
import { GreeterComponent } from "./greeter.component"

describe("Greeter Component", () => {
    let fixture : ComponentFixture<GreeterComponent>;
    let greeterComponent : GreeterComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [GreeterComponent]
        });

        fixture = TestBed.createComponent(GreeterComponent);
        greeterComponent = fixture.componentInstance;
    })

    it ("Should be able to create an instance", () =>{
        expect(greeterComponent).toBeTruthy("Error creating an instance");
    })

    it("Should have the userName initialized to empty string", () =>{
        expect(greeterComponent.userName).toBe("");
    });

    it("Should have the greet message initialized to empty string", () =>{
        expect(greeterComponent.greetMessage).toBe("");
    });

    it("should generate the message when greeted", () => {
        greeterComponent.userName = "John";
        greeterComponent.onGreetClick();
        expect(greeterComponent.greetMessage).toBe("Hello, John!");
    });

    it("should display the message when greeted with a name", () => {
        greeterComponent.userName = "John";
        greeterComponent.onGreetClick();
        const el = fixture.debugElement;
        const nativeElement = fixture.nativeElement;
        fixture.detectChanges();
        const greetMessageElement = nativeElement.querySelector(".message")
        expect(greetMessageElement.textContent).toBe("Hello, John!");
    });

   
})