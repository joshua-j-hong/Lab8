/**
 * @jest-environment jsdom
 */
import {pushToHistory} from "../scripts/router.js"

describe('testing pushToHistory', () => {
    test('state equals settings', () => {
        let currenthistory = pushToHistory('settings');
        expect(currenthistory.state['page']).toBe('settings');
        expect(currenthistory.length).toBe(2);
    });
    test("state equals entry", () =>{
        let currenthistory = pushToHistory('entry', 3);
        expect(currenthistory.state['page']).toBe('entry3');
        expect(currenthistory.length).toBe(3);
    });
    test("empty state", () =>{
        let currenthistory = pushToHistory('');
        expect(currenthistory.state).toEqual({});
        expect(currenthistory.length).toBe(4);
    });
});