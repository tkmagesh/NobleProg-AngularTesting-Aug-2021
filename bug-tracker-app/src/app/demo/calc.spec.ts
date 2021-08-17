/* describe, it, expect */
import { Calculator } from './calc';

describe("Calculator", () => {
    it("Should be able to add the given numbers", () => {
        //arrange
        const calculator = new Calculator(),
            x = 100,
            y = 200,
            expectedResult = 300;

        //act
            const result = calculator.add(x, y);

        //assert
        expect(result).toBe(expectedResult);
    })
})