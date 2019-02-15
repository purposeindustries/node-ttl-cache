module.exports = function create(opts) {
  opts = opts || {};
  var ttl = opts.ttl || 1000 * 60 * 5;
  var interval = opts.interval || 1000 * 60;
  var cache = {};

  var cacheInterval = setInterval(function () {
    for (var key in cache) {
      if (cache[key].expire <= Date.now()) {
        delete cache[key];
      }
    }
  }, interval);

  return {
    get: function get(key) {
      var item = cache[key];

      if (!item || item.expire <= Date.now()) {
        return null;
      }

      return item.value;
    },

    set: function set(key, value) {
      return cache[key] = {
        expire: Date.now() + opts.ttl,
        value: value,
      };
    },

    get length() {
      return Object.keys(cache).length;
    },

    destroy: function destroy() {
      cache = {};
      clearInterval(cacheInterval);
    }
  };
};
