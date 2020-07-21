//развёртование меню по клику
$(".js__btn-menu").click(function(el){
  $(".overlay").toggleClass("--hide");
  $(".menu__wrap").toggleClass("--visible-menu");
});
//сворачивание меню
$(".overlay").click(function(e){
  $(".overlay").addClass("--hide");
  $(".menu__wrap").removeClass("--visible-menu");
});
// открытие карты 
$(".js__map-link").hover(function(el){$(".header__map").addClass("header__map--visible");},function(e){$(".header__map").removeClass("header__map--visible");})