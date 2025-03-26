let students = [];
let attendance = {};
let grades = {};

document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('studentName').value;
    let age = document.getElementById('studentAge').value;
    let grade = document.getElementById('studentGrade').value;

    let student = {
        id: students.length + 1,
        name: name,
        age: age,
        grade: grade
    };

    students.push(student);
    updateStudentList();
    clearForm();
});

document.getElementById('markAttendance').addEventListener('click', function() {
    let studentId = prompt('Enter Student ID to mark attendance:');
    let student = students.find(s => s.id == studentId);

    if (student) {
        attendance[studentId] = attendance[studentId] ? attendance[studentId] + 1 : 1;
        document.getElementById('attendanceStatus').innerHTML = ${student.name} has attended ${attendance[studentId]} classes.;
    } else {
        alert('Student not found!');
    }
});

document.getElementById('addGrade').addEventListener('click', function() {
    let studentId = document.getElementById('studentIdForGrade').value;
    let grade = document.getElementById('grade').value;

    if (studentId && grade) {
        grades[studentId] = grades[studentId] || [];
        grades[studentId].push(grade);

        document.getElementById('gradeStatus').innerHTML = Grade added for student with ID: ${studentId};
    } else {
        alert('Please enter both student ID and grade.');
    }
});

function updateStudentList() {
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    students.forEach(student => {
        const li = document.createElement('li');
        li.textContent = ${student.name} - Age: ${student.age}, Grade: ${student.grade};
        studentList.appendChild(li);
    });
}

function clearForm() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentAge').value = '';
    document.getElementById('studentGrade').value = '';
}
