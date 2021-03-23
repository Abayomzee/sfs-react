import $ from "jquery";

$(document).ready(function () {
  var container_width = 435 * $(".each_comments").length;
  $(".each_comments_div").css("width", container_width + "px");

  // My Account Script

  $(".links .password_link").click(function () {
    $(".links div").not(this).removeClass("active");
    $(this).addClass("active");

    $("[id*='myaccount_']").not("#myaccount_update_password").fadeOut(300);
    $("#myaccount_update_password").delay(300).fadeIn();
  });

  $(".links .profile_link").click(function () {
    $(".links div").not(this).removeClass("active");
    $(this).addClass("active");

    $("[id*='myaccount_']").not("#myaccount_profile").fadeOut(300);
    $("#myaccount_profile").delay(300).fadeIn();
  });

  // End of My Account script

  // Investment details

  $(".link_part .investment_link").click(function () {
    $(".link_part div").not(this).removeClass("active");
    $(this).addClass("active");

    $("[id*='myinvest_']").not("#myinvest_investment").fadeOut(300);
    $("#myinvest_investment").delay(300).fadeIn();
  });

  $(".link_part .payment_link").click(function () {
    $(".link_part div").not(this).removeClass("active");
    $(this).addClass("active");

    $("[id*='myinvest_']").not("#myinvest_payment").fadeOut(300);
    $("#myinvest_payment").delay(300).fadeIn();
  });

  $("#goto_payment").click(function (e) {
    e.preventDefault();

    $(".investment_link").removeClass("active");
    $(".payment_link").addClass("active");

    $("#myinvest_investment").fadeOut(300);
    $("#myinvest_payment").delay(300).fadeIn();
  });

  // End of investment details
});

// Get Screen size for responsiveness

var w = window.innerWidth;
var h = window.innerHeight;
console.log(`

        The Screen width is : ${w}px
        The Screen height is : ${h}px
    
    `);

// End of Get Screen size for responsiveness
