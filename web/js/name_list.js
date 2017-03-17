var url = "api/name_list_get";
function updateTable() {
    $.getJSON(url, null, function (json_result) {
            for (var i = 0; i < json_result.length; i++) {
                $("#datatable").append("<tr><td>" + json_result[i].id + "</td><td>"
                    + json_result[i].first + "</td><td>"
                    + json_result[i].last + "</td><td>"
                    + json_result[i].email + "</td><td>"
                    + json_result[i].phone + "</td><td>"
                    + json_result[i].birthday + "</td>"
                    + "<td><button type='button' name='delete' class='deleteButton btn' value='" + json_result[i].id + "'>Delete</button></td>"
                    + "<td><button type='button' name='edit' class='editButton btn' value='" + json_result[i].id + "'>Edit</button></td></tr>");
            }
            console.log("Edit");
            var buttons = $(".editButton");
            buttons.on("click", editItem);

            console.log("Done");
            var buttons = $(".deleteButton");
            buttons.on("click", deleteItem);
        }
    );
}
updateTable();


function editItem(e) {
    console.debug("Edit");
    console.log("Edit button was selected");
    console.debug(e.target.value);

    // Print that we got here
    console.log("Opening add item dialog");

    var id = e.target.parentNode.parentNode.querySelectorAll("td")[0].innerHTML;
    var firstName = e.target.parentNode.parentNode.querySelectorAll("td")[1].innerHTML;
    var lastName = e.target.parentNode.parentNode.querySelectorAll("td")[2].innerHTML;
    var email = e.target.parentNode.parentNode.querySelectorAll("td")[3].innerHTML;
    var phoneField = e.target.parentNode.parentNode.querySelectorAll("td")[4].innerHTML;
    var birthday = e.target.parentNode.parentNode.querySelectorAll("td")[5].innerHTML;

    $('#id').val(id);
    $('#firstName').val(firstName);
    $('#lastName').val(lastName);
    $('#email').val(email);
    $('#phoneField').val(phoneField);
    $('#birthday').val(birthday);

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

//delete button
function deleteItem(e) {

        var url = "api/name_list_delete";
        var id = e.target.value;
        console.log("grabbing id:" + id);
        var dataToServer = { id : id};

        $.post(url, dataToServer, function (dataFromServer) {
            console.log("Data from Server:" + dataFromServer);
            console.log("Finished calling delete servlet.");
            //how to clear body of the table - could read in the columns/rows, or remove individual rows
            $('#datatable tbody').remove();
            updateTable();
        });

    console.debug("Delete");
    console.debug(e.target.value);
}

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
    var inputEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //var inputEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;



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
        valid_form = false;
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
        valid_form = false;
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
        valid_form = false;
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
        valid_form = false;
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
        valid_form = false;
    }
    console.log("Save button was selected");
    valid_form = true; //this is to temporaily pause the front end

    if(valid_form) {
        var url = "api/name_list_edit";
        var fieldValueId = $("#id").val();
        var fieldValueFirstName = $("#firstName").val();
        var fieldValueLastName = $("#lastName").val();
        var fieldValueEmail = $("#email").val();
        var fieldValuePhone = $("#phoneField").val();
        var fieldValueBirthday = $("#birthday").val();

        var dataToServer = { id: fieldValueId, firstName : fieldValueFirstName, lastName: fieldValueLastName, email : fieldValueEmail, phoneField: fieldValuePhone, birthday : fieldValueBirthday} ;

        $.post(url, dataToServer, function (dataFromServer) {
            console.log(dataFromServer);
            console.log("Finished calling servlet.");
            $('#myModal').modal('hide');
            //how to clear body of the table - could read in the columns/rows, or remove individual rows
            $('#datatable tbody').remove();
            updateTable();
        });
    }
    else {
        valid_form = false;
        console.log("Not all fields were valid");
    }
}