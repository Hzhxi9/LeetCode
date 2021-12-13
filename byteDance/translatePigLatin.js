function translatePigLatin(str) {
  const consonantReg = /a|e|i|o|u/g;

  const first = str[0],
    second = str[1],
    mid = Math.floor(str.length / 2);

    const isMid = 

  if (consonantReg.test(first)) {
    return str + 'way';
  } else if (consonantReg.test(str[mid])) {
    return str.slice(mid) + str.slice(0, mid) + 'ay';
  } else if (!consonantReg.test(first) && consonantReg.test(second) && consonantReg.test(str)) {
    return str.slice(1) + str.slice(0, 1) + 'ay';
  } else if (!consonantReg.test(first) && !consonantReg.test(second) && consonantReg.test(str)) {
    return str.slice(2) + str.slice(0, 2) + 'ay';
  } else if (!consonantReg.test(str)) {
    return str + 'ay';
  }

  return str;
}

console.log(translatePigLatin("california"))