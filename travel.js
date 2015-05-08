var main = function () {
  "use strict";

  $(".foto").on("mouseover", function() {
    $(this).closest("img");
  	$(".family").removeClass("hidden");
      
  });

  $(".foto").on("mouseout", function(){
    $(this).closest("img");
    $(".family").addClass("hidden");
   
  });

 $(".foto2").on("mouseover", function() {
    $(this).closest("img");
    $(".island").removeClass("hidden");
      
  });

  $(".foto2").on("mouseout", function(){
    $(this).closest("img");
    $(".island").addClass("hidden");
   
  });

   $(".foto3").on("mouseover", function() {
    $(this).closest("img");
    $(".opera").removeClass("hidden");
      
  });

  $(".foto3").on("mouseout", function(){
    $(this).closest("img");
    $(".opera").addClass("hidden");
   
  });

   $(".foto4").on("mouseover", function() {
    $(this).closest("img");
    $(".festival").removeClass("hidden");
      
  });

  $(".foto4").on("mouseout", function(){
    $(this).closest("img");
    $(".festival").addClass("hidden");
   
  });


   $(".foto5").on("mouseover", function() {
    $(this).closest("img");
    $(".city").removeClass("hidden");
      
  });

  $(".foto5").on("mouseout", function(){
    $(this).closest("img");
    $(".city").addClass("hidden");
   
  });


   $(".foto6").on("mouseover", function() {
    $(this).closest("img");
    $(".dolfijn").removeClass("hidden");
      
  });

  $(".foto6").on("mouseout", function(){
    $(this).closest("img");
    $(".dolfijn").addClass("hidden");
   
  });
 

};

$("document").ready(main);
