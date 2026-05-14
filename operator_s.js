var x = 12345
let y = 6.789
const TITLE = "javascript & node.js"

//กำหนดค่าต่อเนื่องแบบโซ่
var a = b = c = 10

// + - * / % ** (บวก ลบ คูณ หาร หารเอาเศษ ยกกำลัง)
a = 8 % 3 //Mod
console.log(a)
b =b ** a
console.log(b)

var radius = 10
var circleArea = 3.14 * (radius ** 2)
console.log (circleArea)

let T = "100" + "10"
console.log(T)

//คำนวณแล้วกำหนดค่า
// += -= *= /= %= **=
radius += 10 
console.log("radius =", radius)

//การเพิ่มค่าและการลดค่า
// ++ -- 
radius ++ 
console.log("radius =", radius)
++radius    //perfix
radius--    //postfix

//การเปรียบเทียบ
// == != > < >= <=

var yui = ("pretty" == "single")
    console.log(yui)

//ทางตรรกะ
// && and EX. a && b
// || or EX. a || b
// ! not EX. a ! b


//โอเปอเรเตอร์แบบ Ternary
// หรือชื่อเรียกอื่นๆเช่น conditional operator
//ตัวแปร ช (เงื่อนไข) ? ค่าที่ส่งกลับกรณีเงื่อนไขที่เป็นจริง : ค่าที่ส่งกลับกรณีเงื่อนไขเป็นเท็จ
var OP = (1 > 0) ? true : false
console.log("OP = ",OP )
let login = 'admin'
let password = '1234'
let msg = (login == '' || password == '' ) ? 'Please enter...' : 'OK'
console.log("msg =", msg)


// ค่า null และ undefined
// null จงใส่ว่าเป็นค่าว่าง
// undefined ค่าว่างที่ระบบตั้งให้ กรณีที่ไม่ได้กำหนดค่าให้กับตัวแปร


// ค่า NaN (not a number)
console.log(30 - 'minute');
console.log("hello" * 'me');
console.log(0/0);
console.log(NaN + 10);
console.log(undefined * 10 );




