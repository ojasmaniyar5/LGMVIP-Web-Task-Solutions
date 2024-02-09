function getUsers() {
    var loader = document.getElementById("loader");
    var userGrid = document.getElementById("userGrid");

    loader.style.display = "block";
    userGrid.innerHTML = ""; // Clear previous user cards

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            loader.style.display = "none";
            userGrid.style.display = "grid";

            users.forEach(user => {
                var userCard = document.createElement("div");
                userCard.className = "user-card";
                userCard.innerHTML = `
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                    <p>${user.phone}</p>
                `;
                userGrid.appendChild(userCard);
            });
        })
        .catch(error => {
            loader.style.display = "none";
            console.error('Error fetching users:', error);
        });
}
