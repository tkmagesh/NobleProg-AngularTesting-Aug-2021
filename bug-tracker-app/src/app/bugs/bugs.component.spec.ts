import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing"
import { BugsComponent } from "./bugs.component"
import { BugsModule } from "./bugs.module"
import { BugOperationsService } from "./services/bugOperations.service";
import { bugs as mockbugs } from "./mock-data/bugs"
import { of } from "rxjs";
import { By } from "@angular/platform-browser";
import { BugEditComponent } from "./components/bugEdit/bugEdit.component";
import { Bug } from "./models/bug";
import { DebugElement } from "@angular/core";
import { BugStatsComponent } from "./components/bugStats/bugStats.component";

xdescribe("Bugs Component", () => {
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

    describe("CRUD operations", () => {
        let bugOperationsSpy : any;
        let debugEl : DebugElement;

        beforeEach(() => {
            bugOperationsSpy = TestBed.inject(BugOperationsService);
            spyOn(bugOperationsSpy, "getAll").and.returnValue(of(mockbugs));
            debugEl = fixture.debugElement;
        });
        
        it ("Should populate the bugs when initialized", () => {
            bugsComponent.ngOnInit();
            fixture.detectChanges();
            expect(bugsComponent.bugs.length).toBe(3);
        });

        it("Should pass the bugs as input to bugStats component", () => {
            const el = fixture.debugElement;
            const bugStatsDebugEl = el.query(By.directive(BugStatsComponent))
            const bugstatsComponent : BugStatsComponent = bugStatsDebugEl.componentInstance;
            fixture.detectChanges();
            expect(bugstatsComponent.bugs.length).toBe(mockbugs.length);
        });

        it("Should add the new bug when the bugEditComponent emits the 'created' event", () => {
            const dummyNewBug : Bug = { id : 100, name : 'Dummy Bug', isClosed : false, createdAt : new Date() };
            bugsComponent.ngOnInit();
            fixture.detectChanges();
            const bugEditComponent = debugEl.query(By.directive(BugEditComponent)).componentInstance;
            bugEditComponent.created.emit(dummyNewBug)
            expect(bugsComponent.bugs.length).toBe(4);
        });

        it("Should display the bugs", () => {
            bugsComponent.ngOnInit();
            fixture.detectChanges();
            //expect(fixture.debugElement.queryAll(By.css('li')).length).toBe(mockbugs.length)
            expect(fixture.debugElement.nativeElement.querySelectorAll('li').length).toBe(mockbugs.length)
        })

        it('should pass the bugs as input to the bugstats component', () => {
            bugsComponent.ngOnInit();
            fixture.detectChanges();
            const dummyNewBug : Bug = { id : 100, name : 'Dummy Bug', isClosed : false, createdAt : new Date() };
            const bugEditComponent = debugEl.query(By.directive(BugEditComponent)).componentInstance;
            bugEditComponent.created.emit(dummyNewBug)
            const el = fixture.debugElement;
            const bugstatsComponent : BugStatsComponent = el.query(By.directive(BugStatsComponent)).componentInstance;
            fixture.detectChanges();
            expect(bugstatsComponent.bugs.length).toBe(mockbugs.length + 1);
        })
    })

    
})