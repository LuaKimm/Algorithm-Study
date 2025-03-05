//얕은 복사는 한 단계까지만 복사하는 것
// 깊은 복사는 객체에 중첩되어 있는 객체까지 모두 복사

const o = { x: { y: 1 } };

//얕은 복사
const c1 = { ...o };
console.log(c1 === o);
console.log(c1.x === o.x);

var person = {
  name: "Lee",
};

//참조값을 복사(얕은 복사). copy와 person은 동일한 참조값
var copy = person;

//copy와 person 은 동일한 객체를 참조한다.
console.log(copy === person); //true

//copy를 통해 객체 변경
copy.name = "Kim";

//person을 통해 객체를 변경
person.address = "Seoul";

//copy와 person은 동일한 객체를 가리킨다.
//어느 한쪽에서 객체를 변경하면 서로 영향을 주고받는다.
console.log(person);
console.log(copy);
