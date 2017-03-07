"use strict";
$(document).ready(function(){
  var endpoint = url;
  var params = {
    key: "kjklsdjsda",
    country: "us",
    year: "2016",
    timestamp: Date.now()
  };
  var result = $.get(endpoint, params, function(result) {
    console.log("result from holidayAPI: ", result);
  });
  result.fail(function(xhr){
    //stuff (look this up for fail)
  });
});
