function validation() {
    var nameval = document.querySelector("#name");
    var pass = document.querySelector("#password");
    var email = document.querySelector("#email");
    // console.log(nameval.value);
    console.log(pass.value);
    // console.log(email.value);
    if (nameval.value != "" && pass.value != "" && email != "") {
        document.querySelector("#nametxt").innerHTML = "NAME :" + nameval.value;
        document.querySelector("#passwordtxt").innerHTML = "Password :" + pass.value;
        document.querySelector("#emailtxt").innerHTML = "Email :" + email.value;

        nameval.value = "";
        pass.value = "";
        email.value = "";


        // document.write("login successfully");
    }
    else {
        return;

    }
}