// java script의 object 는 다른 언어의 class 와 비슷하다고 생각된다. key and value로 구성된다.
// 다시보니, 파이썬의 dictionary 와 비슷하다.
// object 안에 키로 작성한 것은 숫자로 작성했더라도 전부 문자열로 변환하여 저장된다.
// 객체안에 객체를 중첩할 수 있다.

// object는 key : value, ... 식으로 구성된다. 
const cheon = {
    age: 26,
    name: 'sejun',
    avgSleepingTime: 8,
    exams: { midterm: 92, final: 95 }
};

//object.변수명 으로 접근 가능
console.log(cheon.age);
//["변수이름"] 으로도 접근 가능
// 이런식으로 작성하면 [] 안에 식을 넣을 수 있다. 'a' + 'ge' 이런식으로 혹은 .lowercase() 등을 사용할 수 있음
console.log(cheon['age']);


//기존 내용 변경하는 법
cheon.age = 27;
// 새로운 내용 추가하는 법
cheon.hasGirlfriend = true