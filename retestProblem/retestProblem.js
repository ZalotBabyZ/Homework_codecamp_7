
// ข้อ 0 ภาษี
let msg00="";
function taxcal(income) {
    let tax = 0;
    if (income >= 500000){
        tax += (income-500000)*0.15;
        income = 500000;
    }
    if (income >= 300000){
        tax += (income-300000)*0.1;
        income = 300000;
    }
    if (income >= 150000){
        tax += (income-150000)*0.05;
    }
    return "ภาษี: "+tax;
}
let incomeGet= +prompt("กรอกรายได้: ") 
msg00 += "รายได้: "+incomeGet+"<br>";
msg00 += taxcal(incomeGet);
alert(taxcal(incomeGet));
document.getElementById("result00").innerHTML = msg00;


// ข้อ 1
let intGet = {
    numA: +prompt("หาเศษส่วนอย่างต่ำ ใส่ค่าเศษ"),
    numB: +prompt("หาเศษส่วนอย่างต่ำ ใส่ค่าส่วน")
}
let LessMore = {
    intMore: intGet.numA >= intGet.numB ? intGet.numA : intGet.numB,
    intLess: intGet.numA >= intGet.numB ? intGet.numB : intGet.numA,
    numerator: intGet.numA >= intGet.numB ? "MORE" : "LESS",
}
for (i = LessMore.intLess; i > 1; i--) {
    if (LessMore.intLess % i === 0) {
        if (LessMore.intMore % i === 0) {
            LessMore.intLess /= i;
            LessMore.intMore /= i;
        }
    }
}
let msg01="เศษส่วนอย่างต่ำของ "+intGet.numA+"/"+intGet.numB;
if (LessMore.numerator==="MORE") {
msg01 += " คือ " +LessMore.intMore + "/" + LessMore.intLess;
} else {
    msg01 += " คือ " +LessMore.intLess + "/" + LessMore.intMore;
}
alert(msg01);
document.getElementById("result01").innerHTML = msg01;


// ข้อ 2
let msg02 = "ผลบวก 160 162 164 ... 2048 คือ ";
let result02 = 0;
for (let i = 160; i <= 2048; i += 2) {
    result02 += i;
}
msg02 += result02;
alert(msg02);
document.getElementById("result02").innerHTML = msg02;


// ข้อ 3
let msg03 = "ผลบวก 163 167 171 ... 815 คือ ";
let result03 = 0;
for (let i = 163; i <= 815; i += 4) {
    result03 += i;
}
msg03 += result03;
alert(msg03);
document.getElementById("result03").innerHTML = msg03;


// ข้อ 4
let msg04="ตัวที่ n ของ 0 1 1 2 3 5 8 13 ... คือ ", nMinus2=0, nMinus1=1, result04;
let intN_04 = prompt("หาfibonacciตัวที่ n: กรอกค่าn");
for (let i = 3; i <= intN_04; i++){
    result04 = nMinus1 + nMinus2;
    nMinus2 = nMinus1;
    nMinus1 = result04;
}
msg04 += result04;
alert(msg04);
document.getElementById("result04").innerHTML = msg04;


// ข้อ 5
let msg05 = "1-2+3-4+...+18953-18954 คือ ";
//alert(-18954/2); //ควรจบตรงนี้ >~<
let result05 = 0;
for (let i = 1; i <= 18954; i++) {
    if (i % 2 === 0) {
        result05 -= i;
    } else {
        result05 += i;
    }
}
msg05 += result05;
alert(msg05);
document.getElementById("result05").innerHTML = msg05;

// ข้อ 6
let msg06 = "1x2 + 2x3 + 3x4 + ... + 87x88 คือ ";
let result06 = 0;
for (let i = 1; i <= 87; i++) {
    result06 += i * (i + 1);
}
msg06 += result06;
alert(msg06);
document.getElementById("result06").innerHTML = msg06;

// ข้อ 7
let msg07 = "1x2x3 + 2x3x4 + 3x4x5 + ... + 87x88x89 คือ ";
let result07 = 0;
for (let i = 1; i <= 87; i++) {
    result07 += i * (i + 1) * (i + 2);
}
msg07 += result07;
alert(msg07);
document.getElementById("result07").innerHTML = msg07;

// ข้อ 8
let msg08 = "1x3x5 + 3x5x7 + 5x7x9 + ... + 155x157x159 คือ ";
let result08 = 0;
for (let i = 1; i <= 155; i += 2) {
    result08 += i * (i + 2) * (i + 4);
}
msg08 += result08;
alert(msg08);
document.getElementById("result08").innerHTML = msg08;

//ข้อ 9 = 8(ซ้ำ)

// ข้อ 10
let msg10 = "ค่าที่รับมา: ";
let input10 = prompt("หาค่า min | input number: ");
let min = input10;
while (input10.trim().toLowerCase() !== "stop") {
    msg10 += input10 + " ";
    input10 = prompt("input number");
    if (Number(input10) < Number(min)) {
        min = input10
    }
}
msg10 += "<br> ค่าต่ำสุดคือ: " + min;
alert(msg10);
document.getElementById("result10").innerHTML = msg10;


