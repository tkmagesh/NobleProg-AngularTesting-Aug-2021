import { TrimTextPipe } from './trimText.pipe';

describe("TrimText Pipe", () => {
    it("Should return the given string if shorter than the maxLength", () => {
        let shortStr = 'This is a demo string',
            expectedResult = 'This is a demo string'
        const trimTextPipe = new TrimTextPipe();
        const result = trimTextPipe.transform(shortStr);
        expect(result).toBe(expectedResult);
    })
    it("Should return the truncated string if longer than the maxLength", () => {
        let longStr = 'Eiusmod est reprehenderit ea et est aliquip. Ea id est cupidatat est aliquip magna occaecat. Voluptate nulla irure velit adipisicing adipisicing ipsum in. Exercitation sit est laborum sit magna. Labore aliquip adipisicing mollit dolor sunt esse nulla labore aliquip occaecat dolore sunt ipsum ut. Voluptate sint dolore ullamco Lorem aliqua dolore deserunt. Veniam proident voluptate cillum aliquip fugiat exercitation aliqua elit excepteur esse commodo.',
            expectedResult = 'Eiusmod est reprehenderit ea et est aliq...'
        const trimTextPipe = new TrimTextPipe();
        const result = trimTextPipe.transform(longStr);
        expect(result).toBe(expectedResult);
    })
})