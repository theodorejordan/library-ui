import { module, test } from 'qunit';
import { setupTest } from 'library-ui/tests/helpers';

module('Unit | Controller | book/detail/new-review', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:book/detail/new-review');
    assert.ok(controller);
  });
});
