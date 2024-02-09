const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

const userData = [
    {"user":"usr","password":"pwd"},
    {"user":"ankit","password":"ankit"},
    {"user":"deepshikha","password":"pwd"},
    {"user":"ranjan","password":"ranjan"}
];
loginButton.addEventListener("click", (e) => {
    //e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    let loggedIn=false;
    userData.forEach(item=> {
        if (username === item.user && password === item.password) {
            loggedIn=true;
            //alert("You have successfully logged in.");
            location.reload();
        } 
    });
    if(loggedIn===false){
        e.preventDefault();
        loginErrorMsg.style.opacity = 1;
    }    
})
window.history.forward(); 
