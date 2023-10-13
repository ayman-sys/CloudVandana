// script.js

function submitForm() {
    // Validate form fields here (e.g., check if they are filled correctly)

    // If validation passes, show the popup
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    // Get form values
    var values = {
        "First Name": document.getElementById("firstName").value,
        "Last Name": document.getElementById("lastName").value,
        "Date of Birth": document.getElementById("dob").value,
        "Country": document.getElementById("country").value,
        "Gender": Array.from(document.querySelectorAll('input[name="gender"]:checked')).map(e => e.value).join(", "),
        "Profession": document.getElementById("profession").value,
        "Email": document.getElementById("email").value,
        "Mobile Number": document.getElementById("mobile").value
    };

    // Display values in popup
    var popupContent = document.getElementById("popupContent");
    popupContent.innerHTML = "";
    for (var key in values) {
        var entry = document.createElement("div");
        entry.innerHTML = "<strong>" + key + ":</strong> " + values[key];
        popupContent.appendChild(entry);
    }
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}
