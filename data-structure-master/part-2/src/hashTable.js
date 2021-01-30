const LimitedArray = require("./helpers/limitedArray");
const hashFunction = require("./helpers/hashFunction");
// 위 문법은 helpers 폴더에 있는 limitedArray와 hashFunction을 불러오는 문법입니다.
// 위와 같이 require를 사용해서 다른 파일로부터 함수 등을 불러오는 작업은 이후에 따로 설명합니다.

class HashTable {
  constructor() {
    this._size = 0;
    this._bucketNum = 8;
    this._storage = LimitedArray(this._bucketNum);
  }

  insert(key, value) {
    const index = hashFunction(key, this._bucketNum);
    let bucket = this._storage.get(index) || [];
    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        let oldValue = tuple[1];
        tuple[1] = value;
        return oldValue;
      }
    }
    bucket.push([key, value]);
    this._storage.set(index, bucket);
    this._size++;
    if (this._size > this._bucketNum * 0.75) {
      this._resize(Math.floor(this._bucketNum * 2));
    }
  }

  retrieve(key) {
    const index = hashFunction(key, this._bucketNum);
    let bucket = this._storage.get(index) || [];

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        return tuple[1];
      }
    }
  }

  remove(key) {
    const index = hashFunction(key, this._bucketNum);
    let bucket = this._storage.get(index) || [];

    for (let i = 0; i < bucket.length; i++) {
      let tuple = bucket[i];
      if (tuple[0] === key) {
        bucket.splice(i, 1);
        this._size--;
        if (this._size < this._bucketNum * 0.25) {
          this._resize(Math.floor(this._bucketNum / 2));
        }
      }
      return tuple[1];
    }
  }

  _resize(newBucketNum) {
    let oldStorage = this._storage;
    newBucketNum = Math.max(newBucketNum, 8);
    if (newBucketNum === this._bucketNum) {
      return;
    }
    this._bucketNum = newBucketNum;
    this._storage = LimitedArray(this._bucketNum);
    this._size = 0;

    oldStorage.each((bucket) => {
      if (!bucket) {
        return;
      }
      for (let i = 0; i < bucket.length; i++) {
        let tuple = bucket[i];
        this.insert(tuple[0], tuple[1]);
      }
    });
  }
}

module.exports = HashTable;
