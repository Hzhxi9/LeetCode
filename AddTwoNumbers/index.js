/**
 * 两数相加
 *
 * 题目描述
 * 给你两个非空的链表，表示两个非负的整数，他们每个数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字
 * 请你将两个数相加，并以相同形式返回一个表示和的链表
 * 你可以假设除了数字0之外，这两个数都不会以0开头
 *
 * 示例1:
 * 输入: l1 = [2,4,3], l2 = [5,6,4]
 * 输出: [7,0,8]
 * 解释: 342 + 465 = 807
 *
 * 示例2:
 * 输入: l1 = [0], l2 = [0]
 * 输出: [0]
 *
 * 示例3:
 * 输入: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * 输出: [8,9,9,9,0,0,0,1]
 *
 * 提示:
 * 1. 每个链表中的节点数在范围[1,100]内
 * 2. 0 <= Node.val <= 9
 * 3. 题目数据保证列表表示的数字不含前导零
 *
 * 思路分析
 * 1. 建立一个表示进位的变量
 * 2. 建立一个新链表，把输入的两个链表从头往后同时处理，每两个相加
 * 3. 将相加的结果加上进位变量，作为一个新节点到新链表的后面，并更新进位值
 * 4. 使用变量跟踪进位，并从包含最低有效位的标头开始模拟逐位相加的过程
 * 5. 每个节点都包含一个数字，并且数字按位逆序存储
 * 6. 首先先取出'+'左右两边两个数的最低位，其次求出他们的和并作为输出结果的最低位，并考虑将进位加入代码中
 * 7. 如果值不存在时，将其设置为0，然后在进行相加即可
 */

/**
 *  定义单链表
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  /**定义进位数 相加>=10 (1或0) */
  let carry = 0;
  /**初始化ListNode 用来不停增加链表节点 */
  const dummy = new ListNode(-1);
  /**第一次挂载 */
  let cur = dummy;
  /**
   * 判断存在l1,l2,carry时, 进入循环
   * 判断carry是为了防止存在进位时需要前置
   */
  while (l1 || l2 || carry) {
    /**相加l1,l2,carry得到ListNode的val值 */
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    /**获取进位数 */
    carry = Math.floor(sum / 10);
    /**
     *  s只取个位数
     *  将本次结果挂载到临时NodeList
     */
    cur.next = new ListNode(sum % 10);
    /**如果要继续挂载链表，需要将当前的指针移动到 next 上 */
    cur = cur.next;

    /**遍历l1,l2链表 */
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  return dummy.next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @returns {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  /**初始化ListNode 用来不停增加链表节点 */
  let resNode = new ListNode(-1);
  /**第一次挂载 */
  let result = resNode;
  /**进位数 相加>=10 (1或0) */
  let tmp = 0;
  /**
   * 判断存在l1或者l2或者tmp时, 进入循环
   * 判断tmp的目的是防止最后还有一位进位需要前置
   */
  while (l1 || l2 || tmp) {
    /**需要判断 l1 是否 null */
    let val1 = l1 ? l1.val || 0 : 0;
    /**需要判断 l2 是否 null */
    let val2 = l2 ? l2.val || 0 : 0;

    /**l1+l2+进位值 得到 NodeList的val值 */
    let sum = val1 + val2 + tmp;
    /**判断本次相加是否需要进位 */
    tmp = sum >= 10 ? 1 : 0;
    /**当前位只取个位数 */
    sum = sum % 10;
    /**遍历链表 */
    if (l1) l1 = l1.next;
    /**遍历链表 */
    if (l2) l2 = l2.next;
    /**将当前结果挂到临时的 node 上 */
    resNode.next = new ListNode(sum);
    /**如果要继续挂载链表，需要将当前的指针移动到 next 上 */
    resNode = resNode.next;
  }

  /**result 是 resNode, resNode.next 才是最终结果 */
  return result.next;
};

const l1_1 = new ListNode(6);
const l1_2 = new ListNode(4);
const l1_3 = new ListNode(6);
l1_1.next = l1_2;
l1_2.next = l1_3;

const l2_1 = new ListNode(5);
const l2_2 = new ListNode(6);
const l2_3 = new ListNode(4);
l2_1.next = l2_2;
l2_2.next = l2_3;

const input1 = l1_1;
const input2 = l2_1;

addTwoNumbers(input1, input2);
