const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

// 1. 딕셔너리 같은 리터럴 오브젝트를 순회할 땐 of 가 아니라 in 을 쓴다. 근데 in 은 요즘에는 거의 안 쓴다고 한다.
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;

//  2. 리터럴 오브젝트에서 Object.keys 나 Object.values 를 통해서 각 키들과 값들을 배열로 반환할 수 있다. 그럼 이를 of 로 순환한다.
let names = Object.keys(testScores);
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}
console.log(total / scores.length)

