import { Greeter } from './greeter'
import { TimeService } from './time.service'

/* 
export class FakeTimeServiceForMorning {
    getCurrent(){
        return new Date(2021, 7, 16, 9, 0,0)
    }
}

export class FakeTimeServiceForAfternoon {
    getCurrent(){
        return new Date(2021, 7, 16, 15, 0,0)
    }
} */

/* class FakeTimeService{
    constructor(private fakeDate : Date){
    }

    getCurrent() : Date{
        return this.fakeDate;
    }
} */

describe("The Greeter", () => {
    it("Should gree the user with 'good morning' when greeted before noon", () => {
        //arrange
        //const fakeTimeService = new FakeTimeServiceForMorning()
        //const fakeTimeService = new FakeTimeService(new Date(2021, 7, 16, 9, 0,0))
        const dateWithMorningTime = new Date(2021, 7, 16, 9, 0,0)
        //const fakeTimeService = jasmine.createSpyObj("fakeTimeService", { getCurrent : dateWithMorningTime})
        
        const fakeGetCurrent = jasmine.createSpy("getCurrent")
        fakeGetCurrent.and.returnValue(dateWithMorningTime)
        const fakeTimeService = { getCurrent : fakeGetCurrent }
        
        const greeter = new Greeter(fakeTimeService)
        const userName = 'Magesh'
        const expectedResult = 'Hi Magesh, Have a good morning!'
        //act

        const actualResult = greeter.greet(userName)

        //assert
        expect(actualResult).toBe(expectedResult)
    })

    it("Should gree the user with 'good day' when greeted after noon", () => {
        //arrange
        //const fakeTimeService = new FakeTimeServiceForAfternoon()
        //const fakeTimeService = new FakeTimeService(new Date(2021, 7, 16, 15, 0,0))
        const fakeTimeService = jasmine.createSpyObj("fakeTimeService", { getCurrent : new Date(2021, 7, 16, 15, 0,0)})
        const greeter = new Greeter(fakeTimeService)
        const userName = 'Magesh'
        const expectedResult = 'Hi Magesh, Have a good day!'
        //act

        const actualResult = greeter.greet(userName)

        //assert
        expect(actualResult).toBe(expectedResult)
    })
})