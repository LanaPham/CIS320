var url = "api/name_list_get";
function updateTable() {
    $.getJSON(url, null, function (json_result) {
            for (var i = 0; i < json_result.length; i++) {
                $("#datatable").append("<tr><td>" + json_result[i].id + "</td><td>"
                    + json_result[i].first + " " + json_result[i].last + "</td><td>"
                    + json_result[i].email + "</td><td>"
                    + json_result[i].phone + "</td><td>"
                    + json_result[i].birthday + "</td></tr>");
            }
            console.log("Done");
        }
    );
}
updateTable();
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
    //clears the boxes when reopened
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

var formSaveButton = $('#saveChanges');
formSaveButton.on("click", saveButton);

//Step 5 - add function to "save changes" button
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
    //  year/mm/dd
    var inputBirthday = /^[0-9]{4}\-[0-9]{2}\-[0-9]{2}$/;

    var valid_form = true;

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
        valid_form = false;
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
    console.log("Save button was selected");

    if(valid_form) {
        var url = "api/name_list_edit";
        var fieldValueFirstName = $("#firstName").val();
        var fieldValueLastName = $("#lastName").val();
        var fieldValueEmail = $("#email").val();
        var fieldValuePhone = $("#phoneField").val();
        var fieldValueBirthday = $("#birthday").val();

        var dataToServer = { firstName : fieldValueFirstName, lastName: fieldValueLastName, email : fieldValueEmail, phoneField: fieldValuePhone, birthday : fieldValueBirthday} ;

        $.post(url, dataToServer, function (dataFromServer) {
            console.log(dataFromServer);
            console.log("Finished calling servlet.");
            $('#myModal').modal('hide');
            //how to clear body of the table - could readd in the columns/rows, or remove individual rows
            $('#datatable tbody').remove();
            updateTable();
        });
    }
    else {
        valid_form = false;
        console.log("Not all fields were valid");
    }
}