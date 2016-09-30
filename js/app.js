$(document).ready(function(){
    $("#search-row").hide();
    $('#search-icon').click(function(e) {
          $("search-row").toggleClass('slow');
          e.preventDefault();
      });
});
