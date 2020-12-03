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

  $('#usocial').on('click', function(evt){
    window.open("https://github.com/ZijunZhao98/USocial");
  });

  $('#slack_bot').on('click', function(evt){
    window.open("https://github.com/amyible/slackbot");
  });

  $('#lifegame').on('click', function(evt){
    window.open("https://github.com/ZijunZhao98/Game");
  });

  $('#wish').on('click', function(evt){
    window.open("https://github.com/danhuiZ/wishes");
  });

  $('#WashU_combat').on('click', function(evt){
    window.open("https://github.com/ZijunZhao98/Moltgey");
  });

  $('#calendar').on('click', function(evt){
    window.open("https://github.com/ZijunZhao98/online_calendar");
  });

  $('#richArduino').on('click', function(evt){
    window.open("https://github.com/SaundersJP/RichArduino");
  });

  $('#music_game').on('click', function(evt){
    window.open("https://github.com/ZhanqiZhang66/3DVideoGame");
  });

  $('#petproject').on('click', function(evt){
    window.open("https://github.com/ZijunZhao98/thePetProject");
  });


});
