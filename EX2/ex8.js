/**
 * Created by dennisschmock on 16/02/2017.
 */
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

};



module.exports = f;
