import sinon from 'sinon';
import {assert} from 'chai';
import any from '@travi/any';
import {plugin, handler} from '../../src';

suite('pre-response handler plugin', () => {
  const continueSymbol = any.simpleObject();

  test('that the plugin is defined', async () => {
    const ext = sinon.spy();

    assert.deepEqual(plugin.pkg, require('../../package.json'));

    await plugin.register({ext});

    assert.calledWith(ext, 'onPreResponse', handler);
  });

  test('that `accept` is added the `Vary` header', () => {
    const vary = sinon.spy();

    const symbol = handler({response: {vary}}, {continue: continueSymbol});

    assert.equal(symbol, continueSymbol);
    assert.calledWith(vary, 'accept');
  });

  test('that `accept` is not added to the `Vary` header for an error response', () => {
    const vary = sinon.spy();

    const symbol = handler({response: {vary, isBoom: true}}, {continue: continueSymbol});

    assert.equal(symbol, continueSymbol);
    assert.notCalled(vary);
  });
});
