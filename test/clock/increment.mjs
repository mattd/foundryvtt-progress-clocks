import test from 'ava';

import { Clock } from "../../module/scripts/clock.mjs";

test("returns a new Clock object", t => {
    const oldClock = new Clock({
        progress: 1
    });
    const newClock = oldClock.increment();
    t.assert(newClock instanceof Clock);
    t.not(newClock, oldClock);
});

test("increments the previous progress by 1", t => {
    const oldClock = new Clock({
        progress: 1
    });
    const newClock = oldClock.increment();
    t.is(newClock.progress, 2);
});

test("does not alter the previous size", t => {
    const oldClock = new Clock({
        size: 4,
        progress: 1
    });
    const newClock = oldClock.increment();
    t.is(newClock.size, 4);
});

test("does not alter the previous theme", t => {
    const oldClock = new Clock({
        theme: 'gms_red',
        progress: 1
    });
    const newClock = oldClock.increment();
    t.is(newClock.theme, 'gms_red');
});
