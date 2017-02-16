require('./css/main.css');
var _ = require('lodash');
import 'bootstrap/dist/css/bootstrap.css';

const name = 'Scotch.io';

//setTimeout(() => alert(`Hello there from ${name}`), 300);

//Constructer function
function Person(fn, ln, s) {
    this.firstName = fn;
    this.lastName = ln;
    this.favoriteSport = s;
}

//Array with objects
const persons = [
    new Person("Kurt", "Wonnegut", "Socker"),
    new Person("Jan", "Peterson", "Hockey"),
    new Person("Jane", "Peterson", "Skating"),
    new Person("John", "Hansen", "Socker"),
];


function createTableFromArray(arrayOfObjects) {
    //Get headers from function
    let headers = _.keys(new Person());

    //Use map and startCase to case the words
    var headersCased = headers.map((object) => {
        return _.startCase(object)
    });

    let outputTable = `<Table class="table table-striped"><thead><tr>`
    headersCased.forEach((header) => {
        outputTable = outputTable +
                `<th>${header}</th>`
    });

    outputTable = outputTable +
            `</tr></thead><tbody>`;

    //Using literals and a nested foreach for building the table. Should have used the MAP function instead, but works
    arrayOfObjects.forEach((object)=>{
        outputTable = outputTable + `<tr>`
        headers.forEach((header)=>{
            outputTable = outputTable + `<td>${object[header]}</td>`
        })
        outputTable = outputTable + `</tr>`


    });

    outputTable = outputTable + `</tr></tbody></table>`;
    return outputTable;
}

const table = createTableFromArray(persons);
document.getElementById('my-table').innerHTML = table;

