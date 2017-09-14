$(document).ready(function() {
  var menu = $(".main-menu > li");
  var span = $(".main-menu span");
  var last_item = $(".sub-menu li:last-child a");
  var first_item = $(".sub-menu li:first-child a");

  menu.hover(function() {
    $(this).find(".sub-menu").toggleClass("sub-menu-active");
  });

  span.focusin(function() {
    $(this).siblings(".sub-menu").addClass("sub-menu-active");
  });

  last_item.focusout(function() {
    $(this).parents(".sub-menu").removeClass("sub-menu-active");
  });

  span.keydown(function(event) {
    if (event.which == 9 && event.shiftKey) {
      $(this).siblings(".sub-menu").removeClass("sub-menu-active");
    }
  })


});