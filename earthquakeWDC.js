(function () {
    var myConnector = tableau.makeConnector();

    myConnector.getSchema = function (schemaCallback) {
        document.write("Hello World!");
    };
    

    myConnector.getData = function (table, doneCallback) {

    };

    tableau.registerConnector(myConnector);
    
    $(document).ready(function () {
    $("#submitButton").click(function () {
        tableau.connectionName = "USGS Earthquake Feed";
        tableau.submit();
    });
});
    
})();
