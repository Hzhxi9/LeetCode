/**前序遍历判断回文链表 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**数组 */
function isPalindrome(head) {
  let arr = [],
    cur = head;

  while (cur !== null) {
    arr.push(cur.val);
    cur = cur.next;
  }
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    if (arr[i] !== arr[j]) return false;
  }
  return true;
}

/**栈 */
// function isPalindrome(head) {
//   let arr = [],
//     cur = head;
//   while (cur !== null) {
//     arr.push(cur.val);
//     cur = cur.next;
//   }

//   while (head !== null) {
//     if (head.val !== arr[arr.length - 1]) return false;
//     arr.pop();
//     head = head.next;
//   }

//   return true;
// }

/**快慢指针 */
// function isPalindrome(head) {
//   let slow = head,
//     fast = head;

//   while (fast.next.next !== null && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }

//   let rev = reverse(slow.next);

//   while (rev !== null) {
//     if (head.val !== rev.val) return false;
//     rev = rev.next;

//     head = head.next;
//   }

//   return true;
// }

function reverse(head) {
  if (head === null || head.next === null) return head;
  let res = reverse(head.next);
  head.next.next = head;
  head.next = null;
  return res;
}

let h1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(2);
let n4 = new ListNode(1);

h1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(isPalindrome(h1));
