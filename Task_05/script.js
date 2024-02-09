function calculateResult(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var subject1 = parseFloat(document.getElementById("subject1").value);
    var subject2 = parseFloat(document.getElementById("subject2").value);
    var subject3 = parseFloat(document.getElementById("subject3").value);
    var subject3 = parseFloat(document.getElementById("subject4").value);

    var totalMarks = subject1 + subject2 + subject3;
    var average = totalMarks / 3;

    // Display result
    document.getElementById("resultName").textContent = name;
    document.getElementById("totalMarks").textContent = totalMarks;
    document.getElementById("average").textContent = average.toFixed(2);

    // Show the result output section
    document.getElementById("resultOutput").classList.remove("hidden");
}
