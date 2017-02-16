/**
 * Created by dennisschmock on 16/02/2017.
 */

//Implementation using literal templates
function f(x, y, ...rest) {
    let count = 1;
    let message = {firstPart: 'rest value', lastPart: 'is a', initial: 2};

    let returnMessage =
        `Sum: ${message.initial + rest.length}
${message.firstPart} 1 ${message.lastPart} ${x.constructor.name}
${message.firstPart} 2 ${message.lastPart} ${y.constructor.name}
`
    rest.forEach((value) => {
        returnMessage = returnMessage + `${message.firstPart} ${message.initial + count} ${message.lastPart} ${value.constructor.name}
`;
        count++;
    })
    return returnMessage;

}

//Testing
console.log(f(1, 2, 3, 4, 5));
console.log(f(5, 2, true, 2, "hello World", [1, 2, 3], new Date(), {}));


//Part B - testing
var rest = [true,2,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log(f(5,2,...restParams));

//Part C - testing
var chars = [... f(5,2,...restParams)];
console.log(chars);