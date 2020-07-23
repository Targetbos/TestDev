//import js
import "~/modules/header/header";
import "~/modules/modal/modal";
import "~/modules/menu/menu";

//import scss
import "~/assets/scss/index.scss"

//hover на кнопку info
$(".js__btn-info").hover(function(){
    $(".main__info-card").addClass("main__info-card--visible")
  },function(){
    $(".main__info-card").removeClass("main__info-card--visible")
   }
);
//эффект параалакса
var offsetLeft = $(".js__love-left").offset().top;
var offsetRight = $(".js__love-right").offset().top;

$(window).bind("scroll",function(e){
  var topIndex = $(window).scrollTop();
 
  $(".js__love-left").css("top", (offsetLeft+(topIndex*0.5))+"px");
  $(".js__love-right").css("top", (offsetRight+(topIndex*0.3))+"px");
});
