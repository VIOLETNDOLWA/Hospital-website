
$(document).ready(function(){

    $('.menu i').click(function(){
      $(this).toggleClass('fa-times');
      $('.nav').toggleClass('nav-toggle');
    });
   
      // header scroll
    $(window).on('load scroll',function(){
  
      $('.menu i').removeClass('fa-times');
      $('.nav').removeClass('nav-toggle');
  
      if($(window).scrollTop() > 10){
        $('header').addClass('header-active');
      }else{
        $('header').removeClass('header-active');
      }
  
    });

  //  home section read more
    $("#toggle").click(function() {
      var elem = $("#toggle").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle").text("Read Less");
        $("#text").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle").text("Read More");
        $("#text").slideUp();
      }
    });
  
    $('.facility').magnificPopup({
      delegate:'a',
      type:'image',
      gallery:{
        enabled:true
      }
    });

    // blog section

  $("#toggles").click(function() {
      var elem = $("#toggles").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggles").text("Read Less");
        $("#texts").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggles").text("Read More");
        $("#texts").slideUp();
      }
    });

    $("#toggle1").click(function() {
      var elem = $("#toggle1").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle1").text("Read Less");
        $("#text1").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle1").text("Read More");
        $("#text1").slideUp();
      }
    });

    $("#toggle2").click(function() {
      var elem = $("#toggle2").text();
      if (elem == "Read More") {
        //Stuff to do when btn is in the read more state
        $("#toggle2").text("Read Less");
        $("#text2").slideDown();
      } else {
        //Stuff to do when btn is in the read less state
        $("#toggle2").text("Read More");
        $("#text2").slideUp();
      }
    });
  });
  
