function validate(){
    var name= document.forms.RegForm.Name.value;
    var phone = document.forms.RegForm.Telephone.value;
    var email = document.forms.RegForm.Email.value;
    var pass = document.forms.RegForm.Password.value;
    var regName = /\d+$/g;
    var regPhone = /^\d{10}$/;
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

    if(name == "" || regName.test(name)){
        window.alert("Please enter your name properly.");
        name.focus();
        return false;
    }
    if(email == "" || !regEmail.test(email)){
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (pass == "") {
        alert("Please enter your password");
        password.focus();
        return false;
    }
    if (phone == "" || !regPhone.test(phone)) {
        alert("Please enter valid phone number.");
        phone.focus();
        return false;
    }
    
        alert("Sign Up successful");
        return true;
    
}