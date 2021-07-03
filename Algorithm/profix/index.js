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

// function isPalindrome(head) {
//   let arr = [],
//     cur = head;

//   while (cur !== null) {
//     arr.push(cur.val);
//     cur = cur.next;
//   }

//   while (head !== null) {
//     if (arr[arr.length - 1] !== head.val) return false;
//     head = head.next;
//     arr.pop();
//   }

//   return true;
// }

function reverse(head) {
  if (head === null || head.next === null) return head;
  const res = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return res;
}


function isPalindrome(head) {
  let slow = head,
    fast = head;

  while (fast.next.next !== null && slow.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let rev = reverse(slow.next);

  while (rev !== null) {
    if (rev.val !== head.val) return false;
    rev = rev.next;                   
    head = head.next;
  }

  return true;
}


const h1 = require("./ListNode");

console.log(isPalindrome(h1));
