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
      $result.css("color", "green").toggle();
    
    } else {
    
      $result.text("Ton email n'est pas valide");
      $result.css("color", "red").toggle();
    
    } return false;
}

$("#validate").on("click", validate);    

/******** ICI SE TROUVE MON LOCAL STORAGE EMAIL **********/
var clique = document.getElementById("validate");

clique.onclick = function (event){
    var recup = document.querySelector(".email").value;
    localStorage.setItem("email", recup);
    }

/******** ICI FONCTION VALIDATION BLAZE *************/
function validateBlaze(blaze){
    var re2 = /^(?=.*[a-z])(?=.*[A-Z])/;
    return re2.test(blaze); 
    }

function validate2(){
    var $resulte = $("#resulte");
    var blaze = $(".blaze").val();
    $resulte.text("");

    if (validateBlaze(blaze)) {
        $resulte.text("Ton blaze est valide");
        $resulte.css("color", "green").toggle();
    
    } else {
    
        $resulte.text("Ton blaze n'est pas valide");
        $resulte.css("color", "red").toggle();
    
    } return false;
} 

$("#validate2").on("click", validate2); 

 

 