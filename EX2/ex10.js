/**
 * Created by dennisschmock on 16/02/2017.
 */


//A - iterator
function makeIterator(array) {
    var nextIndex = 0;

    return {
        next: function () {
            return nextIndex < array.length ?
                {value: array[nextIndex++], done: false} :
                {done: true};
        }
    };
}

var it = makeIterator(['yo', 'ya']);
console.log(it.next().value); // 'yo'
console.log(it.next().value); // 'ya'
console.log(it.next().done);  // true

//A - generator


//B - implemented with random number generator

function* makeNames() {

    let firstNames = ["Lars", "Jan", "Ida", "Tine", "Thomas"];
    let lastNames = ["Mortensen", "Peterson", "Obama", "Jensen", "Hansen"];
    while (true) {
        yield name = `Firstname: ${firstNames[Math.floor(Math.random() * 5)]} Lastname: ${lastNames[Math.floor(Math.random() * 5)]}`
    }
}


let index = 0;
for (let name of makeNames()) {
    console.log(name);
    if (index++ === 50) {
        break;
    }
}
