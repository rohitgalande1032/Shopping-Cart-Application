// Fetch users from localStorage
let users = JSON.parse(localStorage.getItem("users"));

// Ensure users is always an array
if (!Array.isArray(users)) {
    users = []; // Initialize as an empty array if not found or invalid
}

let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let error = document.getElementById("error");

if (currentUser) {
    console.log("Edit the user....");

    let user = users.find(user => user.email === currentUser.email); // Find user by email

    console.log(user);
    
    if (user) {
        document.getElementById("firstname").value = user.firstName;
        document.getElementById("lastname").value = user.lastName;
    }

    // Edit firstName and lastName
    document.getElementById("saveInfo").addEventListener("click", (event) => {
        event.preventDefault();
        let updatedFirstname = document.getElementById("firstname").value;
        let updatedLastname = document.getElementById("lastname").value;

        user.firstName = updatedFirstname;
        user.lastName = updatedLastname;

        // Update the user in the array
        localStorage.setItem("users", JSON.stringify(users));

        error.textContent = "User updated successfully!";
        error.style.color = "green";
    });

} else {
    window.location.href = "/login/login.html";
}

// Edit Password


document.getElementById("changePass").addEventListener("click", (event) => {
    event.preventDefault();
    let oldPassword = document.getElementById("oldPassword");
    let newPassword = document.getElementById("password");
    let confirmNewPassword = document.getElementById("confirmPassword");
    let message = document.getElementById("success");
    if (oldPassword.value === "" || newPassword.value === "" || confirmNewPassword.value === "") {
        message.textContent = "Enter all fields";
        message.style.color = "red";
    } else if (newPassword.value === confirmNewPassword.value) {
        let user = users.find(user => user.email === currentUser.email);
        if (user) {
            if (oldPassword.value !== user.password) {
                message.textContent = "Old password is incorrect";
                message.style.color = "red";
            } else if (newPassword.value === user.password) {
                message.textContent = "New password should be different from the old password";
                message.style.color = "red";
            } else {
                user.password = newPassword.value;
                localStorage.setItem("users", JSON.stringify(users));
                localStorage.setItem("currentUser", JSON.stringify(user));
                message.textContent = "Password updated successfully!";
                message.style.color = "green";
            }
        } else {
            message.textContent = "User not found";
            message.style.color = "red";
        }
    } else {
        message.textContent = "Passwords do not match";
        message.style.color = "red";
    }
});
