var url = "api/name_list_get";

$.getJSON(url, null, function(json_result) {
        for (var i = 0; i < json_result.length; i++) {
            console.log(json_result[i].first);

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