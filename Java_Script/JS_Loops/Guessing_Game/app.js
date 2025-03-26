let maximum = parseInt(prompt("Enter the maximum number! Random number would be given between 1 to maximum"));
//이때 숫자가 아닌 값을 입력하면 parseInt 를 거친 뒤에 NaN이 반환되기에

while (!maximum) { //여기서 숫자가 입력되었는지를 확인할 수 있다. Truthy or Falsey
    maximum = parseInt(prompt("Enter a valid number!"));
}

const answer = Math.floor(Math.random() * maximum) + 1; //페이지를 새로고침 하기 전까지 변하지 않기에 const로 정의
console.log(answer);
let attempts = 1;

let guess = parseInt(prompt("Enter your guessing : "));
while (guess !== answer) {
    attempts++;
    if (guess > answer) {
        guess = parseInt(prompt("Too high, Enter your gussing : "));
    }
    else if (guess < answer) {
        guess = parseInt(prompt("Too low, Enter your gussing : "));
    }
}

let game_end = prompt(`Congrat! answer is ${answer}! You use ${attempts} turns! Enter 'quit' if u want to end this game`);
while (true) {
    if (game_end === "quit") break;
    else game_end = prompt(`Congrat! answer is ${answer}! You use ${attempts} turns! Enter 'quit' if u want to end this game`);
}