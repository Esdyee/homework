$(document).ready(function() {
  var tabMenu = $(".tab");

  tabMenu.on('click focusin', function() {
    $(tabMenu).parent(".tab-board").removeClass("active");
    $(this).parent(".tab-board").addClass("active");
  })
});