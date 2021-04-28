"use strict";
$(document).ready(function() {
    $('form').submit(function(event) {
        $('.tadload').show();
        $('#text').empty();
        $('#result').empty();

        var postForm = {
            'text'     : $('textarea[name=text]').val(),
            'canhtrai'     : $('select[name=canhtrai]').val(),
            'canhphai'     : $('select[name=canhphai]').val(),
            'canhgiua'     : $('select[name=canhgiua]').val()
        };

        $.ajax({
            type      : 'POST',
            url       : 'https://kituaz.com/ajax.php',
            data      : postForm,
            success   : function(data) {

                setTimeout(function () {
                    $('.tadload').hide();
                    $('#result').fadeIn(1000).append(data);
                }, 1000);

            }
        });
        event.preventDefault();
    });
});
function copyToClipboardText(e) {

    var inputc = e.parentElement.parentElement.children[1]
    inputc.focus();
    inputc.select();
    document.execCommand('copy');

    $(".input-group-btn .btn").html("Sao chép");

e.innerHTML = "Đã sao chép";
}

