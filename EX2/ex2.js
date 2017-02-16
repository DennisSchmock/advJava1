/**
 * Created by dennisschmock on 16/02/2017.
 */

let evens = [2,4,6,8,10,12];

odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)


var odds = evens.map(v => {
   console.log( v+1)
});
