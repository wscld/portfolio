$(document).ready(function () {
  $(".expandable").on("click", function () {
    $(this).find(".expandable-content").slideDown(200);
  });

  if (navigator.userAgent.indexOf("Mobile") > 0) {
    $(".pushup").each(function () {
      $(this).insertBefore($(this).prev());
    });
  }
});