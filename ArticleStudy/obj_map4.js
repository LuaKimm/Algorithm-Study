//Object 반복

//object는 object.keys() 와 for-in 방법 사용
let obj = { name: "철수", age: 10 };
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});

//Map 반복
//forEach, for of 기본 지원
let map = new Map();
map.set("name", "철수");
map.set("age", 10);

map.forEach((value, key) => {
  console.log(key, value);
});

// 여기서 질문!
// object와 Map은 그럼 반복 방법을 바꿔서 사용할 수 없을까요?

/*
정답은 세모?
object를 forEach처럼 사용하기
-object.entries() 사용하기

let obj = { name: "철수", age: 10 };

// Object를 Map처럼 forEach 사용하기
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

Map을 object 처럼 바꾸려면
-> 일반 객체로 변환 후 사용 가능

 Object.fromEntries(map)

let map = new Map();
map.set("name", "철수");
map.set("age", 10);

// Map을 Object로 변환 후 Object.keys() 사용
let mapToObject = Object.fromEntries(map);

Object.keys(mapToObject).forEach(key => {
  console.log(key, mapToObject[key]);
});

*/
