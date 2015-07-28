$(window).load(function(){
    var InfiniteRotator = {
      init: function(){
        var i=1;
        setInterval(function(){
            $("#shine").css('background-image', 'url("../img/stars-bg-web.png")');
            $("#shine").hide();
            $("#shine").show();
            i==2?i=1:i++;
            console.log($("#shine").css("background-image"));
        },2500);
      }
   }
  InfiniteRotator.init();
});