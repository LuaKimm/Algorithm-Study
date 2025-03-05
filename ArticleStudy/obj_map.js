//object
let myObj = {}; //빈 객체 생성

//값 추가
myObj["name"] = "철수"; //[]동적 키 (코드를 실행할 때(=런타임) 값이 결정된다는 의미)
// 키가 코드 작성할 때 정해져 있는 것이 아니라, 실행할 때 만들어진다.
myObj.age = 10;

//값 가져오기
console.log(myObj.name); //철수
console.log(myObj["age"]); //10

//값 삭제
delete myObj.age;

console.log(myObj); //{ name: '철수' }

//크기 확인
console.log(Object.keys(myObj).length); //1

let myMap = new Map(); //빈 맵 생성

// 값 추가 (set)
myMap.set("name", "철수");
myMap.set("age", 10);

// 값 가져오기 (get)
console.log(myMap.get("name")); //철수
console.log(myMap.get("age")); //10

//값 삭제 (delete)
myMap.delete("age");

console.log(myMap); //Map(1) { 'name' => '철수' }

console.log(myMap.size); //1
