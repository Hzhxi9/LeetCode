Function.prototype.newCall = function (context) {
  const ctx = context || window,
    args = [];
  ctx.fn = this;

  for (let i = 0, len = arguments.length; i < len; i++)
    args.push(`arguments[${i}]`);

  const result = eval(`args[${i}]`);

  delete ctx.fn;

  return result;
};

Function.prototype.newBind = function (context) {
  const ctx = context || window,
    args = Array.prototype.slice.call(arguments, 1);

  function Fun() {}

  function bindFun() {
    const bindArgs = Array.prototype.slice.call(arguments);

    return ctx.apply(
      this instanceof Fun ? this : context,
      args.concat(arguments)
    );
  }

  Fun.prototype = this.prototype;
  bindFun.prototype = new Fun();

  return bindFun;
};

Function.prototype.newApply = function (context, arr) {
  const ctx = context || window;
  let result;

  if (!arr) {
    result = ctx.fn();
  } else {œ
    const args = [];

    for (let i = 0, len = arguments.length; i < len; i++) {
      args.push(`arguments[${i}]`);
    }

    result = eval(`ctx.fn(${args})`);
  }

  delete ctx.fn;
  return result;
};
