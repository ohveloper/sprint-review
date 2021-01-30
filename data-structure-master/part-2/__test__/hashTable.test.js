const HashTable = require('../src/hashTable');
const _ = require('underscore');

describe('hashTable', function () {
  let hashTable;
  const people = [
    ['Steven', 'Tyler'],
    ['George', 'Harrison'],
    ['Mr.', 'Doob'],
    ['Dr.', 'Sunshine'],
    ['John', 'Resig'],
    ['Brendan', 'Eich'],
    ['Alan', 'Turing'],
  ];

  beforeEach(function () {
    hashTable = new HashTable();
  });

  it('key-value 쌍을 저장하고, key를 통해 다시 조회할 수 있어야 합니다', function () {
    hashTable.insert('Steven', 'Seagal');
    expect(hashTable.retrieve('Steven')).toEqual('Seagal');
  });

  it('retrieve는 key-value 쌍에 어긋나는 데이터를 리턴해서는 안 됩니다', function () {
    hashTable.insert('Steven', 'Spielberg');
    expect(hashTable.retrieve('Steven')).not.toEqual('Seagal');
  });

  it('같은 key를 가지고 여러 value를 저장하는 경우, 가장 최근의 value가 저장되어야 합니다', function () {
    hashTable.insert('Bob', 'Loblaw');
    hashTable.insert('Bob', 'Barker');
    expect(hashTable.retrieve('Bob')).toEqual('Barker');
  });

  it('해시 충돌을 chaining 기법을 통해 해결해야 합니다', function () {
    // 아래 두 key '1'과 '9'는 해시 함수의 결과가 동일합니다.
    let v1 = '1'; // hashFunction('1', 8) === 1
    let v2 = '9'; // hashFunction('9', 8) === 1

    hashTable.insert(v1, v1);
    hashTable.insert(v2, v2);
    expect(hashTable.retrieve(v1)).toEqual(v1);
    expect(hashTable.retrieve(v2)).toEqual(v2);
  });

  it('key-value 쌍을 삭제할 수 있어야 합니다', function () {
    hashTable.insert('Steven', 'Tyler');
    hashTable.remove('Steven');
    expect(hashTable.retrieve('Steven')).toEqual(undefined);
  });

  it('저장된 key-value 쌍의 개수가 bucketNum의 75%를 넘는 경우, bucketNum을 2배로 늘려야 합니다', function () {
    _.each(people, function (person) {
      const [firstName, lastName] = person;
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).toEqual(lastName);
    });
    expect(hashTable._bucketNum).toEqual(16);
  });

  it('저장된 key-value 쌍의 개수가 bucketNum의 25%보다 작아지는 경우, bucketNum을 절반으로 줄여야 합니다', function () {
    _.each(people, function (person) {
      const [firstName, lastName] = person;
      hashTable.insert(firstName, lastName);
      expect(hashTable.retrieve(firstName)).toEqual(lastName);
    });
    expect(hashTable._bucketNum).toEqual(16);
    hashTable.remove('George');
    hashTable.remove('Dr.');
    hashTable.remove('Steven');
    hashTable.remove('John');
    hashTable.remove('Mr.');
    expect(hashTable._bucketNum).toEqual(8);
  });

  it('bucketNum은 양의 정수입니다', function () {
    expect(hashTable._bucketNum < 0).toBeFalsy();
  });
});