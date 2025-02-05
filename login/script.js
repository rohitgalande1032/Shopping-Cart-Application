let email = document.getElementById("email");
let password = document.getElementById("password");
let error = document.getElementById("error");

document.getElementById("btn").addEventListener("click", (event) => {
    event.preventDefault();
   

    if(email.value == "" || password.value == "") {
        error.innerHTML = "Please enter email or password";
        error.style.color = "red";
    }else {
        let users = JSON.parse(localStorage.getItem("users") ?? "[]");
        
        console.log( "List of user before login: ",users);
        if(users) {
            let user = users.filter(user => user.email === email.value);
        
            if(user.length>0) {
                //user exist
                console.log("User Found: ", user)
                console.log("Welcome " + user.firstName + " " + user.lastName);
                let obj = user[0];
                if(obj.password == password.value) {
                    //login
                    localStorage.setItem("currentUser", JSON.stringify({
                        email: email.value,
                        password: password.value,
                        token: generateToken(),
                    }))
                }else{
                    error.textContent = "Invalid password";
                    error.style.color = "red";
                }
            
                window.location.href = "/profile/index.html"
            }else{
                error.innerHTML = "No user found with this email.";
                error.style.color = "red";
            }
        }else{
            error.textContent = "Please signup first to login...";
            error.style.color = "red";
        }
        
    }

})

function generateToken() {
    let token = Math.random(0, 10000).toString();
    return token;
}