var app = require('gopher');
var client = require('twilio')();

app.post('/send', function(request, response) {
    var phone = request.param('phone');
    client.sendMessage({
        to: phone,
        from: '+16129991519',
        body: 'Thanks for visiting our booth today! Learn more about Twilio: http://bit.ly/learn_about_twilio'
    }, function(err, message) {
        if (err) {
            response.send(500, err);
        } else {
            response.send(200);
        }
    });
});