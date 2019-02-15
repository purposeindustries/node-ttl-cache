var test = require('tape');
var Cache = require('./');

test('get-set', function (t) {
  var cache = Cache();
  cache.set('foo', 'bar');
  t.equals(cache.get('foo'), 'bar');
  cache.destroy();
  t.end();
});

test('expire', function (t) {
  var cache = Cache({
    ttl: 10,
  });
  cache.set('foo', 'bar');
  setTimeout(function () {
    t.equals(cache.get('foo'), null);
    cache.destroy();
    t.end();
  }, 50);
});

test('cleanup', function (t) {
  var cache = Cache({
    ttl: 10,
    interval: 20,
  });
  cache.set('foo', 'bar');
  setTimeout(function () {
    t.equals(cache.length, 0);
    cache.destroy();
    t.end();
  }, 50);
});

test('destroy', function (t) {
  var cache = Cache()
  cache.set('foo', 'bar');
  cache.destroy();
  t.equals(cache.length, 0);
  t.end();
});
