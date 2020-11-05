const connection = new Postmonger.Session();

connection.trigger('ready');

connection.on('initActivity', function(data) {
    console.log(data);
    document.getElementById('configuration').value = JSON.stringify(data);
})

connection.on('clickedNext', function() {
    const configuration = JSON.parse(document.getElementById('configuration').value);
    console.log(configuration);
    connection.trigger('updateActivity', configuration);
})