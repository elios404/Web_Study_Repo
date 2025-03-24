//모든 자바스크립트의 값들은 다음의 경우를 제외하고는 truthy 이다!
//1. false  2. 0    3. ""(empty string)   4. null   5. undefined    6.NaN
//다른 경우는 falsy 이다.

//확인하고자 하는 변수 등의 값이 있는지 확인하는 방법 중 하나이다.

const userInput = prompt("Enter something");

if (userInput) {
    console.log("TRUTHY!")
} else {
    console.log("FALSY!")
}

// if (0) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (NaN) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (undefined) {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }

// if (' ') {
//     console.log("TRUTHY")
// } else {
//     console.log("FALSY")
// }