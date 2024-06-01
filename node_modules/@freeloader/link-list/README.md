# Basic Link-list Data Structure

Basic link-list data structure I've done as part of [odin project](https://www.theodinproject.com/lessons/javascript-linked-lists).

The following is the non-exhaustive list of functionalities ( they're implemented as properties and methods of ``LinkList`` class ):

- **append(value)** - adds a new node containing `value` to the end of the list<br>
- **prepend(value)** - adds a new node containing `value` to the start of the list<br>
- **size** - returns the total number of nodes in the list<br>
- **head** - returns the first node in the list<br>
- **tail** - returns the last node in the list<br>
- **at(index)** - returns the node at the given index<br>
- **pop()** - removes the last node from the list<br>
- **contains(value)** - returns true if the passed in `value` is in the list and otherwise returns false.<br>
- **find(value)** - returns the index of the node containing `value`, or null if not found.<br>
- **toString()** - represents linkList objects as strings, so you can print them out and preview them in the console. The output format is: `( value ) -> ( value ) -> ( value ) -> null`<br>
