/**反转链表 */

/**递归 */
// function reverseList(head) {
//   if (head === null || head.next === null) return head;
//   let res = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return res;
// }

/**循环 */
function reverseList(head) {
  let cur = head;
  let tmp;
  let pre = null;

  while (cur !== null) {
    tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }

  return (head = pre);
}

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let h1 = new ListNode(1);
let n2 = new ListNode(2);
let n3 = new ListNode(3);
let n4 = new ListNode(4);

h1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(reverseList(h1));
