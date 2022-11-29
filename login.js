/*var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "DhwaniPatel" && password == "Dhwani19"){
        alert ("Login successfully");
        window.location = "home_profile.html"; // Redirecting to other page.
        return false;
    }
    else{
        attempt --;// Decrementing by one.
        alert("You have left "+attempt+" attempt;");
        // Disabling fields after 3 attempts.
        if( attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}*/
function validate()
{
    var name =document.forms.RegForm.Name.value;
    var pass = document.forms.RegForm.Password.value;
    var regName = /\d+$/g;

    if(name != 'DhwaniPatel' & pass != 'Dhwani19'){
        alert("Incorrect username or password");
        return false;
    }
    else{
        alert("Login successful");
        window.location = "home_profile.html";
        return true;
    }
}