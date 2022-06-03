//see instructions here - https://www.hackerrank.com/challenges/grading/problem
function gradingStudents(grades) {
    // Write your code here
    let finalGrade = [];
    grades.forEach(grade => {
      if (grade < 38) finalGrade.push(grade);
      else {
        for (let i = grade; ; i++) {
          if (i % 5 == 0) {
              if (i - grade < 3) finalGrade.push(i);
              else finalGrade.push(grade);
              break;
          }
        }
      }
    });
    return finalGrade;
}
