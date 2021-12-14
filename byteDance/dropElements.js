/**根据参数删除数组元素 */
function dropElements(arr, func) {
  let i = 0,
    len = arr.length;
    
  while(i < len) {
    const item = arr[i]
    if (func(item)) return arr.slice(i)
    i++
  }
  return []
}

console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
); // [1, 0, 1]
console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
); // [3, 4]
