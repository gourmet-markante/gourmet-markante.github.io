$(document).ready(function(){

  $('#speisekarte #circluar-pics .span2').on('mouseover',function(){
    $('#speisekarte #circluar-pics .span2').css('background-position-x', '');
    $('#speisekarte #circluar-pics .span2').css('background-position-y', '');

    $(this).css('background-position-y', '-629px')
    $(this).css('background-position-x', '-=3')

    var order_number = $(this).index('#speisekarte #circluar-pics .span2') + 1
    $('#speisekarte #speisekarte-titles .span2').css('visibility', 'hidden');
    $('#speisekarte #speisekarte-titles .span2:nth-of-type('+order_number+')').css('visibility', 'visible');
  });

  $('#speisekarte #circluar-pics').on('mouseleave', function(){
    $('#speisekarte #circluar-pics .span2').css('background-position-x', '');
    $('#speisekarte #circluar-pics .span2').css('background-position-y', '');
    $('#speisekarte #speisekarte-titles .span2').css('visibility', 'hidden');
  });


});