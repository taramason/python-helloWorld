"use strict";


$(document).ready(function(){

  $("#color_chooser").val(localStorage.getItem("currentColor"));

  $("#save_button").click(function(){
    var my_color = $("#color_chooser").val();
    localStorage.setItem( "currentColor", my_color );

    console.log("you have chosen " + my_color);
  });
});
