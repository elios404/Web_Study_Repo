// 자바 스크립트에서 배우는 기본적인 문법들을 작성하는 파일
// 자바 스크립트는 변수를 정의하는 방법이 2가지 이다. 숫자, 문자열, 참 거짓 상관 없이
let first = 1;
const pi = 3.14;
let isGameOver = false;
// let으로 기본적인 변수 정의, const 로 상수 정의

// NaN 은 not a number 이라는 뜻으로 0으로 나누는 등의 에러 상황에 리턴되는 값이지만, 기본적으로 숫자 취급 된다.
let exp_nan = 0 / 0;

// 자바스크립트에서도 += ++ 등을 사용 가능하다
let player = 0;
player += 1;
player++;

// 자바 스크립트는 변수 이름을 작성할 때 파이썬 처럼 _를 활용하지 않고 camel writing 을 사용한다. game_over X, gameOver --> 띄어쓰기 부분을 대문자 처리

//String
//문자열을 "", ''로 묶어야 한다. 문자열과 숫자를 연산하면 숫자를 문자열 처럼 생각하고 연산한다. 인덱스로 접근 가능하다.
//문자열을 인덱스로 접근할 때 길이보다 넘어서는 인덱스 번호를 []에 입력해도 에러가 뜨지 않는다. 단지 결과가 나오지 않는다. --> 배열에서도 같은가? index error 가 없는 건가?
//변수이름.length 를 통해서 문자열의 길이를 알 수 있다. 또한 문자열을 + 를 통해서 더할 수 있다. extend 할 수 있다.
//문자열을 배열과 달리 인덱스를 통해서 1개만 변경할 수 없다. 변수에 문자열을 통째로 새로 정의해야 한다.

//Method
let msg = 'I am king';
let yellMsg = msg.toUpperCase();

let angry = 'LeAvE mE aLoNe!';
angry.toLowerCase(); //그러나 angry의 실제 값은 변화하지 않음.

let greeting = '    leave me alone      ';
greeting.trim() // 'leave  me alone' 으로 앞 뒤 공백을 없애준다.

//method 는 연속으로 사용할 수 있다.
let upperGreeting = greeting.toUpperCase().trim();

//method 는 argument를 전달해야 하는 경우도 있다.
let tvShow = 'catdog';
tvShow.indexOf('cat'); // 0을 리턴한다.
tvShow.indexOf('dog'); // 3을 리턴한다.
tvShow.indexOf('z'); //값이 없는 경우 -1을 리턴한다.
//indexOf 는 제일 처음 등장하는 곳의 인덱스를 리턴한다.

//slice method
let str = 'Super power';
str.slice(0, 5); // 'Super'를 리턴한다.
str.slice(5); // ' power'를 리턴한다.
//파이썬의 슬라이싱과 같다. 단지 slice라는 함수를 사용해야 할 뿐, 파이썬 처럼 음수도 사용할 수 있다. 거꾸로 가는 방향

//replace
let annoyingLaugh = 'teehee so funny! teehee!';
annoyingLaugh.replace('teehee', 'haha') //특정 단어를 다른 단어로 바꾼다.
//--> 'haha so funny! teehee!'로 출력된다. 이때 제일 처음 등장하는 단어만 바꾼다.

let laugh = 'lol';
laugh.repeat(2); // 'lollol'로 문자열 반복


//Template Literals --> python f-string 같은 것
let product = 'Artichoke';
let price = 3;
let qty = 5;
//"You bought {qty} {product}. Total price is {price*qty}" 식으로 입력하고 싶다면?
// 이를 하기 위해서는 문자열을 tab 키 위에 ` 사이에 문자열을 넣어야 한다. 한글일 땐 ₩로 입력됨. `사용 필요
let sentence = `You bought ${qty} ${product}. Total price is ${price * qty}.`;
//`` 안에 ${}를 통해서 변수나 식을 넣는다. 메소드도 넣을 수 있다.


// null 과 undefined
// null : 값을 일부로 지정하지 않는 것 --> 나중에 값을 추가할 것이지만, 현재 변수를 정의할 때 명시적으로 null로 표현할 수 있다.
// undefined : 값이 아직 정해지지 않은 상태(변수 등)


//Math object --> 객체 : 여러 상수와 함수를 정의해 놓은 클래스
Math.PI; // 3.141592
Math.round(4.9); // 5 --> 반올림하기
Math.abs(-456); // 456 --> 절댓값 반환하기
Math.pow(2, 5); // 32 2의 5승--> 제곱하기
Math.floor(3.9999); // 3 --> 내림하기
Math.ceil(3.2222); // 4 --> 올림하기
//random() 을 활용가능
Math.random() //을 활용하면 랜덤 수를 얻을 수 있다.
//자연수를 얻으려면?
const step1 = Math.random();
const step2 = step1 * 10;
const step3 = Math.floor(step2);
const step4 = step3 + 1;
//이를 통해서 1에서 10 사이의 랜덤 정수를 얻을 수 있다. 혹은 한 줄로
let randomNumber = Math.floor(Math.random() * 10) + 1;


//Boolean Logic
//비교연산자는 대부분 같으나 === : strictly same, !== strictly different 는 잘 안 써봄
//문자열 또한 >, < 등으로 비교할 수 있다. 아마 아스키 코드 값을 기준으로 결과를 낼 듯 하다. --> 유니코드 값을 기준으로 한다.
// == 는 값이 같다면 그 값을의 타입을 신경쓰지 않는다. 만약 비교하는 값이 타입이 다르다면 강제로 타입을 하나로 맞춰서 비교한다.
1 == "1"; //이 값은 true 이다. 다른 언어에서는 같지 않지만,
0 == '';
0 == false;
null == undefined;
// 전부 true 이다. 사실은 다른 용도로 사용하지만
// 그래서 === 3중등호를 사용해야 한다. 그럼 타입을 바꾸지 않고 타입까지 같은지 비교한다.
// 결론적으로 java script에서 비교할 때 대부분의 경우 삼중 등호를 사용한다!



// console.log() --> 다른 언어에서 print의 역할
// console 또한 object
console.log("hello")
console.warn("warning!!")
console.error("It's an erroe")

alert("alert!") // 웹 페이지에 경고 메세지가 팝업으로 뜨지만, 콘솔창에는 뜨지 않는다.

prompt("input number : ") //팝업 창을 띄워서 사용자에게 입력을 받고 입력 받는 값을 리턴한다. 이를 변수에 저장 가능하다.
//similar with python input func

parseInt("123") // 정수 123으로 바꾼다. 문자와 숫자를 문자열로 입력 받으면 숫자 부분만 정수로 뽑아내려고 한다.