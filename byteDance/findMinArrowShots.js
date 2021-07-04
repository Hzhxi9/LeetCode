function findMinArrowShots(points) {
  if (!points.length) return 0;
  points.sort((a, b) => a[1] - b[1]);

  let cnt = 1,
    resArr = [points[0]];

  let cur, last;

  for (let i = 1, len = points.length; i < len; i++) {
    cur = points[i];
    last = resArr[resArr.length - 1];

    if (cur[0] > last[1]) {
      resArr.push(cur);
      cnt++;
    }
  }
  return cnt;
}
