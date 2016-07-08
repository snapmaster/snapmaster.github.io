(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function start(){
    
    var t=document.getElementsByTagName("a");
    for (var i=t.length;i--;){
        t[i].href=_url;
    }
}