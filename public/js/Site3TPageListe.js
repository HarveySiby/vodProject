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
