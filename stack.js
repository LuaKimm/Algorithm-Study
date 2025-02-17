//js 배열로 스택 구현

export default class stack {
  constructor() {
    //item들을 받을 배열 생성
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }
  pop(item) {
    this.items.push(item);
  }

  peek() {
    if (this.items.length === 0) {
      return null;
    }
    //items배열의 마지막 item만 가져와준다.
    // pop()과 다르게 배열에서 아이템이 빠지는 것이 아닌 유지된 채로 마지막 값만 받아와줌
    return this.items[this.items.length - 1];
  }
  getSize() {
    return this.items.length;
  }
  isEmpty() {
    return this.getSize() === 0;
  }
}

//배열 이용하지 않고 stack 구현
//연결 리스트 방식으로 구현
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  isEmpty() {
    return this.top === null;
  }
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) return -404;
    return this.top.data;
  }

  display() {
    if (this.isEmpty()) return;
    let curr = this.top;
    process.stdout.write("(TOP)");
    while (curr.next) {
      process.stdout.write(`${curr.data}--->`);
      curr = curr.next;
    }
    process.stdout.write(`${curr.data}\n`);
  }
}
