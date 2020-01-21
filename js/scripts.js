$(document).ready(function(){
  var suits = ["hearts", "diamonds", "clubs", "spades"];
  var cards = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"];
  var deck = [];
  suits.forEach(function(suit){
    cards.forEach(function(card){
      deck.push(card + " of " + suit);
    })
  })
  deck.forEach (function(card){
    $("#list").append("<li>" + card + "</li>");
  })
})