# ttl-cache

> in-memory ttl cache. that's it

## install

```sh
$ npm i @lennon/ttl-cache
```

## usage

```js
import c from '@lennon/ttl-cache';

const cache = c();
cache.set('foo', 'bar');
console.log(cache.get('foo'));
```

## api

### `cache([opts])`

create cache that keep items for `opts.ttl || 300000` ms, and does cleanup
every `opts.interval || 60000` ms.

### `cache.get(key)`

get item by key, or null if expired or missing

### `cache.set(key, value)`

set item by key

### `cache.length`

get current cache size (might contain expired items too)

## license

MIT
