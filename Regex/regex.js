var regexp = /mahmudul/i
var regexp2 = new RegExp('Mahmudul', 'gim')

// Test, check if the string or character exist
console.log(regexp.test('Mahmudul Hasan')); // output: true

// Search
let regex3 = /in/i
let data = "Mango grows in Bangladesh"
console.log(data.search(regex3)); //output: 12

// match, single
let regex4 = /world/i
let data5 = "Hello World"
// for single match, show index and more info
console.log(data5.match(regex4)); //output: [ 'World', index: 6, input: 'Hello World', groups: undefined ]

// match, multiple
let regex5 = /Hello/ig
let data6 = "Hello World, Bangladesh. Hello Guys. Nice to meet you"
console.log(data6.match(regex5)); //output: [ 'Hello', 'Hello' ]

//replace 
let data7 = "Hello World, Bangladesh. Hello Guys. Nice to meet you"
let replaced = data7.replace(/H.+l/, 'Greetings')
console.log(replaced);

//
let r = /Hello\s(Bangladesh).+?(you)/gi;
let result = r.exec("Hello World, Bangladesh. Hello Guys. Nice to meet you")
console.log(result)

