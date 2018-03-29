//BUSINESS LOGIC

//my function will take a genre, an age group and a season and will return a celebrity match



//USER LOGIC

$(document).ready(function(){
  $("#Main").submit(function(event){
    event.preventDefault();
    var userResult = $("#Main").val();
    var suits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "ace"];
    var values = ["of clubs", "of diamonds"];
    var deck = [];

    for(var i = 0; i < suits.length; i++){
      for(var j = 0; j < values.length; j++){
        deck.push(suits[i], values[j]);

        }
        console.log(deck);
        $(".Deck").text(deck);
      }
    
    


  });
});
