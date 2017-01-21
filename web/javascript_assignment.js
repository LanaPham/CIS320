/**
 * Created by Lana Pham on 1/19/2017.
 * CIS 320 8:00am - 9:30am
 */
//Part 1 - for every click, make it say hello to console
function sayHello(event) {
    console.log("hello")
}

var formButton1 = $('#button1');
formButton1.on("click", sayHello);

//Part two - concatenate fields into box three
function calculate(event) {
    var num = document.getElementById("field1").value;
    var num2 = document.getElementById("field2").value;
    var results = parseInt(num) + parseInt(num2);
    document.getElementById("field3").value = results;
}

var formButton2 = $('#button2');
formButton2.on("click", calculate);

//part 3 - Toggle the paragraph to be hidden and not hidden.
function toggleMessage(event) {
    $('#paragraphToHide').toggle();
}

var formButton3 = $('#button3');
formButton3.on("click", toggleMessage);

//part 4 - regular expression phone number
function validation(event) {
    var input = $('#phoneField').val();
    var phoneNum = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;

    if (phoneNum.test(input)) {
        console.log("Ok");
    }
    else {
        console.log("Bad");
    }
}

var formButton4 = $('#button4');
formButton4.on("click", validation);


//part 5 - JSON
function jsonFunction (event) {

    //creates an empty object
    var formObject = {};
    formObject.firstName = $("#firstName").val();
    formObject.lastName = $("#lastName").val();
    formObject.email = $("#email").val();

    var jsonString = JSON.stringify(formObject);

    console.log(jsonString);
}

var formButton5 = $('#button5');
formButton5.on("click", jsonFunction);







