// lorsque je click sur un bouton, le texte change de couleur
$(function(){
  $('#button1').click(function(){
    $('#text').css('color', 'green');
  });
  $('#button2').click(function(){
    $('#text').css('color', 'red');
  });
  $('#button3').click(function(){
    $('#text').css('color', 'blue');
  });
});
// $(function(){
//   $('.color').click(function(){
//     // objet. this se réfère à l'objet auquel il appartient (renvoi le résultat divColor)
//     // .attr récupère la valeur de l'id
//     divColor = $(this).attr('id');
//     $('#text').css('color', divColor);
//   });
// });
