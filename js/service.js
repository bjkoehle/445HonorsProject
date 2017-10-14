//Honors project for CSE 445 JS functions
//Brendan Koehler @2017

//Submit the data and update output
function sendCities(){
    var city1 = document.getElementById("cityOne").value;
    var city2 = document.getElementById("cityTwo").value;

    //Service requests
    //Make the request for the distance.
    $.ajax({
        type: "POST",
        url: "../Service1.svc/ajaxEndpoint/GetDistance",
        data: '{"City1":"'+city1+'", "City2":"'+city2+'"}',
        processData:false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(data)
        {
            //Set our output in the page
            document.getElementById("distanceBCOutput").innerHTML = String(data.d) + " Km";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

    //Make the request for the drive time.
    $.ajax({
        type: "POST",
        url: "../Service1.svc/ajaxEndpoint/GetTime",
        data: '{"City1":"' + city1 + '", "City2":"' + city2 + '"}',
        processData: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //Set our output in the page
            document.getElementById("driveTimeOutput").innerHTML = data.d;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });

    
}

function sendElevation() {
    var lat = document.getElementById("latitude").value;
    var lon = document.getElementById("longitude").value;

    //Make the request for the elevation to the service
    $.ajax({
        type: "POST",
        url: "../Service2.svc/GetElevation",
        data: '{"Lat":"' + String(lat) + '", "Lon":"' + String(lon) + '"}',
        processData: false,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            //Set our output in the page
            document.getElementById("elevationOutput").innerHTML = String(data.d) + " meters";
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
        }
    });
}