import { fakeAsync, flush, flushMicrotasks, tick } from "@angular/core/testing";

fdescribe("Async Demos" , () => {
    function addSync(x : number,y : number ) : number {
        console.log(`   [@service] processing ${x} and ${y}`);
        const result =  x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    it("Sync operation test", (done) => {
        let x = 100,
            y = 200,
            expectedResult = 300;

        let result = addSync(x,y);

        expect(result).toBe(expectedResult);
        done()
    });

    function addAsync(x : number,y : number, callback : (result : number) => void) : void {
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(() => {
            const result =  x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        })
    }

    it("Async operation test", (done) => {
        let x = 100,
            y = 200,
            expectedResult = 300;

        addAsync(x,y, (result) => {
            expect(result).toBe(expectedResult);
            done();
        });
    });

    it("testing multiple async operations", fakeAsync(() => {
        let test1 = false;
        setTimeout(() => {
            test1 = true;
            console.log('async operation 1 completed')
        }, 3000)

        let test2 = false;
        setTimeout(() => {
            test2 = true;
            console.log('async operation 2 completed')
        }, 3000);

        console.log('before flush')
        flush()
        console.log('after flush')
        expect(test1).toBe(true);
        expect(test2).toBe(true);
    }));

    it("testing a promise", fakeAsync(() => {
        let test1 = false;

        let promise = new Promise((resolve, reject)=>{
            test1 = true;
            resolve(100)
        })

        expect(test1).toBe(true);
    }))

    it("testing a promise with timeout async opeation", fakeAsync(() => {
        let counter = 0;
        Promise
            .resolve()
            .then(() => {
                counter = 10;
                setTimeout(() => {
                    counter += 1;
                }, 2000)
            })

        expect(counter).toBe(0);
        flushMicrotasks();
        expect(counter).toBe(10);
        flush()
        expect(counter).toBe(11);
    }));

    it("testing time interval based async operations with timeline", fakeAsync(() => {
        let counter = 0;

        Promise.resolve()
            .then(() => {
                counter = 10;
                setTimeout(() => {
                    counter += 1
                }, 2000)
            });
        
        expect(counter).toBe(0);
        flushMicrotasks(); //=> waits for microtasks to be completed
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(10);
        tick(500)
        expect(counter).toBe(10);
        tick(500)
        expect(counter).toBe(10);
        //flush(); //=> waits for all the macrotasks to be completed
        tick(500)
        expect(counter).toBe(11);
    }))

    it("testing time interval based async operations with timeline-2", fakeAsync(() => {
        let counter = 0;

        Promise.resolve()
            .then(() => {
                counter = 10;
                setTimeout(() => {
                    counter += 1
                }, 500)
                setTimeout(() => {
                    counter += 1
                }, 1000)
                setTimeout(() => {
                    counter += 1
                }, 1500)
                setTimeout(() => {
                    counter += 1
                }, 2000)
            });
        
        expect(counter).toBe(0);
        flushMicrotasks(); //=> waits for microtasks to be completed
        expect(counter).toBe(10);
        tick(500);
        expect(counter).toBe(11);
        tick(500)
        expect(counter).toBe(12);
        tick(500)
        expect(counter).toBe(13);
        //flush(); //=> waits for all the macrotasks to be completed
        tick(500)
        expect(counter).toBe(14);
    }));




})