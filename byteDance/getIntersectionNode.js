
/** 相交链表 */

function getIntersectionNode(headA, headB) {
  let lastHeadA = null,
    lastHeadB = null,
    originHeadA = headA,
    origenHeadB = headB;

  if (!headA || !headB) return null;

  while (true) {
    if (headB === headA) return headB;

    if (headA && headA.next === null) {
      lastHeadA = headA;
      headA = origenHeadB;
    } else {
      headA = headA.next;
    }

    if (headB && headB.next === null) {
      lastHeadB = headB;
      headB = originHeadA;
    } else {
      headB = headB.next;
    }

    if (lastHeadA && lastHeadB && lastHeadB !== lastHeadA) return null;
  }
}
