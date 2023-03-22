function tinhDiemTBIfElse() {
    let toan = parseFloat(prompt("Nhap diem Toan: "));
    let ly = parseFloat(prompt("Nhap diem Ly: "));
    let hoa = parseFloat(prompt("Nhap diem Hoa: "));
    let sinh = parseFloat(prompt("Nhap diem Sinh: "));
  
  
    let diemTB = (toan + ly + hoa + sinh) / 4;
  
    let xepLoai;
    if (diemTB >= 9 && diemTB <= 10) {
      xepLoai = "Gioi";
    } else if (diemTB >= 7 && diemTB < 9) {
      xepLoai = "Kha";
    } else if (diemTB >= 5 && diemTB < 7) {
      xepLoai = "Trung binh";
    } else {
      xepLoai = "Yeu";
    }
  
    alert("Diem trung binh: " + diemTB.toFixed(2) + "\nXep loai: " + xepLoai);
  }
  
  function tinhDiemTBSwitch() {
    let toan = parseFloat(prompt("Nhap diem Toan: "));
    let ly = parseFloat(prompt("Nhap diem Ly: "));
    let hoa = parseFloat(prompt("Nhap diem Hoa: "));
    let sinh = parseFloat(prompt("Nhap diem Sinh: "));
  
    let diemTB = (toan + ly + hoa + sinh) / 4;
  
    let xepLoai;
    switch (true) {
      case diemTB >= 9 && diemTB <= 10:
        xepLoai = "Gioi";
        break;
      case diemTB >= 7 && diemTB < 9:
        xepLoai = "Kha";
        break;
      case diemTB >= 5 && diemTB < 7:
        xepLoai = "Trung binh";
        break;
      default:
        xepLoai = "Yeu";
        break;
    }
    alert("Diem trung binh: " + diemTB.toFixed(2) + "\nXep loai: " + xepLoai);
  }