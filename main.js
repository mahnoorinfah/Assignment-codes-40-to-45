"use strict";
//Assignment no 41
/*Magician:Make a array of magician's names. Pass the array to a function called show_magicians(),which
prints the name of each magician in  the array. */
Object.defineProperty(exports, "__esModule", { value: true });
let magician = ['Suhani', 'Jakky', 'Lois', 'Herry Potter'];
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
show_magicians(magician);
//Assignment no 42
/* Great Magician:Start with a copy of your program from exercise 41.Write a function called make_great()that
modifies the array of magicians by adding the phrase the Great to each magician's name. Call show_magicians()
to see that the list  has actually been modified.  */
let magiciann = ['Suhani', 'Jakky', 'Lois', 'Herry Potter'];
function make_great(magiciannArray) {
    for (let i = 0; i < magiciannArray.length; i++) {
        magiciann[i] = 'the Great ' + magiciannArray[i];
    }
}
function show_magicianns(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magiciann);
show_magicianns(magiciann);
//Assignment no 43
/* Unchanged Magicians: Start with your work from exercise 42. Call the function make_great() with a copy
of the array of magicians' names. Because the original array will be unchanged,return  the new array and store
it in a seperate array.Call show_magicians() with each array to show that you have one array of the original
names and one array with the Great  added to each magician's name.*/
let Magician = ['Suhani', 'Jakky', 'Lois', 'Herry Potter'];
function copyArray(arry) {
    return [...arry];
}
function Make_great(magiciannArray) {
    for (let i = 0; i < magiciannArray.length; i++) {
        magiciannArray[i] = 'the Great ' + magiciannArray[i];
    }
}
function show_magician(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicanArray = copyArray(Magician);
make_great(copyMagicanArray);
console.log('\n\nThis is the original Array:');
show_magicianns(magiciann);
console.log('\n\nThis is the modified copy of array:');
show_magicianns(magiciann);
//Assignment no 44
/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.The function should
 have one parameter that collects as many items as the function call provides, and it should print a summary
 of the sandwich that is being ordered.Call the function three times, using a different  number of arguments
 each time. */
function sandwich(items) {
    console.log("Making your sandwich with:");
    items.forEach(element => console.log("- " + element));
    console.log("Enjoy your sandwich !");
}
sandwich(['Cheese', 'Pepperoni', 'Cabbage']);
sandwich(['Mayonase', 'Egg', 'Pepper']);
sandwich(['Corn', 'Chicken', 'Carrot']);
//Assignment no 45
/*Cars:Write a function that store information about a car in an Object.The function should always receive a manufacturer and amodel name.
It should then accept an arbitrary number of keyword arguments.Call the function with the required information and two other name-value pairs,
such as a color or an optional feature.Print the Object that's returned to make sure all the information was  stored correctly. */
function infoOfCar(manufacturer, modelName, ...extraOption) {
    let Carinfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return Carinfo;
}
;
let answer = infoOfCar("Toyota", "Civic", { color: 'brown' }, { features: ['Navigation', 'Power window'] });
console.log(answer);
