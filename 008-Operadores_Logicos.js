/* 
OPERADORES LOGICOS
E(AND)- && (Java script) - ((x<10) && (x>0))
OU (OR) - || (Java script) - ((x<10) || (x>0))
Negação - ! (Java Script) - (!true = false)
*/

//(AND)
let a = 5;
let b = 7;

if (a >= b && a === b) {
    console.log("a é maior e igual a b")
} else {
    console.log("a não é maior e igual a b")
}
// (OR)
let c = 8;
let d = 7;

if (c >= d || c === d) {
    console.log("c é maior e igual a d")
} else {
    console.log("c não é maior e igual a d")
}
//Negação
let e = 9;
let f = 7;

if (!(e < f || e == f)) {
    console.log("e é maior e igual a f")
} else {
    console.log("e não é maior e igual a f")
}