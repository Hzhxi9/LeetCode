/**计算找零 */

// 货币单位 Unit	面值
// Penny	0.01 美元（PENNY）
// Nickel	0.05 美元（NICKEL）
// Dime	0.1 美元（DIME）
// Quarter	0.25 美元（QUARTER）
// Dollar	1 美元（ONE）
// Five Dollars	5 美元（五）
// Ten Dollars	10 美元（TEN）
// Twenty Dollars	20 美元（TWENTY）
// One-hundred Dollars	100美元（ONE HUNDRED）

// 如果收银机內的金额少于应找回的零钱数，或者你无法返回确切的数目时，返回 {status: "INSUFFICIENT_FUNDS", change: []}。

// 如果收银机內的金额恰好等于应找回的零钱数，返回 {status: "CLOSED", change: [...]}，其中 change 的属性值就是收银机內的金额。

// 否则，返回 {status: "OPEN", change: [...]}，其中 change 键值是应找回的零钱数，并将找零的面值由高到低排序。

const CLOSED = 'CLOSED';
const OPEN = 'OPEN';
const INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS';

/**
 *
 * @param {*} price 售价
 * @param {*} cash 支付金额
 * @param {[string, number][]} cid 收银机內的金额
 * @returns {{status: string, change: [string, number][]}}
 */
function checkCashRegister(price, cash, cid) {
  const cidMap = new Map(cid);
  
  const map = new Map([
    ['ONE HUNDRED', 10000],
    ['TWENTY', 2000],
    ['TEN', 1000],
    ['FIVE', 500],
    ['ONE', 100],
    ['QUARTER', 25],
    ['DIME', 10],
    ['NICKEL', 5],
    ['PENNY', 1],
  ]);

  const result = [],
    register = {};

  let total = 0;
  for (const [n, p] of cidMap){ 
    total += p * 100;
    register[n] = p * 100
  };

  let change = (cash - price) * 100;

  console.log(change, '==');

  if (change === total) return { status: CLOSED, change: cid };

  if (change > total) return { status: INSUFFICIENT_FUNDS, change: [] };

  for (const [t, v] of map) {
    let value = 0;
    while (register[t] > 0 && change >= v) {
      change -= v;
      register[t] -= v;
      value += v;
    }
    if (value > 0) result.push([t, value / 100]);
  }

  if (change > 0) return { status: INSUFFICIENT_FUNDS, change: [] };

  return { status: OPEN, change: result };
}

const result = checkCashRegister(19.5, 20, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100],
]);

console.log(result); //  {status: "OPEN", change: [["QUARTER", 0.5]]}。

console.log(
  checkCashRegister(3.26, 100, [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100],
  ])
); // {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.5],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ['PENNY', 0.01],
//     ['NICKEL', 0],
//     ['DIME', 0],
//     ['QUARTER', 0],
//     ['ONE', 0],
//     ['FIVE', 0],
//     ['TEN', 0],
//     ['TWENTY', 0],
//     ['ONE HUNDRED', 0],
//   ])
// );
