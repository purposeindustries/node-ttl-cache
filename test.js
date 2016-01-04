var test = require('tape');
var Cache = require('./');

test('get-set', function (t) {
  var cache = Cache();
  cache.set('foo', 'bar');
  t.equals(cache.get('foo'), 'bar');
  t.end();
});

test('expire', function (t) {
  var cache = Cache({
    ttl: 10,
  });
  cache.set('foo', 'bar');
  setTimeout(function () {
    t.equals(cache.get('foo'), null);
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
    t.end();
  }, 50);
})
