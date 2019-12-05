import { callApi, ENDPOINT } from '../js/service.js';
import { apiFoodFix } from './fixtures/apiFoodFix.js';

describe('testing api', () => {
    beforeEach(() => {
        fetch.resetMocks()
    })

    it('calls restaurant api', () => {
        fetch.mockResponseOnce(JSON.stringify(apiFoodFix))
        //assert on the response
        callApi().then(res => {
            expect(res).toEqual(apiFoodFix)
        })

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1)
        expect(fetch.mock.calls[0][0]).toEqual(ENDPOINT)
    });

});

