import Ember from 'ember';

let RAFcompleted = false;
let scheduledRAF = null;

export function waiter() {
  if (RAFcompleted === true) {
    RAFcompleted = false;

    return true;
  } else {
    if (scheduledRAF === null) {
      scheduledRAF = requestAnimationFrame(() => requestAnimationFrame(() => {
        scheduledRAF = null;
        RAFcompleted = true;
      }));
    }

    return false;
  }
}

export function registerWaiter() {
  Ember.Test.registerWaiter(waiter);
}
