function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = sum/3;
    return avg;
}

function createSentence(num, noun) {
    let sentence = "On average, a Berkeley student has" + " " + [num] + " " + [noun] + "s.";
    return sentence; 

}

function getRandomNum(max) {
  min = Math.ceil(0);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
}


let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z);

let sentence = createSentence(avg, "lion" );

console.log(sentence);
