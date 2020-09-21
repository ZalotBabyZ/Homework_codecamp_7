/*
//ข้อ1
function draw(int_n) {
    msg="";
    for (let i=1; i<=int_n; i++){
        msg+="*";
    }
    return msg;
}
*/

/*
//ข้อ2
function draw(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
       for (let j = 1; j <= int_n; j++) {
           msg += "*";
       }
       msg += "\n";
   }
   return msg;
}
*/

/*
//ข้อ3
function draw(int_n) {
    msg = "";
    for (let i = 1; i <= int_n; i++){
        for(let j = 1; j <= int_n; j++){
            msg += j;
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ4
function draw(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++){
        for(let j = 1; j <= int_n; j++){
            msg += i;
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ5
function draw(int_n) {
    msg= "";
    for (let i = int_n; i > 0; i--){
        for(let j = 1; j <= int_n; j++){
            msg += i;
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ6 แบบ 1 เน้นสูตร
function draw(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++){
        for (let j = 1; j <= int_n; j++){
            msg += j+(i-1)*int_n;
        }
        msg += "\n";
    }
    return msg;
}
*/
/*
//ข้อ6 แบบ 2 ใช้ count
function draw(int_n) {
    msg="";
    count=1;
    for (let i = 1; i <= int_n; i++){
        for (let j = 1; j <= int_n; j++){
            msg += count++;
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ7 แบบ 1 เน้นสูตร
function draw(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
        for (let j = 1; j <= int_n; j++){
            msg += int_n**2-int_n*(i-1)-j+1;
        }
        msg += "\n";
    }
    return msg;
}
*/
/*
//ข้อ7 แบบ 1 ใช้ count
function draw(int_n) {
    msg="";
    let count=int_n**2;
    for (let i = 1; i <= int_n; i++) {
        for (let j = 1; j <= int_n; j++){
            msg += count--;
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ8
function draw(int_n) {
    msg="";
    for ( i = 0; i < int_n; i++){
        msg += 2*i+"\n";
    }
    return msg;
}
*/

/*
//ข้อ9
function draw(int_n) {
    msg="";
    for ( i = 1; i <= int_n; i++){
        msg += 2*i+"\n";
    }
    return msg;
}
*/

/*
//ข้อ10
function draw(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++){
        for (let j = 1; j <= int_n; j++){
            msg += i*j;
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ11
function draw(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
       for (let j = 1; j <= int_n; j++) {
           if (j !== i) {
               msg += "*";
           } else {
               msg += "-";
           }

       }
       msg += "\n";
   }
   return msg;
}
*/

/*
//ข้อ 12
function draw(int_n) {
    msg="";
    for (let i = int_n; i > 0; i-- ){
        for (let j = 1; j <= int_n; j++){
            if (i !== j){
                msg += "*";
            } else {
                msg += "-";
            }
        }
        msg += "\n";
    }
    return msg;
}
*/





/*
//ข้อ13 แบบต้องเรียก drawStarUp
function draw(int_n){
    msg = "";
    msg += drawStarUp(int_n,0,"*","-");
    return msg;
}
*/
/*
//ข้อ13 แบบไม่เรียก drawStarUp
function draw(int_n) {
    msg="";
    for (let i = 1; i <= int_n; i++) {
        for (let j = 1; j <= int_n; j++) {
            if (j <= i) {
                msg += "*";
            } else {
                msg += "-";
            }
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ14 แบบต้องเรียก drawStarDown
function draw(int_n) {
    msg ="";
    msg += drawStarDown(int_n,0,"*","-");
    return msg;
}
*/

/*
//ข้อ14 แบบไม่เรียก drawStarDown
function draw(int_n){
    msg="";
    for (let i = int_n; i > 0; i--){
        for (let j = 1; j <= int_n; j++){
            if (j <= i){
                msg += "*";
            } else {
                msg += "-";
            }
        }
        msg += "\n";
    }
    return msg;
}
*/

/*
//ข้อ15 ต้องเรียก drawStarUp drawStarDown
function draw(int_n) {
    msg = "";
    msg += drawStarUp(int_n, 0, "*", "-");
    msg += drawStarDown(int_n, 1, "*", "-");
    return msg;
}
*/

