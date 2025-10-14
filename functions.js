//10.14.25

//Lab1
function calculateRectangleArea(length, width){
	return length*width;
}
function calculateCircleArea(radius){
	return Math.PI*radius*radius;
}
//Test cases:
console.log(calculateRectangleArea(5, 10)); // 50
console.log(calculateCircleArea(3)); // 28.27 (approx)

//Lab2
function gradeCategory(score){
    if (score>=90){
        return "A";
    } else if (score >= 80){
        return "B";
    } else if (score >= 70){
        return "C";
    } else if (score >= 60){
        return "D";
    } else {
        return "F";
    }
}
//Test cases:
console.log(gradeCategory(95)); // "A"
console.log(gradeCategory(72)); // "C"
console.log(gradeCategory(58)); // "F"

//Lab3
function countVowels(word){
    let vowels = 0;
    for(let i=0; i<word.length; i++){
        if(word[i]='a'||word[i]='e'||word[i]='i'||word[i]='o'||word[i]='u'){
            vowels++;
        }
    }
    return vowels;
}
//Test cases:
console.log(countVowels("hello")); // 2
console.log(countVowels("Javascript")); // 3

//Lab4
function doubleNumbers(numbers){
    let newArr = numbers;
    for(let i=0; i<numbers.length; i++){
        let newArr[i] = numbers[i]*2;
    }
    return newArr;
}
//Test cases:
console.log(doubleNumbers([1, 2, 3])); // [2, 4, 6]
console.log(doubleNumbers([-1, 0, 5])); // [-2, 0, 10]

//Lab5
function fahrenheitToCelsius(f){
    return (f - 32) * 5 / 9;
}
function describeTemperature(f){
    let c = fahrenheitToCelsius(f);
    if (c<0){
        return "Freezing!";
    } else if (c<=20){
        return "Cold";
    } else if (c<=30){
        return "Warm";
    } else {
        return "Hot";
    }
}
//Test cases:
console.log(describeTemperature(32)); // "Freezing!"
console.log(describeTemperature(68)); // "Cold"
console.log(describeTemperature(95)); // "Hot"