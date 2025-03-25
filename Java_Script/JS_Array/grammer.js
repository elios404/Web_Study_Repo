// java script 에서 배열을 정의하는 방법
let array = [1, true, NaN, undefined, 'hello', 3.141692, null]
// 하나의 배열에 여러 타입을 넣을 수 있고, 이는 [] 와 인덱스 번호로 접근 가능하다.
// 배열의 길이는
let l = array.length; //로 가능하다.

//배열에 사용할 수 있는 여러 메소드
// push : 끝에 넣기, pop : 끝에서 빼기 --> Stack 처럼 작동
// shift : 시작 부분에서 제거, unshift : 시작 부분에 넣기

//추가 메소드

// concat : merge arrays 여러 배열을 합치기
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2); // [1,2,3,4,5,6]

// includes : look for a value 값이 있는지 찾기
arr1.includes(1); // True
arr1.includes(4); // False

// indexOf : 배열 안에 입력받는 값의 인덱스를 리턴
arr1.indexOf(2); // 2
arr2.indexOf(5); // 2
arr1.indexOf(5); // -1, 없으면 -1을 리턴

// join : creates a string from an array, 배열 안의 값을 차례대로 문자열로 반환하기, ()안의 입력 값으로 각 요소 사이를 뭐로 채울지 정할 수 있음
let num_str = arr3.join(" ");
//기본 ()으로 두면 , 로 연결됨

// reverse : 배열을 거꾸로 뒤집기 !! 원본을 바꾼다 !!
arr3.reverse() // [6,5,4,3,2,1] 로 원본을 바꾼다.

// slice : copies a portion of an array , 슬라이싱을 통해 배열의 일부분을 리턴
const mid_arr3 = arr3.slice(1, 5) //[2,3,4,5] 시작 인덱스를 포함하고, 끝 인덱스를 포함하지 않음 파이썬의 range 함수처럼
//like Python I can use negative number, starts from the end

// splice : remove/replaces element 기존의 배열을 변경함.
const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb'); // --> ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May'); // --> ['Jan', 'Feb', 'March', 'April', 'May']
//(어느 인덱스 위치에 넣을 것인지, ?몇 개의 요소를 삭제할 것인지, ?넣을 요소) 
//? 인 부분은 꼭 넣지는 않아도 됨.

// sort : sorts an array, 배열을 정렬하기
arr3.sort() //이는 단순하게 모든 배열 안의 요소를 문자열로 바꾸고 유니코드 값을 통해서 정렬한다. --> 생각보다 유용하지 않음. 조건을 추가해서 사용해야함.
//사전 순으로 정렬한다. 사전 순으로 정렬이 필요할 땐 나쁘지 않을 수도?


//배열을 === 나 == 연산자로 비교할 때 안에 있는 값을 기반으로 같은지 다른지를 비교하지 않는다.
//따라서 배열간에 등호로 비교할 땐 값아 보여도 항상 false가 나온다.
//등호는 메모리 안에 어떤 값이 있는지 비교하는데, 배열은 배열의 참조 주소를 저장한다. 그리고
//참조 주소는 다르기에 항상 false 가 나온다.

// !! 따라서 배열은 const로 처음 정의한다! --> 그럼에도 배열 안에 내용은 바꿀 수 있다.