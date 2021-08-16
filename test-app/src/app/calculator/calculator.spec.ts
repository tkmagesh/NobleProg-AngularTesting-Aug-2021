import { Calculator } from './calculator'

describe("A Calculator", () => {
    it("Should be able to add two numbers", () => {
        //Arrange
            //sut
            const calc = new Calculator();

            //inputs
            const n1 : number = 100,
                n2 : number = 200;

            //expected result
            const expectedResult : number = 400;

        //Act
            //actual operation
            const actualResult = calc.add(n1, n2);


        //Assert
            //verify the outcome of the operation
            expect(actualResult).toBe(expectedResult);
            
    });
});