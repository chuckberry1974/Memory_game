var currentPlayer = 'one'
var score1
// var score2
var back_card = 'images/Back_card.jpeg'
var front_card = ['images/img1.png', 'images/img2.png', 'images/img2.png', 'images/img1.png', 'images/img3.png', 'images/img3.png', 'images/img4.jpeg', 'images/img4.jpeg']
// var num_matches = 0.5 * (front_card.length)

var body = document.querySelector('body')

body.addEventListener('click', function (event) {
  var card = event.target
  front_card.sort(function () { return 0.5 - Math.random() })
  if (card.className !== 'cards') return  // get out of the function if click not on card.
  card.src = front_card[card.id]
  if (first_pick) {
    var second_pick = front_card[card.id]
  } else {
    var first_pick = front_card[card.id]
  }

  if (currentPlayer === 'one') {
    if (first_pick === second_pick) { // check if same pic for both cards
      score1++ // increase player 1 score1
    }else {
      setTimeout(function () { card.src = back_card }, 2000)
    }
  // }else if (currentPlayer === 'two') {
  }
})
