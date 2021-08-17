import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { BugsComponent } from "./bugs.component"
import { BugsModule } from "./bugs.module"

fdescribe("Bugs Component", () => {
    let fixture : ComponentFixture<BugsComponent>;
    let bugsComponent : BugsComponent;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            imports : [
                BugsModule
            ]
        })
        .compileComponents()
        .then(() => {
            fixture = TestBed.createComponent(BugsComponent)
            bugsComponent = fixture.debugElement.componentInstance
        });
    }))
    
    it("Should create an instance of the component", () => {
        expect(bugsComponent).toBeTruthy()
    });

})