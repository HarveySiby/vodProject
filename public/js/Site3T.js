// var i = 0;
// function change_image(){
//   document.getElementById("slideshow").src = "img"+(i++ % 6)+".jpeg";
// }

// function slider(){
//   setInterval(change_image, 1000);
// }

$(document).ready(function() {
  //En client sur les boutons genres et artistes, nos utilisateurs  seront redidirigés vers les pages correspondantes
  $("#genres").click(function(e) {
    window.location.href = "Site3TPageListe.html";
  });

  $("#artistes").click(function(e) {
    window.location.href = "Site3TArtistes.html";
  });

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
        //le status me permet de vérifier le succcès ou le rejet de ma requête

        e.preventDefault();

        console.log("data : " + data);
        console.log(status);
        if (typeof data.errors === "undefined")
          window.location.href = "site3TPROFIL.html";
        else console.log(data.errors);
      }
    );
  });

  $("#logIn").click(function(e) {
    let email = $("#emailInput1").val();
    let password = $("#passwordInput1").val();

    console.log(email, password);

    $.post(
      "https://brianboudrioux.fr/simplon/api/connect",
      { email: email, password: password },
      function(data, status) {
        e.preventDefault();
        // console.log(data);
        console.log(status);
        //le status me permet de vérifier le succcès ou le rejet de ma requête

        if (data.auth == true) {
          //ICI -> setItems ... localstorage

          localStorage.setItem("email", email);

          window.location.href = "site3TPROFIL.html";
        } else {
          alert("ouesh!!!!, Account does not exist, please register");
        }
      }
    );
  });
  // ici récupérer toutes les infos sur les auteurs; interprètes; compositeur...
  // des get en somme... Les afficher dans l'espace vidéo
});
