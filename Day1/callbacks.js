"use strict";


/**
 * Created by dennisschmock on 30/01/2017.
 */
let names = ["Dennis", "Lise", "adsfdsa", "Dennis", "DianaDiana"];

//Filter
let names2 = names.filter((name) => {
        return name.length > 6;

    }
);


//Maps
let rows = names.map((name) => {
    return '<td>' + name + '</td>';
});

//Reduce
let rowsStr = rows.join(' ');
console.log(rowsStr);
let table = `<table><tbody>${rowsStr}</tbody>`;
console.log(names);
console.log(names2);
console.log(table);
let something = `<table><tr><td>

</td></tr></table>`

let myFilter = function(){

};