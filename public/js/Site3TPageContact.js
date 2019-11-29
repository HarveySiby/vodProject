/********* ICI FONCTION LOGO REDIRECTION ***********/

$(document).ready(function(){
	$(".logo").click(function() {
  	window.location.replace("Site3T.html")
});
});
        
/********* ICI FONCTION VALIDATION EMAIL ************/
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  var $result = $("#result");
  var email = $(".email").val();
  $result.text("");

  if (validateEmail(email)) {
    $result.text("Ton email est valide");
    $result.css("color", "green");
  } else {
    $result.text("Ton email n'est pas valide");
    $result.css("color", "red");
  }
  return false;
}

$("#validate").on("click", validate);    

/******** ICI SE TROUVE MON LOCAL STORAGE EMAIL **********/
    var clique = document.getElementById("validate");

    clique.onclick = function (event){
    var recup = document.querySelector(".email").value;
    localStorage.setItem("email", recup);
  }



/******** ICI FONCTION VALIDATION BLAZE *************/

//  function validateBlaze(blaze) {
//   var re = /^({1,10})/;
//   return re.test(blaze);
// }

// function validate() {
//   var $result2 = $("#result");
//   var blaze = $(".blaze").val();
//   $result2.text2("");

//   if (validateBlaze(blaze)) {
//     $result2.text("Ton blaze est valide");
//     $result2.css("color", "green");
//   } else {
//     $result2.text("Ton blaze n'est pas valide");
//     $result2.css("color", "red");
//   }
//   return false;
// }

// $("#validate2").on("click", validate);   

 