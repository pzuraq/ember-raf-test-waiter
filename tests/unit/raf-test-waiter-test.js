import { module, test } from 'qunit';
import { registerWaiter } from 'ember-raf-test-waiter';
import wait from 'ember-test-helpers/wait';

module('Unit | raf-test-waiter');

test('waits correctly for RAF', function(assert) {
  let async = assert.async(1);

  let rafCompleted = false;

  registerWaiter();

  // setTimeout to make sure RAF runs after at least one interval check from 'wait',
  // then two RAFs to double check the fault tolerance of the waiter (which should
  // wait for at least two frames)
  setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(() => rafCompleted = true)));

  wait().then(() => {
    async();
    assert.ok(rafCompleted, 'wait successfully waited for RAF');
  });
});
