// Function
// - fundamental building block in the progarm
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
//function name(param1, param2) {body... return; }
//one function === one thing
//naming: doSomething, command, verb
//e.g. createCardAndPoint -> createCard, createPoint
//function is object in JS
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');

// 2. Parameters 
//premitive parametrs : passed by value 
// object parameters: passed by reference
function changeName (obj) {
    obj.name = 'coder' ;
}
const ellie = { name: 'ellie'};
changeName(ellie);
console.log(ellie);

//3. DEfault parametera (addedd in ES6)
function showMessage(messange, from = 'unknown') {
    console.log('${message} by ${form}');
}
showMessage('Hi!');

//4. Rest parameters (added in ES6)
function printAll(...args) {
    for (let i = 0; i< args.length; i++) {
        console.log(args(i));
    }
}
printAll('dream', 'coding', 'ellie');

//5.Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello':
    console.log(Message): /local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    console.log(childMessage);
}
printMessage();
//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log('sum: ${sum(1, 2)}');




