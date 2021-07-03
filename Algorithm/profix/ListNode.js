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
  

  module.exports = h1