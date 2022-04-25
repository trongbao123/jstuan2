/**
 * Tính tiền lương nhân viên
 * 
 * input: tienLuongMotNgay, soNgayLam
 * 
 * Các bước xử lý:
 * B1: B1: Tìm các thẻ bằng id
 * B2: Tạo hàm tính
 *   + Lấy giá trị từ form
 *   + Kiểm tra
 *     tongLuong = tienLuongMotNgay * soNgayLam;
 *
 *   + Hiển thị kết quá lên UI
 * B3: gắn hàm vào sự kiện click
 * 
 * output: tongLuong;
 */

 var inputLuongMotNgay = document.getElementById("inputLuongMotNgay");
 var inputNgayLam = document.getElementById("inputNgayLam");
 var tongLuong = 0;
 
 function tinhTienLuong(){
     var tienLuongMotNgay = inputLuongMotNgay.value;
     var soNgayLam = inputNgayLam.value;
 
     var tongLuong = tienLuongMotNgay * soNgayLam;
 
     document.getElementById("thongBaoTien").innerHTML = tongLuong.toLocaleString() +"VNĐ";
 }
 
 
 /**
  * Tính trung bình
  * 
  * input: num1 => num5;
  * 
  * Các bước xử lý:
  * B1: B1: Tìm các thẻ bằng id
  * B2: Tạo hàm tính
  *   + Lấy giá trị từ form
  *   + Kiểm tra
  *    tinhTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5
  *   + Hiển thị kết quá lên UI
  * B3: gắn hàm vào sự kiện click
  * 
  * output: tinhTrungBinh
  */
 
 var num1 = document.getElementById("inputNum1");
 var num2 = document.getElementById("inputNum2");
 var num3 = document.getElementById("inputNum3");
 var num4 = document.getElementById("inputNum4");
 var num5 = document.getElementById("inputNum5");
 var tb = 0;
 
 function tinhTrungBinh(){
     var num1 = inputNum1.value;
     var num2 = inputNum2.value;
     var num3 = inputNum3.value;
     var num4 = inputNum4.value;
     var num5 = inputNum5.value;
 
 
     var so1 = parseInt(num1);
     var so2 = parseInt(num2);
     var so3 = parseInt(num3);
     var so4 = parseInt(num4);
     var so5 = parseInt(num5);
 
     var tinhTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
 
     // var tinhTrungBinh = (num1 + num2 + num3 + num4 + num5) / 5
 
     // Math.round(tinhTrungBinh)
 
 
     document.getElementById("thongBaoGiaTri").innerHTML = "Kết quả: " + tinhTrungBinh;
 }
 
 /**
  * Quy đổi tiền
  *  Khối 1: input
  * + gia1Usd
  * + soUsd
  * 
  * Khối 2: các bước xử lý
  * B1: tạo biến gán giá trị
  * 
  * B2: xây dựng công thức
  * giaUsd = soUsd * gia1Usd
  * 
  * B3: hiển thị kết quả
  * 
  * Khối 3: output
  * + Xuất ra số tiền sau quy đổi VNĐ
  */
 
 var soUsd = document.getElementById("inputSoUsd");
 var gia1Usd = 23500;
 
 function quyDoiTien(){
     var soUsd = inputSoUsd.value;
 
     var giaUsd = soUsd * gia1Usd;
     console.log(giaUsd)
     document.getElementById("tienDaQuyDoi").innerHTML = giaUsd.toLocaleString() +"VNĐ";
 }
 
 
 
 
 /** Bài 4: Tính diện tích, chu vi hình chữ nhật
  * 
  * Khối 1: input
  * + chieuDai
  * + chieuRong
  * 
  * Khối 2: các bước thực hiện
  * B1: tạo biến gán giá trị
  * 
  * B2:
  *  dienTich = chieuDai * chieuRong
  *  chuVi = (chieuDai + chieuRong) * 2
  * 
  * B3: hiển thị kết quả
  * 
  * Khối 3: output
  * + dienTich
  * + chuVi
  */
 
 var chieuDai = document.getElementById("inputDai")
 var chieuRong = document.getElementById("inputRong")
 var chuVi = 0;
 var dienTich = 0;
 
 function chuViDienTich(){
     var chieuRong = inputRong.value;
     var chieuDai = inputDai.value;
     var cd=parseInt(chieuDai);
     var cr=parseInt(chieuRong);
 
     var chuVi = (cd + cr)*2;
     var dienTich = chieuDai * chieuRong;
 
     console.log(chuVi)
 
     document.getElementById("ketQua").innerHTML = "Diện tích HCN: " + dienTich + "; " + "Chu vi HCN: " + chuVi;
 }
 
 
 
 /**Bài 5: Tính tổng 2 ký số
  * 
  * Khối 1: input
  * + num(số dương có 2 chữ số)
  * 
  * Khối 2: các bước xử lý
  * B1: khai báo biến, và gán giá trị khởi tạo
  * ten = num/10 ;
  * unit = num % 10;
  * 
  * sum = ten + unit;
  * 
  * B3: hiển thị kết quả
  * 
  * Khối 3: output
  * + sum(tổng các chữ số)
  * 
  */
 
 var nhapSo = document.getElementById("inputNum");
 var ten = 0;
 var unit= 0;
 var sum = 0;
 
 function tinhTong(){
     var num = nhapSo.value;
     var ten = Math.floor(num/10);
     var unit = num % 10;
 
     sum = ten + unit;
 
     document.getElementById("ketQua2").innerHTML = "Kết quả: " + sum;
 }