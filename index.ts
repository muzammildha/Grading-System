// Grading System

let totalMarks:number = 850;

let obtainedMarks:number = 736;

let percentage:number = (obtainedMarks * 100) / totalMarks ;

console.log(percentage)

if (percentage >= 90 &&  percentage <= 100 ){
     console.log("Your Grade Is Merit");
} else if (percentage >= 80 && percentage <= 89){
    console.log("Your Grade Is A1");
} else if (percentage >= 70 && percentage <= 79){
    console.log("Your Grade Is A");
} else if (percentage >= 60 && percentage <=69){
    console.log("Your Grade Is B");
} else if (percentage >= 50 && percentage <= 59){
    console.log("Your Grade Is C");
} else if (percentage >= 40 && percentage <= 49){
    console.log("Your Grade Is D");
} else{
    console.log("You Are Ungraded");
};


