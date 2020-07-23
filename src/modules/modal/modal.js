import "./modal.scss";
(function(){

  var dataForm = Object();

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

 
  $(".js__btn-send-form").bind("click",function(btn){
      document.querySelectorAll(".modal__input").forEach((el)=>{
        dataForm[`${el.name}`] = el.value
      });
      console.log(dataForm);
      answerVisible();
  });
  
})();

function answerVisible(){
  $(".modal__wrap-form").addClass("--hide");
  $(".answer-form").removeClass("--hide");
}
