/********* ICI FONCTION LOGO REDIRECTION ***********/

$(document).ready(function() {
  $(document).ready(function(event) {
    $(".logo").click(function(e) {
      window.location.href = "Site3T.html";
    });
  });
});

/************ ICI SE TROUVE MES REQUETES **********/

/*** item = les différentes catégories ***/

const urlCategories = "https://brianboudrioux.fr/simplon/api/categories";

<<<<<<< HEAD
$.get(urlCategories, function(data, statue){
	console.log(data);
	console.log(statue);

	$.each(data, function(i, item){


		if (item.name == "soul jazz" || item.name == "neo soul" || item.name == "house/techno" || item.name == "rock indie"  || item.name == "reggae" || item.name == "rap" || item.name == "ragga dancehall" || item.name == "hip hop instrumental") {
		let article = $("<article>").attr("data-id", item._id);
		article.appendTo($("#requeteCategories"));

		let titre = $("<h3>").text(item.name).css("color", "white");
		titre.appendTo(article);
		
		let image = $("<img>").attr("src", item.picture).css({width: "300px", height: "250px", margin: "1.5em"});
		image.appendTo(article);
		}		
	});
})

/************ ICI SE TROUVE MA FUNCTION CLICK REDIF PAGE **********/

$(document).ready(function(){
	$("#requeteCategories").on("click", "article",function(e) {

  		$(location).attr("href", "Site3TPageListe2.html")
  		// e.preventDefault()
		let idCategories = $(this).data("id")
		const urlVideos = "https://brianboudrioux.fr/simplon/api/products/category/" + idCategories
  		$.get(urlVideos, function(data, statue){
  				// console.log(data);
  			$.each(data, function(i, item){
	  				
	  				let article = $("<article>").attr("data-media", item.media);
					article.appendTo($("#requeteCategories2"));

					let titre = $("<h3>").text(item.name).css("color", "white");
					titre.appendTo(article);
					
					let image = $("<img>").attr("src", item.picture).css({width: "300px", height: "250px", margin: "1.5em"});
					image.appendTo(article);
				});
  		})
	});
});

=======
$.get(urlCategories, function(data, statue) {
  console.log(data);
  console.log(statue);

  $.each(data, function(i, item) {
    if (
      item.name == "raggamuffin" ||
      item.name == "soul jazz" ||
      item.name == "neo soul" ||
      item.name == "house/techno" ||
      item.name == "rock indie" ||
      item.name == "reggae" ||
      item.name == "rap" ||
      item.name == "ragga dancehall" ||
      item.name == "hip hop instrumental"
    ) {
      let article = $("<article>").attr("data-id", item._id);
      article.appendTo($("#requeteCategories"));

      let titre = $("<h3>")
        .text(item.name)
        .css("color", "white");
      titre.appendTo(article);

      let image = $("<img>")
        .attr("src", item.picture)
        .css({ width: "300px", height: "250px", margin: "1.5em" });
      image.appendTo(article);

      $(image).click(function() {
        window.location.href = "artistePerf.html";
      });
    }
  });
});

// $.get(urlCategories, function(data, statue) {
//   console.log(data);
//   console.log(statue);

//   $.each(data, function(i, item) {});
// });
>>>>>>> 4caa12d0210af3c2c8c2e514cc537654aa1be141
