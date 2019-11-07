$('document').ready(function(){

  $('#facebook').on('click', function(evt){
    evt.preventDefault();
    window.open("https://www.facebook.com/zijun.zhao.73", "__blank");
  });

  $('#ins').on('click', function(evt){
    evt.preventDefault();
    window.open("https://www.instagram.com/zhaozj98/", "__blank");
  });

  $('#linkedin').on('click', function(evt){
    evt.preventDefault();
    window.open("https://www.linkedin.com/in/zijun-zhao-19911b14a/", "__blank");
  });

  $('#github').on('click', function(evt){
    evt.preventDefault();
    window.open("https://github.com/ZijunZhao98", "__blank");
  });

});
