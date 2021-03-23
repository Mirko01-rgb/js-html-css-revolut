function close() {
  $('body').click(function(){

  $(this).find('.listato').removeClass('tendina');

  });
}

function hoverDropped(){
  $('.vociMenu').hover(function(){
  $('.listato').removeClass('tendina');
  $(this).find('.listato').addClass('tendina');

  })

}
function init(){
  hoverDropped();
  close();
}
$(document).ready(init);
