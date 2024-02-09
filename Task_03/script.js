function handleSubmit(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Display entered data
    document.getElementById("displayedName").textContent = name;
    document.getElementById("displayedEmail").textContent = email;

    // Show the registered user data section
    document.getElementById("userData").classList.remove("hidden");
}
