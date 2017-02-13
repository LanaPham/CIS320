var url = "api/name_list_get";

$.getJSON(url, null, function(json_result) {
        for (var i = 0; i < json_result.length; i++) {
            $("#datatable").append("<tr><td>" + json_result[i].id + "</td><td>"
            + json_result[i].first + " " + json_result[i].last + "</td><td>"
            + json_result[i].email + "</td><td>"
            + json_result[i].phone + "</td><td>"
            + json_result[i].birthday + "</td></tr>");

            //$("#datatable")[0].rows[0].remove(); // this removes the <th> which is not what I want
            //$("#datatable td:first").remove(); //this removes first cell which is ID
        }
        console.log("Done");
    }
);

// There's a button in the form with the ID "addItem"
// Associate the function showDialogAdd with it.
var addItemButton = $('#addItem');
addItemButton.on("click", showDialogAdd);

// Called when "Add Item" button is clicked
function showDialogAdd() {
    // Print that we got here
    console.log("Opening add item dialog");

    $('#id').val("");
    $('#firstName').val("");
    $('#lastName').val("");
    $('#email').val("");
    $('#phoneField').val("");
    $('#birthday').val("");

    //Removes the outline colored box and the glyphicon
    $('#firstNameDiv').removeClass("has-success").removeClass("has-error");
    $('#firstNameGlyph').removeClass("glyphicon-ok").removeClass("glyphicon-remove");

    $('#lastNameDiv').removeClass("has-success").removeClass("has-error");
    $('#lastNameGlyph').removeClass("glyphicon-ok").removeClass("glyphicon-remove");

    $('#emailDiv').removeClass("has-success").removeClass("has-error");
    $('#emailGlyph').removeClass("glyphicon-ok").removeClass("glyphicon-remove");

    $('#phoneFieldDiv').removeClass("has-success").removeClass("has-error");
    $('#phoneFieldGlyph').removeClass("glyphicon-ok").removeClass("glyphicon-remove");

    $('#birthdayDiv').removeClass("has-success").removeClass("has-error");
    $('#birthdayGlyph').removeClass("glyphicon-ok").removeClass("glyphicon-remove");

    // Show the hidden dialog
    $('#myModal').modal('show');
}

//Step 5 - add function to "save changes" button
var formSaveButton = $('#saveChanges');
formSaveButton.on("click", saveButton);

function saveButton() {
    var userInputFirstName = $('#firstName').val();
    var inputFirstName = /^([A-Za-z]{1,20})$/;

    var userInputLastName = $('#lastName').val();
    var inputLastName = /^([A-Za-z]{1,20})$/;

    var userInputEmail = $('#email').val();
    var inputEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    var userInputPhone = $('#phoneField').val();
    var inputPhone = /^([0-9]{3})[-]([0-9]{3})[-]([0-9]{4})$/;

    var userInputBirthday = $('#birthday').val();
    //http://www.mkyong.com/regular-expressions/how-to-validate-date-with-regular-expression/
    var inputBirthday = /^(0[1-9]|1[012])[/](0[1-9]|[12][0-9]|3[01])[/](19|20)\d\d$/;

    if (inputFirstName.test(userInputFirstName)) {
        // Set style for outline of form field

        $('#firstNameDiv').removeClass("has-error");
        $('#firstNameDiv').addClass("has-success");

        // Set the icon for the form field
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#firstNameGlyph').addClass("glyphicon-ok");

        // Put in the field used by screen readers
        $('firstNameStatus').val("success");
        console.log("First name is Ok");
    }
    else {
        $('#firstNameDiv').removeClass("has-success");
        $('#firstNameDiv').addClass("has-error");
        $('#firstNameGlyph').removeClass("glyphicon-ok");
        $('#firstNameGlyph').addClass("glyphicon-remove");
        $('firstNameStatus').val("error");
        console.log("First name is Bad");
    }

    if (inputLastName.test(userInputLastName)) {
        $('#lastNameDiv').removeClass("has-error");
        $('#lastNameDiv').addClass("has-success");
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').addClass("glyphicon-ok");
        $('lastNameStatus').val("success");
        console.log("Last name is ok");
    }
    else {
        $('#lastNameDiv').removeClass("has-success").addClass("has-error");
        $('#lastNameGlyph').removeClass("glyphicon-ok").addClass("glyphicon-remove");
        $('lastNameStatus').val("error");
        console.log("Last name is bad");
    }

    if (inputEmail.test(userInputEmail)) {
        $('#emailDiv').removeClass("has-error");
        $('#emailDiv').addClass("has-success");
        $('#emailGlyph').removeClass("glyphicon-remove");
        $('#emailGlyph').addClass("glyphicon-ok");
        $('emailStatus').val("success");
        console.log("Email is ok");
    }
    else {
        $('#emailDiv').removeClass("has-success").addClass("has-error");
        $('#emailGlyph').removeClass("glyphicon-ok").addClass("glyphicon-remove");
        $('emailStatus').val("error");
        console.log("Email is bad");
    }

    if (inputPhone.test(userInputPhone)) {
        $('#phoneFieldDiv').removeClass("has-error");
        $('#phoneFieldDiv').addClass("has-success");
        $('#phoneFieldGlyph').removeClass("glyphicon-remove");
        $('#phoneFieldGlyph').addClass("glyphicon-ok");
        $('phoneFieldStatus').val("success");
        console.log("phone is ok");
    }
    else {
        $('#phoneFieldDiv').removeClass("has-success").addClass("has-error");
        $('#phoneFieldGlyph').removeClass("glyphicon-ok").addClass("glyphicon-remove");
        $('phoneFieldStatus').val("error");
        console.log("phone is bad");
    }

    if (inputBirthday.test(userInputBirthday)) {
        $('#birthdayDiv').removeClass("has-error");
        $('#birthdayDiv').addClass("has-success");
        $('#birthdayGlyph').removeClass("glyphicon-remove");
        $('#birthdayGlyph').addClass("glyphicon-ok");
        $('birthdayStatus').val("success");
        console.log("Birthday is ok");
    }
    else {
        $('#birthdayDiv').removeClass("has-success").addClass("has-error");
        $('#birthdayGlyph').removeClass("glyphicon-ok").addClass("glyphicon-remove");
        $('birthdayStatus').val("error");
        console.log("Birthday is bad");
    }
    console.log("Save button was selected")

}
