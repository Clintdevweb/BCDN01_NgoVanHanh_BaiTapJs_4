// Bài tập 1
/**
 * Khối 1: Input
 * 3 số nguyên được khách hàng nhập vào : num1, num2, num3;
 * 
 * Khối 2: Các bước xử lý
 * B1: tìm thẻ html  và lấy giá trị của 3 số nguyên khách hàng nhập vào
 * B2: Xây dựng công thức
 * B3: Xét các trường hợp xảy ra
 * Th1: nếu num1>num2>num3 xuất thứ tự tăng dần của 3 số nguyên là num3, num2, num1
 * Th2: nếu num1>num2 && num1 > num3 && num3 > num2 xuất thứ tự tăng dần của 3 số nguyên là num2, num3, num1
 * Th3: nếu num2>num1>num3 xuất thứ tự tăng dần của 3 số nguyên là num3, num1, num2
 * Th4: nếu num2>num1 && num2>num3 && num3>num1 xuất thứ tự tăng dần của 3 số nguyên là num1, num3, num2
 * Th5: nếu num3>num2>num1 xuất thứ tự tăng dần của 3 số nguyên là num1, num2, num3
 * TH6: nếu num3>num2 && num1>num2 && num3>num1 xuất thứ tự tăng dần của 3 số nguyên là num2, num1, num3
 * 
 * B4 Hiển thị kết quả trên UI
 * Khối 3: Out put
 * 3 số nguyên được sắp xếp theo thứ tự tăng dần
 * 
 */

// Khai báo hàm
function arrange(){
    var num1 = Number(document.getElementById("so1").value);
    var num2 = Number(document.getElementById("so2").value);
    var num3 = Number(document.getElementById("so3").value);
    if(num1 !== num2 && num2 !== num3 && num1 !== num3){
    if(num1 > num2 && num2 > num3){
        document.getElementById("txtAlert").innerHTML = "Thứ tự tăng dần của dãy số là: " + num3 + ", " + num2 + ", " + num1
    }else if(num1 > num2 && num1 > num3 && num3 > num2){
        document.getElementById("txtAlert").innerHTML = "Thứ tự tăng dần của dãy số là: " + num2 + ", " + num3 + ", " + num1
    }else if(num2 > num1 && num1 > num3){
        document.getElementById("txtAlert").innerHTML = "Thứ tự tăng dần của dãy số là: " + num3 + ", " + num1 + ", " + num2
    }else if(num2>num1 && num2>num3 && num3>num1){
        document.getElementById("txtAlert").innerHTML = "Thứ tự tăng dần của dãy số là: " + num1 + ", " + num3 + ", " + num2
    }else if(num3>num2 && num2>num1){
        document.getElementById("txtAlert").innerHTML = "Thứ tự tăng dần của dãy số là: " + num1 + ", " + num2 + ", " + num3
    }else{
        document.getElementById("txtAlert").innerHTML = "Thứ tự tăng dần của dãy số là: " + num2 + ", " + num1 + ", " + num3
    }
    }else{
        document.getElementById("txtAlert").innerHTML = " Nhập mấy số nguyên khác nhau ấy. Hack gì được não của thiên tài cứ thích hack hoài luyện thêm đi"
    }
}
// Tạo sự kiện click btn (btnArrange)
document.getElementById("btnArrange").onclick = arrange;
// Done 

// Bài tập 2
/**
 * Khối 1: Input
 * bố(father), mẹ(mother), anh trai(brother), em gái(young sister)
 * 
 * 
 * Khối 2: Các bước xử lý
 * B1 Tìm thẻ html và lấy giá trị nhập vào
 * B2 Từ giá trị nhập vào xét các trường hợp để gửi lời chào thích hợp
 * B3 Hiển thị UI
 * Khối 3 Output
 *  Xuất ra lời chào thích hợp với mỗi đối tượng
 * 
 */

// Khai báo hàm
document.getElementById("btnHi").onclick = function(){
    var who = document.getElementById("memberFm").value;
    if(who === "bố" || who === "father" || who === "dad"){
        document.getElementById("textWho").innerHTML = " Chào bố ( Hi Father)";

    }else if(who === "mẹ" || who === "mother" || who === "mom" || who === "Mom"){
        document.getElementById("textWho").innerHTML = " Chào mẹ ( Hi Mom)";
    }else if(who === "anh trai" || who === "brother" || who === "Anh trai" || who === "Brother"){
        document.getElementById("textWho").innerHTML = " Chào anh trai ( Hi Brother)";
    }else if(who === "em gái" || who === "young sister" || who === "Em gái" || who === "Young sister"){
        document.getElementById("textWho").innerHTML = " Chào em gái ( Hi Young sister)";
    }else{
        document.getElementById("textWho").innerHTML = "Gia đình ông lập trình chỉ có 4 người thôi!!! Hãy nhập 4 người theo ví dụ. Hack não làm gì cho tôi phải mệt nhỉ";
    }
}
// Done

