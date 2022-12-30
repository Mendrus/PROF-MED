var objPeople = [
    {
    user: "Andrzej",
    password: "Hania123"
    },
    {
        user: "Martyna",
        password: "Hania321"
    }
]
function getinfo() {
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;

    for(var i = 0; i < objPeople.length; i++) {
        if(user == objPeople[i].user 
            && password == objPeople[i].password){
                alert(user + " " + "Zalogowano");
                console.log(user + " " + "Zalogowano");
                return;
            }
            alert("Nieprawidłowa nazwa użytkownika lub hasła");
            console.log("Nieprawidłowa nazwa użytkownika lub hasła");
}
}
