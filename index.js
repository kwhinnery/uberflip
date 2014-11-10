var app = require('gopher');
var client = require('twilio')();

app.post('/send', function(request, response) {
    var phone = request.param('phone');
    client.sendMessage({
        to: phone,
        from: process.env.TWILIO_NUMBER,
        body: process.env.TEXT_MESSAGE
    }, function(err, message) {
        if (err) {
            response.send(500, err);
        } else {
            response.send(200);
        }
    });
});