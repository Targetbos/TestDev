import "./src/header/header";
import "./src/modal/modal";
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
//Открытие модального окна
$(".js__btn-card, .js__btn-record").bind("click",function(btn){
  $(".modal").removeClass("--hide");
});
//Закрытие модального окна
$(".modal, .js_btn-close").click(function(){
  $(".modal, .answer-form").addClass("--hide");
  $(".modal__wrap-form").removeClass("--hide");
});
//
document.querySelector(".modal__wrap").addEventListener("click",function(el){
  el.stopPropagation();
});