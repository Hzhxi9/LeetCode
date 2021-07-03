// function isPalindrome(head) {
//   let arr = [],
//     cur = head;

//   while (cur !== null) {
//     arr.push(cur.val);
//     cur = cur.next;
//   }

//   for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
//     if (arr[i] !== arr[j]) return false;
//   }

//   return true;
// }

function isPalindrome(head) {
  let arr = [],
    cur = head;

  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }

  while (head !== null) {
    if (arr[arr.length - 1] !== head.val) return false;
    head = head.next;
    arr.pop();
  }

  return true;
}

// function reverseList(head) {
//   if (head === null || head.next === null) return head;
//   const res = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return res;
// }

function reverseList(head) {
  let cur = head,
    tmp,
    pre = null;

  while (cur !== null) {
    tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  return pre
}

const h1 = require("./ListNode");

console.log(reverseList(h1));
