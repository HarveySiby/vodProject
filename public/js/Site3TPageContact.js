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


/******** ICI FONCTION VALIDATION BLAZE *************/
let minlenght = 1;
let maxlenght = 10; 


function validateBlaze(blaze){

    if (".blaze".length < 1){
        $result.text("Ton blaze est valide");
    	$result.css("color", "green");
    } else {
    $result.text("Ton blaze n'est pas valide");
    $result.css("color", "red");
  }
    $("#validate").on("click", validate); 
}


// function validateBlaze(blaze) {
//   var re = minlenght(3);
//   return re.test(blaze);
// }

// function validate() {
//   var $result = $("#result");
//   var blaze = $(".blaze").val().length;
//   $result.text("");

//   if (validateBlaze(blaze)) {
//     $result.text("Ton blaze est valide");
//     $result.css("color", "green");
//   } else {
//     $result.text("Ton blaze n'est pas valide");
//     $result.css("color", "red");
//   }
//   return false;
// }

// $("#validate").on("click", validate);   