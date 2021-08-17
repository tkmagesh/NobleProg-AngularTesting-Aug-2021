import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing'
import { BugApi } from './bugApi.service'
import mockData from './mock-data'
import { Bug } from '../models/bug'

fdescribe("Bug API service", () => {
    let bugApi : BugApi;
    let httpTestingController : HttpTestingController;

    beforeEach( () => {
        TestBed.configureTestingModule({
            providers: [BugApi], 
            imports : [
                HttpClientTestingModule
            ]
        })
        bugApi = TestBed.inject(BugApi)
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it("should be able to created an instance", () => {
        expect(bugApi).toBeTruthy('failed to create an instance of the service')
    });

    it("should be able to get all the bugs", () => {
        const expectedResult : Bug[] = mockData.bugs.filter(bug => !bug.isClosed)
        bugApi
            .getAll()
            .subscribe(bugs => {
               /*  expect(bugs).toBeTruthy('failed to get all bugs')
                expect(bugs.length).toEqual(2, 'failed to get all bugs')
                const bug = bugs.find(bug => bug.id === 2)
                expect(bug).toBeDefined('failed to get bug 2') */
                //expect(bug.name).toEqual('Data integrity checks failed', 'failed to get bug 1')
                expect(bugs).toEqual(expectedResult, 'failed to get all bugs')
            });

        const req = httpTestingController.expectOne('http://localhost:3000/bugs');
        expect(req.request.method).toEqual('GET');
        
        req.flush(mockData.bugs);

        httpTestingController.verify();
    })
})