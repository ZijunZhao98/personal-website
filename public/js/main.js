$('document').ready(function(){

  $('#name').on('click', function(evt){
    evt.preventDefault();
    $( location ).attr("href", "/profile");
  });

  $('#abotme').on('click', function(evt){
    evt.preventDefault();
    $( location ).attr("href", "/profile");
  });

  $('#projects').on('click', function(evt){
    evt.preventDefault();
    $( location ).attr("href", "/");
  });

  $('#resume').on('click', function(evt){
    evt.preventDefault();
    window.open("Zijun_Zhao_Resume.pdf");
  });

});
