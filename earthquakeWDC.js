$(document).ready(function () {
    $("#submitButton").click(function () {
        document.write("Hello World");
        tableau.connectionName = "USGS Earthquake Feed";
        tableau.submit();
    });
});


