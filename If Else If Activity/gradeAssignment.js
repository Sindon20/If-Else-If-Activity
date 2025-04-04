let score = prompt("Enter your score:");
score = Number(score);
if (score >= 90) {
    console.log("You grade is: Excellent");
} else if (score >= 80 && score <= 89) {
    console.log("Your grade is: Good");
}else if (score >= 70 && score <= 79) {
    console.log("Your grade is: Fair");
}else if (score < 70 && score >= 0) {
    console.log("Your grade is: Needs Improvement");
}else {
    console.log("Please enetr a valid score between 0 and 100");
}