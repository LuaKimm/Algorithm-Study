function hanoi(cnt, from, temp, to, result) {
  //Base case:If no disks to move, return
  if (cnt === 0) {
    return;
  }

  //Move cnt-1 disks from 'from' to 'temp' using 'to' as auxiliary.
  hanoi(cnt - 1, from, to, temp, result);
  //Move the cnt-th disk from 'from' to 'to'
  result.push(`${cnt}:${from} -> ${to}`);
  //Move the cnt-1 disks from 'temp' to 'to' using 'from' auxiliary.
  hanoi(cnt - 1, temp, from, to, result);
}
const count = 4;
const result = [];
hanoi(count, 1, 2, 3, result);
console.log(result.join("\n"));
