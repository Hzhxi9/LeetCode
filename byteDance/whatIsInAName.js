function whatIsInAName(collection, source) {
  const arr = [];
  // 只修改这一行下面的代码
  const result = collection.reduce((acc, cur) => {
    let flag = true;
    for (const key in source) {
      if (source[key] !== cur[key]) flag = false;
    }
    if (flag) acc.push(cur);
    return acc;
  }, []);

  console.log(result);

  arr.push(...result);

  // 只修改这一行上面的代码
  return arr;
}

console.log(
  whatIsInAName(
    [
      { first: 'Romeo', last: 'Montague' },
      { first: 'Mercutio', last: null },
      { first: 'Tybalt', last: 'Capulet' },
    ],
    { last: 'Capulet' }
  )
);

console.log(whatIsInAName([{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }], { apple: 1, bat: 2 }));
