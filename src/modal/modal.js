(function(){
  var dataForm = Object();
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
