document.getElementById("btn").addEventListener("click", (event) => {
    event.preventDefault(); //handle bydefault submission
    let firstName = document.getElementById("firstname");
    let lastName = document.getElementById("lastname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");


    let error = document.getElementById("error");
    error.textContent = "";

    if(firstName.value == "" || lastName.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "") {
        error.textContent = "Please fill all required fields";
        error.style.color = "red";
    }else if(password.value == confirmPassword.value){
        let users = JSON.parse(localStorage.getItem("users") ?? "[]");
        let existingUser = users.find(user => user.email == email.value);
        if(existingUser) {
            error.textContent = "User already exists";
            error.style.color = "red";
        }else{
            let user = {
                firstName: firstName.value,
                lastName: lastName.value,
                email: email.value,
                password: password.value
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        error.textContent = "Registration successful";
        error.style.color = "green";

        firstName.value = "";
        lastName.value = "";
        email.value = "";
        password.value = "";
        confirmPassword.value = "";


        window.location.href = "/login/login.html"
    }
        
 }else{
    error.textContent = "Please make sure password and confirm password are the same";
    error.style.color = "red";
}
})