let number = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];
let num = [1, 2, 31, 4, 15, 6, 7, 22, 9, 10];
let min = number[0];
let max = number[0];
// หาค่าสูงสุดต่ำสุด
for (let i = 1; i < number.length; i++) {
    if (number[i] < min) {
        min = number[i]
    }
    if (number[i] > max) {
        max = number[i]
    }
    // จัดเรียงค่าข้อมูลจากน้อยไปมาก
    for (let i = 0; i < number.length - 1; i++) {
            if (number[i] > number[i + 1]) {
                let temp = number[i];
                number[i] = number[i + 1];
                number[i + 1] = temp;
                
    // จัดเรียงข้อมูจากมากไปน้อย
    for (let i = 0; i < num.length - 1; i++) {
            if (num[i] < num[i + 1]) {
                let temp = num[i];
                num[i] = num[i + 1];
                num[i + 1] = temp;
                }
            }
        }
    }
}
// หาแฟคทอเรียล
    function factorial(a) {
    if (a == 0) {
        return 1;
    }
    let fac = 1;
    for (let i = 1; i <= a; i++) {
        fac *= i;
    }
    return fac
}
// หาจำนวนเฉพาะ
    function Prime(a) {
    if (a == 1) {
        return false;
    }
    for (let i = 2; i <= a; i++) {
        if (a % i == 0 && a != i) {
            return false;
        }
    }
    return true;
}

let primeNumber = [];
for (let i = 1; i <= 500; i++) {
    if (Prime(i)) {
        primeNumber.push(i);
    }
}

console.log('ค่าสูงสุด:' + max)
console.log('ค่าต่ำสุด:' + min)
console.log('เรียงจากน้อยไปมาก: ' + number.join(' '))
console.log('เรียงจากมากไปน้อย: ' + num.join(' '))
console.log('5! = ' + factorial(5))
console.log('จำนวนเฉพาะที่อยู่ในช่วง 0 - 500 คือ ' + primeNumber.join(' '))

// หาความยาวด้านตรงข้ามมุมฉากของสามเหลี่ยม
function sqrt(a) {
    let x, y = a/2;
    do {
        x = y;
        y = (x + (a/x)) / 2;
    } while (x != y);
    return x;
}
function cal() {
    let a = document.getElementById("A").value;
    let b = document.getElementById("B").value;
    let c = sqrt((a**2 + b**2))
    document.getElementById('result').innerHTML = 'ด้านตรงข้ามมุมฉากมีค่าเท่ากับ: ' + c
}

// การบวกเมทริกซ์
function matrixAddition() {
    let numArrays = arguments.length;
    let numRows = arguments[0].length;
    let numCols = arguments[0][0].length;
    for (let i = 1; i < numArrays; i++) {
      if (arguments[i].length != numRows || arguments[i][0].length !== numCols) {
        throw new Error("เมทริกซ์ต้องมีขนาดเท่ากัน");
      }
    }
    
    let result = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j < numCols; j++) {
        let sum = 0;
        for (let k = 0; k < numArrays; k++) {
          sum += arguments[k][i][j];
        }
        row.push(sum);
      }
      result.push(row);
    }
    
    return result;
  }
  let matrixA = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
  let matrixB = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];
  let result = matrixAddition(matrixA, matrixB);
  console.log(result)

  //แปลงเลขฐาน 10 เป็นฐาน 2
  function decimalToBinary(decimal) {
    let binary = "";
    let divisor = 2;
    let quotient = decimal;
    while (quotient >= 1) {
      let remainder = quotient % divisor;
      binary = remainder + binary;
      quotient = Math.floor(quotient / divisor);
    }
    return binary;
  }
  let decimalInput = document.getElementById("decimalInput");
  let bi = document.getElementById("result");

  function convert() {
    let decimalNumber = decimalInput.value;
    let binaryNumber = decimalToBinary(decimalNumber);
    document.getElementById('result').innerHTML = 'เลขในฐาน 2 คือ:' + binaryNumber;
  };

  //แปลงเลขฐาน 10 เป็นฐาน 2
function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 1;
    for (let i = binary.length - 1; i >= 0; i--) {
      if (binary[i] == "1") {
        decimal += power;
      }
      power *= 2;
    }
    return decimal;
  }
  
  let binaryInput = document.getElementById("binaryInput");
  let dex = document.getElementById("result");
  
  function convertButton() {
    let binaryNumber = binaryInput.value;
    let decimalNumber = binaryToDecimal(binaryNumber);
    document.getElementById('result').innerHTML = 'เลขในฐาน 10 คือ:' + decimalNumber;
  };





