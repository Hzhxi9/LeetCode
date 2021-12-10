function spinalCase(str) {
  let i = 0,
    len = str.length,
    words = '';

  const result = [];

  if (/[A-Z]/.test(str[0])) {
    str = str.slice(0, 1).toLowerCase() + str.slice(1);
  }

  while (i < len) {
    let word = str[i];
    if (/[a-z]/.test(word)) {
      words += word;
    } else if (/\s|\_|\-/.test(word)) {
      result.push(words);
      words = '';
    } else if (/[A-Z]/.test(word)) {
      if (words) result.push(words);
      words = '';
      if (/[A-Z]/.test(word)) word = word.toLowerCase();
      words += word;
    }

    i++;
  }

  if (words.length) result.push(words);

  return result.join('-');
}

console.log(spinalCase('This Is Spinal Tap')); // this-is-spinal-tap
console.log(spinalCase('thisIsSpinalTap')); // this-is-spinal-tap
console.log(spinalCase('The_Andy_Griffith_Show')); // the-andy-griffith-show
console.log(spinalCase('Teletubbies say Eh-oh')); // teletubbies-say-eh-oh
console.log(spinalCase('AllThe-small Things')); // all-the-small-things
