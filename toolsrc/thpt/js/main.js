function tinhxuoii() {
    var o = document.getElementById("diemtoan").value;
    var n = document.getElementById("diemvan").value;
    var l = document.getElementById("diemanh").value;
    var j = document.getElementById("diemtohop1").value;
    var h = document.getElementById("diemtohop2").value;
    var e = document.getElementById("diemtohop3").value;
    var c = document.getElementById("diemtb").value;
    var a = document.getElementById("diemkk").value;
    var m = document.getElementById("diemut").value;



    if (o <= 1 || n <= 1 || l <= 1 || j <= 1 || h <= 1 || e <= 1) {
        document.getElementById("tinhxuoi").innerHTML = "Bạn đã trượt tốt nghiệp do có 1 môn dưới hoặc bằng 1!"
    } else {
        var k = (Number(j) + Number(h) + Number(e)) / 3;
        var i = (Number(o) + Number(n) + Number(l) + k + Number(a)) / 4;
        var g = i * 0.7 + Number(c) * 0.3 + Number(m);
        var d = g.toFixed(2);
        var b = 5 - d;
        var f = b.toFixed(2);
        document.getElementById("tinhxuoi").innerHTML = "Điểm xét tốt nghiệp của bạn là: " + d;
        if (d < 5) {
            document.getElementById("tinhxuoi2").innerHTML = "Bạn đã trượt tốt nghiệp!<br/>Bạn cần ít nhất " + f + " điểm nữa để đỗ tốt nghiệp"
        } else {
            document.getElementById("tinhxuoi2").innerHTML = "Bạn đã đỗ tốt nghiệp!"
        }
    }
};

function tinhnguocc() {
    var e = document.getElementById("diemtbn").value;
    var d = document.getElementById("diemkkn").value;
    var c = document.getElementById("diemutn").value;
    var b = ((5 - Number(c) - Number(e) * 0.3) / 0.7) * 4 - Number(d);
    var a = b.toFixed(2);
    var g = a / 4;
    var f = g.toFixed(2);
    document.getElementById("tinhnguoc").innerHTML = "Điểm tổng 4 môn Toán + Văn + Anh + Trung bình bài thi tổ hợp là " + a + "<br/>Tức là mỗi môn phải trên 1 và trung bình một môn >= " + f + " để đỗ tốt nghiệp!"
};

function tinhxuoiigdtx() {
    var f = document.getElementById("diemtoangdtx").value;
    var e = document.getElementById("diemvangdtx").value;
    var c = document.getElementById("diemanhgdtx").value;
    var a = document.getElementById("diemtbgdtx").value;
    var j = document.getElementById("diemkkgdtx").value;
    var i = document.getElementById("diemutgdtx").value;
    if (f <= 1 || e <= 1 || c <= 1) {
        document.getElementById("tinhxuoigdtx").innerHTML = "Bạn đã trượt tốt nghiệp do có 1 môn dưới hoặc bằng 1!"
    } else {
        var h = ((Number(f) + Number(e) + Number(c)) / 3 + Number(j) / 4) * 0.7 + Number(a) * 0.3 + Number(i);
        var g = h.toFixed(2);
        var d = 5 - g;
        var b = d.toFixed(2);
        document.getElementById("tinhxuoigdtx").innerHTML = "Điểm xét tốt nghiệp của bạn là: " + g;
        if (g < 5) {
            document.getElementById("tinhxuoi2gdtx").innerHTML = "Bạn đã trượt tốt nghiệp!<br/>Bạn cần ít nhất " + b + " điểm nữa để đỗ tốt nghiệp"
        } else {
            document.getElementById("tinhxuoi2gdtx").innerHTML = "Bạn đã đỗ tốt nghiệp!"
        }
    }
};

function tinhnguoccgdtx() {
    var g = document.getElementById("diemtbngdtx").value;
    var f = document.getElementById("diemkkngdtx").value;
    var e = document.getElementById("diemutngdtx").value;
    var d = ((5 - Number(e) - Number(g) * 0.3) / 0.7 - Number(f) / 4) * 3;
    var c = d.toFixed(2);
    var b = c / 3;
    var a = b.toFixed(2);
    document.getElementById("tinhnguocgdtx").innerHTML = "Điểm tổng 3 bài thi là " + c + "<br/>Tức là mỗi bài thi phải trên 1 và trung bình một bài thi >= " + a + " để đỗ tốt nghiệp!"
};