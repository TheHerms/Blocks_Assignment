$(function() {
  $('button').on('click', function() {
    var randomColor = '#';

    for(var i = 0; i < 6; i++) {
      randomColor += randomNumber(0, 9);
    }
    $('body').append('<div class="box" style="background-color: ' + randomColor + ';"><div class="x">X</div></div>');
});
  $('body').on('click', '.box','remove', function() {
    $(this).css('background-color', 'black');
  });
  $('body').on('click', '.x',function() {
    $(this).closest('.box').remove();
  });

});
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
};
