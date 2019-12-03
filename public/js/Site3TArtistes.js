$(document).ready(function(event) {
  $(".logo").click(function(e) {
    window.location.href = "Site3T.html";
  });

  const products = function lesCategories() {
    // ici je vais récupérer toutes les vidéos des catégories du site site3T
    const rap =
      "https://brianboudrioux.fr/simplon/api/products/category/5dc004641192ac774b019fe6";
    const raggaMuffin =
      "https://brianboudrioux.fr/simplon/api/products/category/5dcf37d087ec401d02f6178e";
    const reggae =
      "https://brianboudrioux.fr/simplon/api/products/category/5dceb7acce43fe55c65cbd21";
    const rockIndie =
      "https://brianboudrioux.fr/simplon/api/products/category/5dcf392287ec401d02f6178f";
    const houseTechno =
      "https://brianboudrioux.fr/simplon/api/products/category/5dcf3a0187ec401d02f61790";
    const hiphopInst =
      "https://brianboudrioux.fr/simplon/api/products/category/5dceb899ce43fe55c65cbd22";
    const neoSoul =
      "https://brianboudrioux.fr/simplon/api/products/category/5dcf3a9887ec401d02f61791";
    const soulJazz =
      "https://brianboudrioux.fr/simplon/api/products/category/5dcf3b0d87ec401d02f61792";
    const raggaDancehall =
      "https://brianboudrioux.fr/simplon/api/products/category/5dcf3d7387ec401d02f61793";
    const genre = [
      rap,
      raggaMuffin,
      reggae,
      rockIndie,
      rockIndie,
      houseTechno,
      hiphopInst,
      neoSoul,
      soulJazz,
      raggaDancehall
    ];

    console.log(genre);

    for (let i = 0; i < genre.length; i++) {
      $.get(genre[i]).done(function(data) {
        console.log(data);

        $.each(data, function(i, items) {
          //ajout du nom de la catégories

          // const categories = "https://brianboudrioux.fr/simplon/api/categories";
          // $.get(categories).done(function(data) {
          //   console.log(data);
          //   $.each(data, function(i, items) {
          //     console.log(items.name);
          //   });
          // });

          let div = $("<div>").attr("id", "container");
          let option = $("<option>").attr("value", items._id); //items._id ?
          let divPhoto = $("<divPhoto>").attr("id", "photo");

          let a = $("<a>").attr("href", items.media);
          let title = $("<h3>").text(items.name);
          let img = $("<img>").attr("src", items.picture);
          img.addClass("id", "photoCat");
          // //  au survol de l'image une video en  mute se lance

          // $("section").css(
          //   "margin",
          //   "0 auto",
          //   "padding",
          //   "0 auto",
          //   "display",
          //   "flex",
          //   "flex-wrap",
          //   "wrap"
          // );

          div.appendTo("#requeteCategories");

          option.appendTo(div);
          divPhoto.appendTo(div);
          img.appendTo(a);
          title.appendTo(a);
          a.appendTo(divPhoto);

          //css

          $("#requeteCategories").css({
            display: "flex",
            "flex-wrap": "wrap",
            justifyContent: "space-around"
          });
          $("#requeteCategoriesr").css({
            border: "1px solid black",
            padding: "2% 2% 2% 2%",
            background: "grey"
          });

          $("img").css({ width: "160px", height: "150px", margin: "1.5em" });
          $("a h3").css({
            border: "1px solid black",
            textAlign: "center",
            background: "black",
            color: "white",
            textDecoration: "none",
            padding: "5% 1% 5% 1%",
            fontSize: "1rem"
          });
        });
      });
    }
  };
  console.log(products());

  if (data.auth == true) {
    localStorage.setItem("email", email);

    window.location.href = "site3TPROFIL.html";
  }
});
