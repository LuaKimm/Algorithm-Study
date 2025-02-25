//변경 불가능한 원시 타입 값
//다른 값과 중복 되지 않는 유일무이한 값
//이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용

var key = Symbol("key");
console.log(typeof key);

//객체 생성
var obj = {};

//이름이 충돌할 위험이 없는 유일무이한 값인 심벌을 프로퍼티 키로 사용한다.
obj[key] = "value";
console.log(obj[key]);
