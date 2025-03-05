const words = ["hello world", "Javascript is awesome"];

const mapped = words.map((sentence) => sentence.split(" "));
console.log(mapped); //중첩 배열 생김 [ [ 'hello', 'world' ], [ 'Javascript', 'is', 'awesome' ] ]

const flatMapped = words.flatMap((sentence) => sentence.split(" "));
console.log(flatMapped); // [ 'hello', 'world', 'Javascript', 'is', 'awesome' ]
