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