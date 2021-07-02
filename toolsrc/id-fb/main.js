
    $(document).ready(function() {
        if (window.location.hostname == lh || window.location.hostname == wt) {
    $('#submit').click(function() {
    var link = $('#link').val();
    if (!link) {
       alert("Vui lòng nhập đầy đủ thông tin !");
       $('#link').focus();
    } else if (!isUrlValid(link)) {
      alert("Vui lòng nhập link facebook hợp lệ !");
      $('#link').focus();
    } else if (link.indexOf('facebook.com') < 0) {
      alert("Vui lòng nhập link facebook !");
      $('#link').focus();
    } else {


        $('#submit').prop('disabled', !0).html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');


        var idfacebook = null;
        var post = link.match(/(.*)\/posts\/([0-9]{8,})/);
        var photo = link.match(/(.*)\/photo.php\?fbid=([0-9]{8,})/);
        var photo2 = link.match(/(.*)\/photo\/\?fbid=([0-9]{8,})/);
        var photo3 = link.match(/(.*)\/photo\?fbid=([0-9]{8,})/);
        var video = link.match(/(.*)\/video.php\?v=([0-9]{8,})/);
        var story = link.match(/(.*)\/story.php\?story_fbid=([0-9]{8,})/);
        var permalink = link.match(/(.*)\/permalink.php\?story_fbid=([0-9]{8,})/);
        var number = link.match(/(.*)\/([0-9]{8,})/);
        var comment = link.match(/(.*)comment_id=([0-9]{8,})/);
        var media = link.match(/(.*)media\/set\/\?set=a\.([0-9]{8,})/);
        var watch = link.match(/(.*)\/watch\/\?v=([0-9]{8,})/);
        if (comment) {
            idfacebook = comment[2]
         alert("Get ID Thành Công !")
        } else if (photo) {
            idfacebook = photo[2]
        } else if (photo2) {
            idfacebook = photo2[2]
        } else if (photo3) {} else if (video) {
            idfacebook = video[2]
        } else if (story) {
            idfacebook = story[2]
        } else if (permalink) {
            idfacebook = permalink[2]
        } else if (number) {
            idfacebook = number[2]
        } else if (media) {
            idfacebook = media[2]
        } else if (watch) {
            idfacebook = watch[2]
        } else if (post) {
            idfacebook += '_' + post[2]
        };
        if (idfacebook == null) {
            var username = link.split('facebook.com/')[1];
            var request = {
                "url": "https://api.findids.net/api/get-uid-from-username",
                "method": "POST",
                "headers": {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                "data": {
                    "username": username
                }
            };
            $.ajax(request).done(function(res) {
                if (res.data.id == '') {
                   alert("Không tìm thấy ID !")
                } else {
                    $('#submit').prop('disabled', !1).html('<i class="fa fa-search"></i> Lấy ID ngay');
                    $('#result').html('<label class="mt-2">Kết quả: </label><div class="input-group"><input type="text" id="idfacebook" class="form-control text-primary" value="'+ res.data.id +'" style="font-weight:bold"><div class="input-group-append"><button class="btn btn-primary" onclick="coppy()">Sao chép</button></div></div>');
                   alert("Get ID Thành Công !")
                }
            })
        } else {
            $('#submit').prop('disabled', !1).html('<i class="fa fa-search"></i> Lấy ID ngay');
            $('#result').html('<label class="mt-2">Kết quả: </label><div class="input-group"><input type="text" id="idfacebook" class="form-control text-primary" value="'+ idfacebook +'" style="font-weight:bold"><div class="input-group-append"><button class="btn btn-primary" onclick="coppy()">Sao chép</button></div></div>');
            alert("Get ID Thành Công !")
        }
    }
  });
  

  function isUrlValid(link) {
    var res = link.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    if (res == null)
        return !1;
    else return !0
  };
} });

  