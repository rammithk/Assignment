window.onload = function () {
  document.querySelector("#target-section").scrollIntoView({
    behavior: "smooth",
  });
};

let teachers = document.getElementById("teachers");
let students = document.getElementById("students");
let winners = document.getElementById("winners");
let awards = document.getElementById("awards");

let valueStudent = 0;
let valueTeacher = 0;
let valueWinner = 0;
let valueAwards = 0;

let studentId;
let teacherId;
let winnerId;
let awardId;

//students

let container = document.getElementById("focus");
container.addEventListener("mouseenter", () => {
  studentId = setInterval(() => {
    if (valueStudent < 5) {
      valueStudent++;
      students.textContent = valueStudent;
    }
  }, 400);
});
container.addEventListener("mouseleave", () => {
  students.textContent = 0;
  valueStudent = 0;
  clearInterval(studentId);
});

//teachers
container.addEventListener("mouseenter", () => {
  teacherId = setInterval(() => {
    if (valueTeacher < 150) {
      valueTeacher++;
      teachers.textContent = valueTeacher;
    }
  }, 10);
});
container.addEventListener("mouseleave", () => {
  teachers.textContent = 0;
  valueTeacher = 0;
  clearInterval(teacherId);
});

//winners
container.addEventListener("mouseenter", () => {
  winnerId = setInterval(() => {
    if (valueWinner < 45) {
      valueWinner++;
      winners.textContent = valueWinner;
    }
  }, 20);
});
container.addEventListener("mouseleave", () => {
  winners.textContent = 0;
  valueWinner = 0;
  clearInterval(winnerId);
});

//awards
container.addEventListener("mouseenter", () => {
  awardId = setInterval(() => {
    if (valueAwards < 250) {
      valueAwards++;
      awards.textContent = valueAwards;
    }
  }, 10);
});
container.addEventListener("mouseleave", () => {
  awards.textContent = 0;
  valueAwards = 0;
  clearInterval(awardId);
});
