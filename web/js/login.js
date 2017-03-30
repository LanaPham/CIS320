/**
 * Created by Lana on 3/23/2017.
 */


<!-- AJAX Post -->
function invalidateSessionButton() {

    var url = "api/invalidate_session_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling invalidate/logout servlet.");
        console.log(dataFromServer);

        //Automatically call the ‘get session’ part when the user logs out
        getLogin();
        console.log("automatically call the 'get session' when user logs out");

    });
}

function getLogin() {

    var url = "api/get_login_servlet";

    $.post(url, null, function (dataFromServer) {
        console.log("Finished calling get login servlet.");
        console.log(dataFromServer);
        $('#getSessionResult').html(dataFromServer);

        console.log("'" + dataFromServer + "'");
        if (dataFromServer.trim() === "") {
            $("#hideLogOut").hide();
            console.log("Hide me");
        }
        else {
            $("#hideLogOut").show();
        }
    });
}

function login() {

    var url = "api/login_servlet";
    var login = $("#loginId").val();
    var dataToServer = {loginId : login};

    $.post(url, dataToServer, function (dataFromServer) {
        console.log("Finished calling login servlet.");
        console.log(dataFromServer);
        $("#loginId").val("");

        //Automatically call the 'get session' part when the user logs in
        getLogin();
        console.log("Automatically call the 'get session' when user logs in")
    });
}
button = $('#getLogin');
button.on("click", getLogin);

button = $('#login');
button.on("click", login);

button = $('#invalidateSession');
button.on("click", invalidateSessionButton);

//Automatically call the ‘get session’ part on page load.
getLogin();