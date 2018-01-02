// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  $('#upload').click(function(event) {
    event.preventDefault();
    let selectedFile = $('#file_input').get(0).files[0]
    console.log("working!");
    console.log(selectedFile.size);
    $.post('/fetch?size='+selectedFile.size, function(dreams) {
    console.log("working! post");
      $("body").text("{size:" + selectedFile.size + "}");
    });
  });
});
