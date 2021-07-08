Function.prototype.newCall = function (context = window) {
  context.fn = this;
  const args = Array.prototype.slice.call(arguments, 1),
    result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.newApply = function (context = window) {
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}
let foo = {
  value: 1,
};
bar.newApply(foo, ["black", "18"]); // black 18 1

Function.prototype.newBind = function (context = window) {
  if (typeof this !== "function") throw new Error("this is no function");
  const fn = this,
    args = Array.prototype.slice.call(arguments, 1);
  function resFn() {
    return fn.apply(
      this instanceof resFn ? resFn : context,
      args.concat(...arguments)
    );
  }
  function Fun() {}
  Fun.prototype = this.prototype;
  resFn.prototype = new Fun();
  return resFn;
};

function new_(fn) {
  if (typeof fn !== "function") throw new Error(fn + "is no function");
  const o = new Object();
  Object.setPrototypeOf(o, fn.prototype);
  const args = Array.prototype.slice.call(arguments, 1);
  const _o = fn.call(o, ...args);
  return _o instanceof o ? _o : o;
}
