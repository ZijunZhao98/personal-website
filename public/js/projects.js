$('document').ready(function(){

  $('#click_school').on('click', function(evt){
    evt.preventDefault();
    $( location ).attr("href", "#school");
  });

  $('#click_personal').on('click', function(evt){
    evt.preventDefault();
    $( location ).attr("href", "#personal");
  });

  $('#click_games').on('click', function(evt){
    evt.preventDefault();
    $( location ).attr("href", "#games");
  });

});
