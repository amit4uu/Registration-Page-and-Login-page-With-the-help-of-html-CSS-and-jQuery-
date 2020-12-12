$("document").ready(function(){
    $("#rgstr_btn").click(function(){
        let firstName = $("#firstName").val();
        let lastName = $("#lastName").val();
        let Email = $("#Email").val();
        let Password = $("#Password").val();
        let Contact = $("#Contact").val();

        localStorage.setItem("firstName", firstName);
        localStorage.setItem("LastName", lastName);
        localStorage.setItem("Email", Email);
        localStorage.setItem("Password", Password);
        localStorage.setItem("Contact", Contact);

        alert("Registration Successful");

         window.location.href="Login.html";

    });

    $("#login_btn").click(function(){
        
        let Email = $("#Email").val();
        let Password = $("#Password").val();

        if(Email == "" && Password == "")
        {
            alert("Please Enter your Email and Password");
        }
        else
        {
            let name = localStorage.getItem("firstName");
            let userEmail = localStorage.getItem("Email");
            let userPassword = localStorage.getItem("Password");

            if(Email  == userEmail && userPassword == Password){
                alert("Welcome to your Page " + name);
            }
        }
    });
});