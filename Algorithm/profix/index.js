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
    if (head.val !== arr[arr.length - 1]) return false;
    head = head.next;
    arr.pop();
  }
  return true;
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let h1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(2);
let n4 = new ListNode(1);

h1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(isPalindrome(h1));
