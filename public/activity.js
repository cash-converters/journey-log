const connection = new Postmonger.Session();

let schema;

connection.trigger('ready');

connection.on('initActivity', function(data) {
    console.log(data);
    document.getElementById('configuration').value = JSON.stringify(data, null, 2);
});

connection.on('clickedNext', function() {
    const configuration = JSON.parse(document.getElementById('configuration').value);
    console.log(configuration);
    connection.trigger('updateActivity', configuration);
});


connection.on('requestedSchema', function (data) {
    if (data.error) {
        console.error(data.error);
    } else {
        schema = data['schema'];
    }
    console.log('*** Schema ***', JSON.stringify(schema));
});