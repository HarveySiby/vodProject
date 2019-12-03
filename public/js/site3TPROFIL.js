$(document).ready(function() {
  //Uploader une photo et remplacer l'initiale
  $("#photoprofil").click(function(e) {
    $("#imageUpload").click();
  });

  function fasterPreview(uploader) {
    if (uploader.files && uploader.files[0]) {
      $("#photoprofil").attr(
        "src",
        window.URL.createObjectURL(uploader.files[0])
      );
    }
  }
  $("#imageUpload").change(function() {
    fasterPreview(this);
  });
});
