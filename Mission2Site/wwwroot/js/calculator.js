
// Calculator Functions


//// Grade Alert 
$("#calcButton").click(function () {
    alert("Assignments: " + $("#numAssignments").val() +
        ", Group Projects: " + $("#numGroupProject").val() +
        ", Quizzes: " + $("#numQuizzes").val() +
        ", Exams: " + $("#numExams").val() +
        ", Intex: " + $("#numIntex").val()
        +
        ", Percentage Grade: " + $("#numIntex").val() + "#numExams").val()
        + $("#numQuizzes").val() + $("#numGroupProject").val() + $("#numAssignments").val() + "."
})

////// Function for calculating grades 
////const calculate = () => {
//$("#calcButton").click(function () {
//    // Assign input to variables
//    let Assignments = document.querySelector("#numAssignments").value;
//    let GroupProjects = document.querySelector("#numGroupProject").value;
//    let Quizzes = document.querySelector("#numQuizzes").value;
//    let Exams = document.querySelector("#numExams").value;
//    let Intex = document.querySelector("#numIntex").value;
//    let grades = "";

//    // Convert string input to num values 
//    let totalgrades =
//        parseFloat(Assignments) +
//        parseFloat(GroupProjects) +
//        parseFloat(Quizzes) +
//        parseFloat(Exams) +
//        parseFloat(Intex);

//    // Checking the condition for the providing the 
//    // grade to student based on percentage
//    let percentage = totalgrades;
//    if (percentage <= 100 && percentage >= 94) {
//        grades = "A";
//    } else if (percentage <= 94 && percentage >= 90) {
//        grades = "A-";
//    } else if (percentage < 90 && percentage >= 87) {
//        grades = "B+";
//    } else if (percentage < 87 && percentage >= 84) {
//        grades = "B";
//    } else if (percentage < 84 && percentage >= 80) {
//        grades = "B-";
//    } else if (percentage < 80 && percentage >= 77) {
//        grades = "C+";
//    } else if (percentage < 77 && percentage >= 74) {
//        grades = "C";
//    } else if (percentage < 74 && percentage >= 70) {
//        grades = "C-";
//    } else if (percentage < 70 && percentage >= 67) {
//        grades = "D+";
//    } else if (percentage < 67 && percentage >= 64) {
//        grades = "D";
//    } else if (percentage < 64 && percentage >= 60) {
//        grades = "D-";
//    } else if (percentage < 59) {
//        grades = "E";
//    } else {
//        grades = "Error. Re-Calculate.";
//    }
//    // Checking the values are empty if empty than
//    // show please fill them 
//    if (Assignments == "" || GroupProjects == ""
//        || Quizzes == "" || Exams == ""
//        || Intex == "") {
//        document.querySelector("#showdata").innerHTML
//            = "Please enter all the fields";
//    } else {

//        //// Checking the condition for the fail and pass
//        //if (percentage >= 0) {
//        //    document.querySelector(
//        //        "#showdata"
//        //    ).innerHTML =
//        //        `Out of 100% your total is  ${totalgrades}. <br> 
//        //Your grade is ${grades}.`;
//        //} else {
//        document.querySelector("#showdata").innerHTML =
//            `Out of 100% your total is  ${totalgrades}. <br> 
//        Your grade is ${grades}.`;
//    }
//}
//})