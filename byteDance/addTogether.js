/**可选参数 */
const isNumber = target => typeof target === 'number'

function addTogether() {
  const args = [...arguments];
  if (!args.every(arg => isNumber(arg))) return void 0;
  if (args.length > 1) return args.reduce((acc, cur) => acc + cur, 0);
  return function (...args2) {
    if (!args2.every(arg => isNumber(arg))) return void 0; 
    const _args = [...args, ...args2];
    return _args.reduce((acc, cur) => acc + cur, 0);
  };
}

// console.log(addTogether(2, '3')); // 5;
console.log(addTogether(5)([3])); // 12;
console.log(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ')); // undefined
