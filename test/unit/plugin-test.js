import sinon from 'sinon';
import {assert} from 'chai';
import {register, handler} from '../../src';

suite('pre-response handler plugin', () => {
  test('that the plugin is defined', () => {
    const next = sinon.spy();
    const ext = sinon.spy();

    assert.deepEqual(register.attributes, {
      pkg: require('../../package.json')
    });

    register({ext}, null, next);

    assert.calledOnce(next);
    assert.calledWith(ext, 'onPreResponse', handler);
  });

  test('that `Accept` is added the `Vary` header', () => {
    const vary = sinon.spy();
    const continueSpy = sinon.spy();

    handler({response: {vary}}, {continue: continueSpy});

    assert.calledOnce(continueSpy);
    assert.calledWith(vary, 'Accept');
  });
});