// ข้อ 11
let msg11 = "ค่าที่รับมา: ";
let input11 = prompt("หาค่าmin 3 ค่า | input number: ");
let min1 = +input11;
let min2 = +input11;
let min3 = +input11;
while (input11.trim().toLowerCase() !== "stop") {
    input11 = Number(input11);
    if (input11 < min3 || min2 === min3 || min2 === min1) {
        if (input11 !== min3 && input11 !== min2 && input11 !== min1) {
            if (input11 < min1) {
                min3 = min2;
                min2 = min1;
                min1 = input11;
            } else if (input11 < min2) {
                min3 = min2;
                min2 = input11;
            } else {
                if (min2 === min1) {
                    min2 = input11;
                    min3 = input11;
                } else {
                    min3 = input11;
                }
            }
        }
    }
    msg11 += input11 + " ";
    input11 = prompt("input number");
}
msg11 += "<br> ค่าต่ำสุดคือ: " + min1 + " " + min2 + " " + min3;
alert(msg11);
document.getElementById("result11").innerHTML = msg11;


// ข้อ 12
let msg12 = "ค่าที่รับมา: ";
let input12 = prompt("หาค่า max min | input number: ");
let min12 = input12, max12 = input12;
while (input12.trim().toLowerCase() !== "stop") {
    input12 = Number(input12);
    if (input12 < min12) {
        min12 = input12;
    } else if (input12 > max12) {
        max12 = input12;
    }
    msg12 += input12 + " ";
    input12 = prompt("input number");
}
msg12 += "<br> ค่าต่ำสุดคือ: " + min12 + ", ค่าสูงสุดคือ: " + max12;
alert(msg12);
document.getElementById("result12").innerHTML = msg12;


// ข้อ 13
let msg13 = "ค่าที่รับมา: ";
let input13 = prompt("หาผลต่าง max min | input number: ");
let min13 = input13, max13 = input13;
while (input13.trim().toLowerCase() !== "stop") {
    input13 = Number(input13);
    if (input13 < min13) {
        min13 = input13;
    } else if (input13 > max13) {
        max13 = input13;
    }
    msg13 += input13 + " ";
    input13 = prompt("input number");
}
result13=max13-min13
msg13 += "<br> ผลต่าง max,min คือ " + result13;
alert(msg13);
document.getElementById("result13").innerHTML = msg13;


// ข้อ 14
let msg14 = "ค่าที่รับมา: ";
let input14 = prompt("หาค่าเฉลี่ย | input number: ");
let average, sum = 0, count14 = 0;
while (input14.trim().toLowerCase() !== "stop") {
    input14 = Number(input14);
    sum += input14;
    count14++;
    msg14 += input14 + " ";
    input14 = prompt("input number");
}
average=sum/count14;
msg14 += "<br> ค่าเฉลี่ยคือ: " + average;
alert(msg14);
document.getElementById("result14").innerHTML = msg14;


// ข้อ 15
function tenPower(getNum) {
    let powerCount = 0;
    while (getNum > 9) {
        powerCount++;
        getNum /= 10
    }
    return powerCount
}
function reverseNum(getNum,power) {
    let result = 0, num;
    for (let i = 0; i <= power; i++){
        num = Math.floor(getNum/10**(power-i));
        result += num*10**i;
        getNum -= num*10**(power-i);
    }
    return result;
}
let input15 = +prompt("กลับตัวเลข | input number");
let msg15 = "ค่าที่รับมา: "+input15;
let isMinus = false;
if (input15 < 0) {
    input15 = -input15;
    isMinus = true;
}

let result15=reverseNum(+input15, tenPower(input15));
if (isMinus) {result15=-result15}
msg15 += "<br> ค่าที่ได้คือ: " + result15;
alert(msg15);
document.getElementById("result15").innerHTML = msg15;

/*
//1.9.1
function random (min,max){
    return (max-min)*Math.random()+min;

}

alert(random(1,5));

//2.11.1
function ucFirst(string){
    return string[0].toUpperCase()+string.slice(1);
}
alert(ucFirst("hello world"));

//2.11.2
function checkSpam(text){
    text = text.toLowerCase();
    return text.includes("xxx")|| text.includes("viagra");
}
alert(checkSpam("javaXxViaGraabnde"))

//2.11.3
function truncate(str,maxlenght){
   return str.substring(0,maxlenght)+"..."
}
input2113=prompt("กรอกข้อความ: ");
maxLen=+prompt("จำนวนอักษรไม่เกิน: ")
alert(truncate(input2113,maxLen))

//2.11.4
function extractCurrencyValue(string,rate){
    return string.slice(1)*rate
}
alert(extractCurrencyValue("$120",30.5))
*/