const $display = document.getElementById("display");
let a="";
let operator="";
let b="";
let hasah="";
const onSelectNumber = (number) =>{
    if(operator){
        b+=number;
        $display.value+=number;
        console.log("b",b);
        return;
    }
    a+=number;
    $display.value=a;
    console.log("a",a);
}

const onSelectOperator = (selectedOperator) => {
    operator = selectedOperator;
    $display.value +=operator;
    console.log(selectedOperator);
}

const calculat = ()=> {
    if(operator==="+"){
        $display.value=Number(a) + Number(b);
        a ="";
        b ="";
        a = a + $display.value;
        console.log("reaset a", a);
        return;
    }
    if(operator === "-"){
        $display.value= Number(a) - Number(b);
        a ="";
        b ="";
        a = a + $display.value;
        console.log("hasah a", a);
        return;
    }
    if(operator === "/"){
        $display.value= Number(a) / Number(b);
        a="";
        b="";
        a = a + $display.value;
        return;
    }
    if(operator === "x"){
        $display.value= Number(a) * Number(b);
        a="";
        b="";
        a = a + $display.value;
        return;
    }
    if(operator === "%"){
        $display.value= (Number(a) / 100) * (b);
        a="";
        b="";
        a = a + $display.value;
        return;
    }
}
const reset=()=>{
    $display.value="0";
    a="";
    b="";
    operator="";
}
const negative = () => {
    hasah="-"
    a=hasah+a;
}
// // let seven = document.getElementById("seven");
// // console.log("seven", seven);
// let input = document.getElementById("nvvr");
// let a = "";
// let b = "";
// let op = "";
// let surug = "";
// function count(j) {
//   if (op) {
//     b = b + j;
//     input.value = a + op + b;
//     console.log("aaa", a, op, b);
//     return;
//   }

//   a = a + j;
//   input.value = a;
//   console.log("baba", a);
// }
// function reset() {
//   a = "";
//   b = "";
//   op = "";
//   input.value = "";
// }
// function add(ad) {
//   op = ad;
//   input.value = a + op;

//   console.log("opp", op);
//   console.log(input.value);
// }
// function tentsvv() {
//   if (op === "+") {
//     input.value = Number(a) + Number(b);
//     return;
//   }
//   if (op === "-") {
//     input.value = Number(a) - Number(b);
//     return;
//   }
//   if (op === "%") {
//     input.value = (Number(a) / 100) * b;
//     return;
//   }
//   if (op === "/") {
//     input.value = Number(a) / Number(b);
//     return;
//   }
//   if (op === "x") {
//     input.value = Number(a) * Number(b);
//     return;
//   }
// }
// function negative() {
//   surug = "-";
//   a = surug + a;
//   input.value = a;
// }

