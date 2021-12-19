//Lấy giá trị từ form
var numArray = [];
document.getElementById("array_input").onclick = function() {
    var num = Number(document.getElementById("form__data").value);
    numArray.push(num);
    document.getElementById("txt__showArray").innerHTML = numArray;
}

//Bài 1: Tính tổng dương
document.getElementById("btn_1").onclick = function() {
    var sum = 0;
    for(i=0; i<numArray.length; i++) {
        if(numArray[i] > 0) {
            sum += numArray[i];
        }
    }
    document.getElementById("txt__tongDuong").innerHTML = "Tổng số dương: " + sum;
}

//Bài 2: Đếm số dương
document.getElementById("btn_2").onclick = function() {
    var count = 0;
    for(i=0; i<numArray.length; i++) {
        if(numArray[i] > 0) {
            count++;
        }
    }
    document.getElementById("txt__demSo").innerHTML = "Số dương: " + count;
}

//Bài 3: Tìm số nhỏ nhất
document.getElementById("btn_3").onclick = function() {
    var min = numArray[0];
    for(i=1; i<numArray.length; i++) {
        if(numArray[i] < min) {
            min = numArray[i];
        }
    }
    document.getElementById("txt__min").innerHTML = "Số nhỏ nhất là: " + min;
}

//Bài 4: Tìm số dương nhỏ nhất
document.getElementById("btn_4").onclick = function() {
    var minDuong = numArray[0];
    for(i=1; i<numArray.length; i++) {
        if(numArray[i] < minDuong && numArray[i] > 0) {
            minDuong = numArray[i];
        }
    }
    document.getElementById("txt__minDuong").innerHTML = "Số dương nhỏ nhất là: " + minDuong;
}

//Bài 5: Tìm số chẵn cuối cùng
document.getElementById("btn_5").onclick = function() {
    var soChan = -1;
    for(i=0; i<numArray.length; i++) {
        if(numArray[i]%2 == 0) {
            soChan = numArray[i];
        } else if(soChan == -1) {
            soChan = "Không có số chẵn nào trong mảng.";
        }
    }
    document.getElementById("txt__soChanCuoiCung").innerHTML = "Số dương nhỏ nhất là: " + soChan;
}

//Bài 6: Đổi chỗ
document.getElementById("btn_6").onclick = function() {
    var vitri1 = parseInt(document.getElementById("vitri1").value);
    var vitri2 = parseInt(document.getElementById("vitri2").value);
    var temp = numArray[vitri1];
    numArray[vitri1] = numArray[vitri2];
    numArray[vitri2] = temp;
    document.getElementById("txt__doiCho").innerHTML = numArray;
}

//Bài 7: Sắp xếp tăng dần
document.getElementById("btn_7").onclick = function() {
    for(i=0; i<numArray.length; i++) {
        for(j=0; j<numArray.length-1; j++) {
            if(numArray[j] > numArray[j+1]) {
                var bienTam = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = bienTam;
            }
        } 
    }
    document.getElementById("txt__sapXep").innerHTML = numArray;
}

//Bài 8: Tìm số nguyên tố đầu tiên
document.getElementById("btn_8").onclick = function() {
    for(i=0; i<numArray.length; i++) {
        var n = Math.sqrt(numArray[i]);
        var count = 0;
        for(j = 2; j <= n; j++) {
            if(numArray[i]%j == 0) {
                count++;
            }
        }
        if(count == 0 && numArray[i] > 1 && Number.isInteger(numArray[i]) == true) {
            document.getElementById("txt__soNguyenTo").innerHTML = "Số nguyên tố đầu tiên: " + numArray[i];
            break;
        }
    }
}

//Bài 9: Đếm số nguyên
var newArray = [];
document.getElementById("array_input9").onclick = function() {
    var newNum = Number(document.getElementById("form__data9").value);
    newArray.push(newNum);
    document.getElementById("txt__showArray9").innerHTML = newArray;
}
document.getElementById("btn_9").onclick = function() {
    var count = 0;
    for(i = 0; i < newArray.length; i++) {
        if(Number.isInteger(newArray[i]) == true) {
            count++;
        }
    }
    document.getElementById("txt__demSoNguyen").innerHTML = "Số nguyên: " + count;
}

//Bài 10: So sánh 
document.getElementById("btn_10").onclick = function() {
    var soAm = 0;
    var soDuong = 0;
    for(var i = 0; i<numArray.length; i++) {
        if(numArray[i] > 0) {
            soDuong++;
        } else if(numArray[i] < 0) {
            soAm++;
        }
    }
    if(soAm == soDuong) {
        document.getElementById("txt__soSanh").innerHTML = "Số âm = Số dương";
    } else if(soAm < soDuong) {
        document.getElementById("txt__soSanh").innerHTML = "Số âm < Số dương";
    } else {
        document.getElementById("txt__soSanh").innerHTML = "Số âm > Số dương";
    }

}