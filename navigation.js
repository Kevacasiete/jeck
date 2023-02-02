$(document).ready(function() {
  $("a").hover(function() {
    $(this).next(".sub-menu").toggle();
  });
});
