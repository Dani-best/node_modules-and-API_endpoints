// ASYNC_HOOK - Provides an API for tracking asynchronous resources across async operations.
const async_hooks = require('async_hooks');
const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    console.log(`init: asyncId=${asyncId} type=${type}`);
  }
});
hook.enable();
setTimeout(() => console.log('setTimeout'), 100);
