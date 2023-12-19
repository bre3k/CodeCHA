function getGrade() {
  try {
      let marks = parseFloat(prompt("Enter student marks (0-100):"));

      if (isNaN(marks) || marks < 0 || marks > 100) {
       console.log("Invalid input. Marks should be between 0 and 100.");
          return;
      }

      let grade = marks > 79 ? 'A' : marks > 59 ? 'B' : marks > 49 ? 'C' : marks > 39 ? 'D' : 'E';
      console.log("The grade is: " + grade);
  } catch (error) {
      console.log("An error occurred. Please enter a numeric value.");
  }
}

getGrade();