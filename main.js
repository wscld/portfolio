$(document).ready(function () {
  $(".expandable").on("click", function () {
    $(this).find(".expandable-content").slideToggle(200);
  });

  if (navigator.userAgent.indexOf("Mobile") > 0) {
    $(".pushup").each(function () {
      $(this).insertBefore($(this).prev());
    });
  }
});