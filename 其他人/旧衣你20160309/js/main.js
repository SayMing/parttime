$(function(){
  $(".dyd-dd .dd-menu li").each(function(index){
    $(this).click(function(){
      go(index);
    })
  })
  function go(num){
    $(".dyd-dd .gzdd div").css("display","none").eq(num).css("display","block");
    $(".dyd-dd .dd-menu li").css("color","#9E9E9E");
    $(".dyd-dd .dd-menu li").eq(num).css("color","#FD602D");
  }
  /*小色更新 2016-3-12 17：17*/
  $(".hd-focus-left").click(function(){
    $(".xs-mask").toggle();
      $(".hd-focus-left-hover").toggle();
});
  $(".hd-focus-right").click(function(){
    $(".xs-mask").toggle();
      $(".hd-focus-right-hover").toggle();
});
  $(".gb-hide").click(function(){
    $(".xs-mask").hide(); 
      $(".hd-focus-left-hover").hide();  
});
  $(".xs-mask").click(function(){
    $(".xs-mask").hide();
    $(".hd-focus-left-hover").hide(); 
    $(".hd-focus-right-hover").hide(); 
});
})

