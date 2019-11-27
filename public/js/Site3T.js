// var i = 0;
// function change_image(){
//   document.getElementById("slideshow").src = "img"+(i++ % 6)+".jpeg";
// }

// function slider(){
//   setInterval(change_image, 1000);
// }
$(document).ready(function() {
  //  CONNEXION/INSCRIPTION
  /* Step1:

     Objectif : Mettre des event Click sur les boutons correspondant
    
    afin de rediriger les utilisateurs sur la page profil une fois inscrient.
    afin de récupérer les données des utilisateurs.
    
    step2 : 
    Les enregistrer sur l'API de Brian 
    */

  // harvey

  // function myFunction() {
  //   alert("Tout d'abord, INSCRIT TOI ET REJOINS NOUS !!");
  // }

  // function myFunction2() {
  //   alert("Tu as déjà un compte ? ALORS CONNECTE TOI ET REJOINS NOUS !!");
  // }

  // function myFunction3() {
  //   alert("Tu dois créer un profil pour rentrer dans le cercle !!");
  // }

  // ________________________________________________________________
  //LOCAL STORAGE ENTRAINEMENT
  // class User {
  //   constructor(username, email, password) {
  //     this.email = email;
  //     this.username = username;
  //     this.password = password;
  //   }
  //   getUsername() {
  //     return this.username;
  //   }
  //   getEmail() {
  //     return this.email;
  //   }

  //   getPassword() {
  //     return this.password;
  //   }
  // }

  // const signUp = $("#signUp");
  // const logIn = $("#logIn");

  // //SIGN UP
  // signUp.click(function(e) {
  //   let input = $(".form-controls");

  //   let username = input[0].value;
  //   console.log(username);

  //   let email = input[1].value;
  //   console.log(email);

  //   let password = input[2].value;
  //   console.log(password);

  //   var user = new User(username, email, password);
  //   localStorage.setItem("user", JSON.stringify(user));
  // });

  // // LOG IN
  // logIn.click(function() {
  //   let input = $(".form-controls");

  //   let email = input[3].value;

  //   let password = input[4].value;

  //   var user = new User(email, password);

  //   var user = localStorage.getItem("user");
  //   user = JSON.parse(user);

  //   if (email == user.email && password == user.password) {
  //     window.location = "Site3TPROFIL.html";
  //   }
  // });

  $("#submitButton").click(function(e) {
    let username = $("#tonBlaze").val();
    let email = $("#emailInput").val();
    let password = $("#passwordInput").val();
    console.log(username, email, password);
    $.post(
      "https://brianboudrioux.fr/simplon/api/users",
      // "https://reqres.in/api/users",
      { username: username, email: email, password: password },
      function(data, status) {
        console.log("data : " + data);
        if (typeof data.errors === "undefined")
          // data.errors == undefined  || data.errors === "undefined"
          // data renvoie une chaîne de caractères encore et toujours
          window.location.href = "site3TPROFIL.html";
        //ça ne fonctionne puisqu'on nous a pas donnée l'autorisation
        else console.log(data.errors);
      }
    );
  });

  // ici récupérer toutes les infos sur les auteurs; interprètes; compositeur...
  // des get en somme... Les afficher dans l'espace vidéo
});
