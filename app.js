//GPA CALCULATOR CREATED BBY P SIVA KRISHNA REDDY OF R.M.K CET .

//define UI VARIABLES

const form = document.querySelector("#gpa-form");
const lder = document.querySelector("#loading");
const res = document.querySelector("#results");
const gpaOP = document.getElementById("GradePoints");
form.addEventListener('reset',function(e){
res.style.display = "none";
});

form.addEventListener("submit", function(e) {
  // Hide results
  res.style.display = "none";

  // Show loader
  lder.style.display = "block";

  //hide note
  document.getElementById("note").style.display = "none";

  setTimeout(calculateGpa, 1000);

  e.preventDefault();
});

// CAL GPA METHOD
function calculateGpa(e) {
  // UI VARIABLE
  // GRADE POINTS
  const sub1 = document.getElementById("SUB1");
  const sub2 = document.getElementById("SUB2");
  const sub3 = document.getElementById("SUB3");
  const sub4 = document.getElementById("SUB4");
  const sub5 = document.getElementById("SUB5");
  const sub6 = document.getElementById("SUB6");
  const sub7 = document.getElementById("SUB7");
  const sub8 = document.getElementById("SUB8");
  const sub9 = document.getElementById("SUB9");
  // credits
  const credit1 = document.getElementById("CREDITS1");
  const credit2 = document.getElementById("CREDITS2");
  const credit3 = document.getElementById("CREDITS3");
  const credit4 = document.getElementById("CREDITS4");
  const credit5 = document.getElementById("CREDITS5");
  const credit6 = document.getElementById("CREDITS6");
  const credit7 = document.getElementById("CREDITS7");
  const credit8 = document.getElementById("CREDITS8");
  const credit9 = document.getElementById("CREDITS9");

  const gp1 = parseFloat(sub1.value) * parseInt(credit1.value);
  const gp2 = parseFloat(sub2.value) * parseInt(credit2.value);
  const gp3 = parseFloat(sub3.value) * parseInt(credit3.value);
  const gp4 = parseFloat(sub4.value) * parseInt(credit4.value);
  const gp5 = parseFloat(sub5.value) * parseInt(credit5.value);
  const gp6 = parseFloat(sub6.value) * parseInt(credit6.value);
  const gp7 = parseFloat(sub7.value) * parseInt(credit7.value);
  const gp8 = parseFloat(sub8.value) * parseInt(credit8.value);
  const gp9 = parseFloat(sub9.value) * parseInt(credit9.value);

  const totCred =
    parseInt(credit1.value) +
    parseInt(credit2.value) +
    parseInt(credit3.value) +
    parseInt(credit4.value) +
    parseInt(credit5.value) +
    parseInt(credit6.value) +
    parseInt(credit7.value) +
    parseInt(credit8.value) +
    parseInt(credit9.value);

  const resultgpa =
    (gp1 + gp2 + gp3 + gp4 + gp5 + gp6 + gp7 + gp8 + gp9) / totCred;
  if (resultgpa < 5.0) {
    showError("GPA IS TOO LOW! Work Harder");
  }
  if (isFinite(resultgpa)) {
    gpaOP.value = resultgpa.toFixed(2);
    //show res
    res.style.display = "block";

    // hide loader
    lder.style.display = "none";
  } else {
    showError("CHECK GPA POINTS AGAIN");
  }
}

// Show Error
function showError(error) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Hide loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, res);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
}

// Clear error
function clearError() {
  document.querySelector(".alert").remove();
}
