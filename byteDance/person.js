const Person = function (firstAndLast) {
  // 只修改这一行下面的代码
  // 完成下面的方法，其余的执行类似

  Object.defineProperty(this, '_firstAndLast', {
    value: firstAndLast,
    configurable: true,
    enumerable: false,
    writable: true,
  });

  this.getFirstName = function () {
    return this._firstAndLast.split(/\s/)[0];
  };

  this.setFirstName = function (name) {
    let [first, last] = this._firstAndLast.split(/\s/);
    first = name;
    this._firstAndLast = first + ' ' + last;
  };

  this.getLastName = function () {
    return this._firstAndLast.split(/\s/)[1];
  };

  this.setLastName = function (name) {
    let [first, last] = this._firstAndLast.split(/\s/);
    last = name;
    this._firstAndLast = first + ' ' + last;
  };

  this.getFullName = function () {
    console.log(this._firstAndLast);
    return '';
  };

  this.setFullName = function (name) {
    this._firstAndLast = name;
  };
};

const bob = new Person('Bob Ross');
bob.setLastName('Hello');
bob.getFullName();

console.log(Object.keys(bob).length);
console.log(bob.getFirstName());
console.log(bob.getLastName());

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