/*
//ข้อ16 ต้องเรียก drawStarUp drawStarDown
function draw(int_n){
    msg = "";
    msg += drawStarUp(int_n,0,"i","-");
    msg += drawStarDown(int_n,1,"i","-");
    return msg;
}
*/



/*
//ข้อ17
function draw(int_n){
    msg ="";
    msg += drawDashDown(int_n,0,"-","*");
    return msg;
}
*/
/*
//ข้อ18
function draw(int_n){
    msg ="";
    msg += drawDashUp(int_n,0,"-","*");
    return msg;
}
*/
/*
//ข้อ19
function draw(int_n){
    msg ="";
    msg += drawDashDown(int_n,0,"-","*");
    msg += drawDashUp(int_n,1,"-","*");
    return msg;
}
*/
/*
//ข้อ20
function draw(int_n) {
    count = 1;
    msg = "";
    msg += drawDashDown(int_n, 0, "-", "count");
    msg += drawDashUp(int_n, 1, "-", "count");
    return msg;
}
*/
/*
//ข้อ21
function draw(int_n) {
    msg = "";
    msg += drawArrowUp(int_n, 0, "-", "*");
    return msg;
}
*/
/*
//ข้อ22
function draw(int_n){
    msg ="";
    msg += drawArrowDown(int_n,0,"-","*");
    return msg;
}
*/
/*
//ข้อ23
function draw(int_n){
    msg ="";
    msg += drawArrowUp(int_n,0,"-","*");
    msg += drawArrowDown(int_n,1,"-","*");
    return msg;
}
*/

//ข้อ24
function draw(int_n){
    count = 1;
    msg ="";
    msg += drawArrowUp(int_n,0,"-","count");
    msg += drawArrowDown(int_n,1,"-","count");
    return msg;
}


// ------------ เรียกโดย  function draw อีกที ไม่ต้องทำให้เป็น comment ------------
//ใช้กับ ข้อ13-16 | drawStarUp drawStarUp
function drawStarUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i) {
                    if (char1 === "i") {
                        msg += i;
                    } else if (char1 === "j") {
                        msg += j;
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "i") {
                        msg += i;
                    } else if (char2 === "j") {
                        msg += j;
                    } else {
                        msg += char2;
                    }
                }
            }
        }
        msg += "\n";
    }
    return msg;
}
function drawStarDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = int_n; i > 0; i--) {
        if (int_n - i >= skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i) {
                    if (char1 === "i") {
                        msg += i;
                    } else if (char1 === "j") {
                        msg += j;
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "i") {
                        msg += i;
                    } else if (char2 === "j") {
                        msg += j;
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;

}
//ใช้กับ ข้อ17-20 | drawDashUp drawDashUp
function drawDashDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (int_n - i >= j) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
function drawDashUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= int_n; j++) {
                if (j <= i - 1) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
//ใช้กับ ข้อ21-24 | drawArrowUp drawArrowUp
function drawArrowUp(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if ((j <= int_n + i - 1) && (j >= int_n - i + 1)) {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                } else {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
function drawArrowDown(int_n, skipLines, char1, char2) {
    msg = "";
    for (let i = 1; i <= int_n; i++) {
        if (i > skipLines) {
            for (let j = 1; j <= 2 * int_n - 1; j++) {
                if (j <= i - 1 || j >= 2 * int_n + 1 - i) {
                    if (char1 === "count") {
                        msg += countNum();
                    } else {
                        msg += char1;
                    }
                } else {
                    if (char2 === "count") {
                        msg += countNum();
                    } else {
                        msg += char2;
                    }
                }
            }
            msg += "\n";
        }
    }
    return msg;
}
//ใช้กับข้อ 20,24
function countNum() {
    return count++
}



// ------------ ใช้เรียกทุกข้อ ------------
let msg, count;
let int_n = +prompt("Insert int_n here");
alert(draw(int_n));



/*
สรุป pitfall ที่พบบ่อยจากการทำบฝ.นี้
   let ชื่อตัวแปลซ้ำ
   for (let i อย่าลืม let
   i++ / i--
   ใช้ i++  ใน loop j
   prompt อย่าลืมทำให้เป็น Number

*/