//Object 에서 키가 문자열로 변환됨
let obj = {};
obj[1] = "숫자키";
console.log(obj["1"]); // '숫자키' (자동으로 문자열 변환)
console.log(typeof Object.keys(obj)[0]); //string

let map = new Map();
map.set(1, "숫자키");
console.log(map.get(1));
console.log(typeof map.get(1));
console.log(typeof [...map.keys()][0]); //number

/*
Map의 키 타입을 직접 확인하려면 keys()를 사용해야한다.
map.keys()는 키들을 모아놓은 이터레이터(iterator) 객체이므로,
이를 배열로 변환한 후 첫 번째 키의 타입을 확인하면 된다.
*/
