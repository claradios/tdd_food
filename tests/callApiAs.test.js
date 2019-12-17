import { callApiAs } from '../js/callApiAs.js';
import { apiFoodMock } from './fixtures/apiFoodMock.js';
import * as errorModule from '../js/error.js';
const ENDPOINTGOOD = '../apiFood.json';

describe('testing api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  })

  test('it calls GibliApi with the rigth url', () => {

    fetch.mockResponseOnce(JSON.stringify(apiFoodMock));

    callApiAs(ENDPOINTGOOD);

    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(ENDPOINTGOOD);

  });

  test('it returns null when fetch fails and calls showError func', async () => {
    fetch.mockReject(null);

    const spyErrorFn = jest.spyOn(errorModule, 'showError');
    const result = await callApiAs(ENDPOINTGOOD);

    expect(result).toEqual(null);
    expect(spyErrorFn).toHaveBeenCalledTimes(1);

  });

  test('it calls apiFood and returns data', async () => {

    fetch.mockResponseOnce(JSON.stringify(apiFoodMock));

    const result = await callApiAs(ENDPOINTGOOD);

    expect(result).toEqual(apiFoodMock);

  });
});