// Bài tập 3
/**
 * Khối 1: Input
 * 3 số nguyên
 * 
 * Khối 2: Các bước xử lý
 * B1 Tìm thẻ html và lấy giá trị 3 số nguyên
 * B2 Tạo biến phần dư của mỗi số để so sánh (phandu1, phandu2, phandu3 ). Theo công thức: phandu= num % 2
 * 
 * B3 Tạo biến đếm số chẵn lẽ (chẵn: demChan lẻ: demLe)
 * 
 * B4 Xét các trường hợp xảy ra dựa theo công thức phandu === 0 thì đó là số chẵn và biến đến số chẵn được +1(demChan = denChan++). Nếu phandu !== 0 thì suy ra đó là số lẽ và biến đếm số lẻ được +1 (denLe = demLe++)
 * B4 Hiển thị UI
 * 
 * Khối 3 Output
 * Xuất ra số lượng số số chẵn, lẻ của dãy
 */
// Khai báo hàm
function DemChanLe () {
    // Khái báo biến đếm
    var demChan = 0;
    var demLe = 0;

    // Khai báo biến phần dư để so sánh
    var phandu1 = parseInt(document.getElementById('InputNum1').value)%2;
    var phandu2 = parseInt(document.getElementById('InputNum2').value)%2;
    var phandu3 = parseInt(document.getElementById('InputNum3').value)%2;

    // Xét trường hợp
    if(phandu1 === 0){
        demChan = demChan + 1;
    }else{
        demLe = demLe + 1;
    }
    if(phandu2 === 0){
        demChan = demChan + 1;
    }else{
        demLe = demLe + 1;
    }
    if(phandu3 === 0){
        demChan = demChan + 1;
    }else{
        demLe = demLe + 1;
    }

    document.getElementById('txtResult').innerHTML = 'Số lượng số chẵn của dãy là: ' + demChan + '<br>' + 'Số lượng số lẻ của dãy là: ' + demLe;
    
    
}

// Tạo sự kiện click btn (btnResult)
document.getElementById('btnResult').onclick = DemChanLe;

// Done


// Bài tập 4
/**
 * Khối 1: Input 
 * 3 cạnh của tam giác
 * 
 * Khối 2 Các bước xử lý
 * B1 Tìm thẻ html và lấy giá trị của 3 cạnh tam giác
 * B2 Xét các trường hợp theo tính chất tam giác
 * Th1: edge1 === edge2 || edge2 === edge3 || edge1 === edge3. Thì đó là tam giác cân
 * Th2: edge1 === edge2 && edge2 === edge3. Thì đó là tam giác đều
 * 
 * Th3: edge1*edge1 === edge2*edge2 + edge3*edge3
 * ||   edge2*edge2 === edge1*edge1 + edge3*edge3
 * ||   edge3*edge3 === edge1*edge1 + edge2*edge2
 * Thì đó là tam giác vuống theo định luật pytago.
 * Th4 Trường hợp khác thì tam giác thường
 * 
*/

// Khai báo hàm 
function Triangle(){
    var edge1 = parseFloat(document.getElementById("InputEdge1").value);
    var edge2 = parseFloat(document.getElementById("InputEdge2").value);
    var edge3 = parseFloat(document.getElementById("InputEdge3").value);
    // Xét các trường hợp 
    if(edge1 > 0 && edge2 > 0 && edge3 > 0){
        if(edge1 === edge2 && edge2 === edge3){
            document.getElementById("txtTriangle").innerHTML = "Kết quả là: Tam giác đều";
        }else if(edge1 === edge2 || edge2 === edge3 || edge1 === edge3){
            document.getElementById("txtTriangle").innerHTML = "Kết quả là: Tam giác cân";

        }else if(edge1*edge1 === edge2*edge2 + edge3*edge3 ||  edge2*edge2 === edge1*edge1 + edge3*edge3 || edge3*edge3 === edge1*edge1 + edge2*edge2){
            document.getElementById("txtTriangle").innerHTML = "Kết quả là: Tam giác vuông";
        }else{
            document.getElementById("txtTriangle").innerHTML = "Kết quả là: Tam giác thường";
        }
    }else{
        document.getElementById("txtTriangle").innerHTML = "Hãy nhập độ dài các cạnh lớn hơn 0 để xem kết quả"
    }
}

// Tạo sự kiện click btn (btnTriangle)
document.getElementById("btnTriangle").onclick = Triangle;

// Done