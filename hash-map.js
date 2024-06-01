import { LinkList } from '@freeloader/link-list';


class HashMap {
  totalBuckets = 23;
  #bucketStorage;
  #length;

  constructor() {
    this.#initHashMap();
  }

  #initHashMap() {
    this.#bucketStorage = Array(this.totalBuckets);
    this.#length = 0;
    for (let i = 0; i < this.#bucketStorage.length; i++) {
      this.#bucketStorage[i] = new LinkList();
    }
  }

  length() {
    return this.#length;
  }

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      let temp = (primeNumber * hashCode) + key.charCodeAt(i);
      hashCode = (temp % this.totalBuckets);
    }

    return hashCode;
  }

  set(key, value) {
    let idx = this.hash(key);

    this.#bucketStorage[idx].append({
      key,
      value,
    });
    this.#length += 1;
  }

  get(key) {
    let idx = this.hash(key);
    let bucket = this.#bucketStorage[idx];
    let node;
    let i = 0;
    while ((node = bucket.at(i)) !== null) {
      let item = node.value;
      if (item.key === key) {
        return item.value;
      }
      i += 1;
    }
    return null;
  }

  has(key) {
    let idx = this.hash(key);
    let bucket = this.#bucketStorage[idx];
    let node;
    let i = 0;
    while ((node = bucket.at(i)) !== null) {
      let item = node.value;
      if (item.key === key) {
        return true;
      }
      i += 1;
    }
    return false;
  }

  remove(key) {
    let idx = this.hash(key);
    let bucket = this.#bucketStorage[idx];
    let node;
    let i = 0;
    while ((node = bucket.at(i)) !== null) {
      let item = node.value;
      if (item.key === key) {
        bucket.removeAt(i);
        this.#length -= 1;
        return true;
      }
      i += 1;
    }
    return false;
  }

  clear() {
    this.#initHashMap();
  }

  print() {
    for (let i = 0; i < this.#bucketStorage.length; i++) {
      if (this.#bucketStorage[i].head !== null) {
        console.log(`(${i}) => ${this.#bucketStorage[i].toString()}`);
      } else {
        console.log(`(${i}) => empty bucket`);
      }
    }
  }

  keys() {
    let allKeys = [];
    let node;
    for (let eachBucket of this.#bucketStorage) {
      let i = 0;
      while ((node = eachBucket.at(i)) !== null) {
        let item = node.value;
        allKeys.push(item.key);
        i += 1;
      }
    }
    return allKeys;
  }

  values() {
    let allValues = [];
    let node;
    for (let eachBucket of this.#bucketStorage) {
      let i = 0;
      while ((node = eachBucket.at(i)) !== null) {
        let item = node.value;
        allValues.push(item.value);
        i += 1;
      }
    }
    return allValues;
  }

  entries() {
    let allEntries = [];
    let node;
    for (let eachBucket of this.#bucketStorage) {
      let i = 0;
      while ((node = eachBucket.at(i)) !== null) {
        let item = node.value;
        allEntries.push([item.key, item.value]);
        i += 1;
      }
    }
    return allEntries;
  }
}


export {
  HashMap,
};

