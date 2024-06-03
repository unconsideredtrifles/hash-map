# HashMap Data Structure

This is a HashMap data structure library. It only supports string-type key at the moment. The following is code example :
```JavaScript
let h = new HashMap();

h.set('name', 'John');
h.set('age', 19);
h.set('grade', 10);
h.set('favorite fruit', 'apple');

console.log(h.get('name')); // 'John'
console.log(h.get('age')); // 19
console.log(h.get('favorite fruit')); // 'apple'
console.log(h.get('favorite fruits')); // null
console.log(h.length()); // 4
```

There is also HashSet, which is similar to HashMap but only accepts key instead of key-value pair :
```JavaScript
let favMovies = new HashSet();
h.set('Morbius');
h.set('Morbius 2')

console.log(h.keys()); // ['Morbius', 'Morbius 2']
```

## Usage
1. Clone the repo from github first : 
```bash
git clone https://github.com/unconsideredtrifles/hash-map
```
2. Create a `.js` file in the cloned directory and you can import the functionalities you need from hash-map.js :
```JavaScript
import { HashMap, HashSet } from './hash-map.js';

let hm = new HashMap();
let hs = new HashSet();
```