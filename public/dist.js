$(function() {
    $('#link form').on('submit', function(e) {
        e.preventDefault();
        $.ajax({
            url:'/send',
            method:'POST',
            data: {
                phone: $('input[name="phone"]').val()
            }
        }).then(function(d) {
            $('input[name="phone"]').val('');

            $p = $('#link .inner p');
            $p.css({
                color:'lime'
            }).html('Message Sent!');

            setTimeout(function() {
                $p.css({
                    color:'#fff'
                }).html('Text Me This Page:');
            }, 5000);

        }, function(err) {
            alert('There was an error sending the link, please try again.');
        });
    });
});