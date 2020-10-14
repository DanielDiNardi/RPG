class User {
    constructor(name, email, password, passwordConf) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.passwordConf = passwordConf;
    }
}

function register() {
    //user input
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passwordConf = document.getElementById("passwordConf");

    //password check
    if(password.value == passwordConf.value) {
        newUser = new User(name, email, password, passwordConf);
        console.log("user created")
    }
    else {
        alert("Password does not match, try again!");
        location.reload();
    }
}