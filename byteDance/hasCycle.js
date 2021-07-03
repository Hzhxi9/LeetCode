/**环形链表 */
function hasCycle(head) {
  if (head === null || head.next === null) return false;
  let slow = head,
    fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
  }
  
let h1 = new ListNode(3);
let n2 = new ListNode(2);
let n3 = new ListNode(0);
let n4 = new ListNode(-4);

h1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(hasCycle(h1))   