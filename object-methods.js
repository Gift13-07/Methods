let number={
    even: 50
};
Object.freeze(number);
number.even= 80;
console.log(number.even)

let value={
    x:1,
    y:3,
    a:9
}
let key={
    x:4,
    b:10,
    a:20
}
let valuekey= Object.assign(value, key);
console.log(value)
console.log(valuekey)

let pair= {
    name: 'Gift'
};
let description = Object.getOwnPropertyDescriptor(pair, 'name');
console.log(description.configurable);
console.log(description.value)
