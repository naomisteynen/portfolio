var main = function () {
  "use strict";

  $(".foto").on("mouseover", function() {
    $(this).closest("img");
  	$(".tat").removeClass("hidden");
      
  });

  $(".foto").on("mouseout", function(){
    $(this).closest("img");
    $(".tat").addClass("hidden");
   
  });

 $(".foto2").on("mouseover", function() {
    $(this).closest("img");
    $(".tattoo").removeClass("hidden");
      
  });

  $(".foto2").on("mouseout", function(){
    $(this).closest("img");
    $(".tattoo").addClass("hidden");
   
  });

   $(".foto3").on("mouseover", function() {
    $(this).closest("img");
    $(".hipster").removeClass("hidden");
      
  });

  $(".foto3").on("mouseout", function(){
    $(this).closest("img");
    $(".hipster").addClass("hidden");
   
  });

   $(".foto4").on("mouseover", function() {
    $(this).closest("img");
    $(".hipster2").removeClass("hidden");
      
  });

  $(".foto4").on("mouseout", function(){
    $(this).closest("img");
    $(".hipster2").addClass("hidden");
   
  });


   $(".foto5").on("mouseover", function() {
    $(this).closest("img");
    $(".adtr").removeClass("hidden");
      
  });

  $(".foto5").on("mouseout", function(){
    $(this).closest("img");
    $(".adtr").addClass("hidden");
   
  });


   $(".foto6").on("mouseover", function() {
    $(this).closest("img");
    $(".taa").removeClass("hidden");
      
  });

  $(".foto6").on("mouseout", function(){
    $(this).closest("img");
    $(".taa").addClass("hidden");
   
  });
 

};

$("document").ready(main);
