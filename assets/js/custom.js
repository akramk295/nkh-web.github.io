// alert("From Custom File");

$(document).ready(function(){
    setTimeout( function(){ 
        var str = $( ".clientReview" ).find( ".owl-prev" ).html("<img src='assets/img/angle-left.png' alt='' />");
        var str = $( ".clientReview" ).find( ".owl-next" ).html("<img src='assets/img/angle-right.png' alt='' />");
      }  , 1000 );
  });