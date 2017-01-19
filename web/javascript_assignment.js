/**
 * Created by Lana on 1/19/2017.
 */
//homework part 1 - for every click, make it say hello to console

//tells console to say hello
function sayHello(event) {
    console.log("hello")
}
//creates button and calls for sayHello Function
var formButton1 = $('#button1');
formButton1.on("click", sayHello);

//Part two - concatenate fields into box three
function calculate(event) {
    console.log('#field1' + '#field2');
}

var formButton2 = $('#button2');
formButton2.on("click", calculate);

//part 3
function hideFunction(event) {
    $('#paragraphToHide');
}

var formButton3 = $('#button3');
formButton3.on("click", hideFunction);





