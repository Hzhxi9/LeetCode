/**
 *  替换空格
 *
 *  题目
 *  请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 *  例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy。
 */

const replaceSpace = str => {
  return str.split(" ").join("%20");
};

const replaceSpace = str => {
  return str.replace(/\s/g, "%20");
};

/**允许出现多个空格，多个空格用一个20%替换 */
const replaceMoreSpace = str => {
  return str.replace(/\s+/g, "%20");
};

console.log(replaceMoreSpace("We Are  Happy"));
