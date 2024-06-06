function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "220101130056" && password === "12345") {
        alert("Login Successfully");
        window.location.replace("index4.html")
        return true;  // Return true to allow form submission
    } else {
        alert("Login failed");
        return false;  // Return false to prevent form submission
    }
}