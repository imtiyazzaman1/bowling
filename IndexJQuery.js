
$( document ).ready(function () {
  const game = new Game();
  // var frame1 = new Frame();
  // var frame2 = new Frame();
  // var frame3 = new Frame();
  // var frame4 = new Frame();
  // var frame5 = new Frame();
  // var frame6 = new Frame();
  // var frame7 = new Frame();
  // var frame8 = new Frame();
  // var frame9 = new Frame();
  // var frame10 = new Frame();
  //
  // var frames = [frame1, frame2, frame3, frame4, frame5,
  //   frame6, frame7, frame8, frame9, frame10
  // ]
  //
  // var i = 0

  function updateScores(num) {
    game.addRollToFrame(num)
    game.calcScores()

    updateText()
  }

  function updateText() {
    $('#frame-1-roll-1').text(game.frames[0].rollOne)
    $('#frame-1-roll-2').text(game.frames[0].rollTwo)
    $('#frame-1-score').text(game.frames[0].score)

    $('#frame-2-roll-1').text(game.frames[1].rollOne)
    $('#frame-2-roll-2').text(game.frames[1].rollTwo)
    $('#frame-2-score').text(game.frames[1].score)

    $('#frame-3-roll-1').text(game.frames[2].rollOne)
    $('#frame-3-roll-2').text(game.frames[2].rollTwo)
    $('#frame-3-score').text(game.frames[2].score)

    $('#frame-4-roll-1').text(game.frames[3].rollOne)
    $('#frame-4-roll-2').text(game.frames[3].rollTwo)
    $('#frame-4-score').text(game.frames[3].score)

    $('#frame-5-roll-1').text(game.frames[4].rollOne)
    $('#frame-5-roll-2').text(game.frames[4].rollTwo)
    $('#frame-5-score').text(game.frames[4].score)

    $('#frame-6-roll-1').text(game.frames[5].rollOne)
    $('#frame-6-roll-2').text(game.frames[5].rollTwo)
    $('#frame-6-score').text(game.frames[5].score)


    $('#frame-7-roll-1').text(game.frames[6].rollOne)
    $('#frame-7-roll-2').text(game.frames[6].rollTwo)
    $('#frame-7-score').text(game.frames[6].score)

    $('#frame-8-roll-1').text(game.frames[7].rollOne)
    $('#frame-8-roll-2').text(game.frames[7].rollTwo)
    $('#frame-8-score').text(game.frames[7].score)

    $('#frame-9-roll-1').text(game.frames[8].rollOne)
    $('#frame-9-roll-2').text(game.frames[8].rollTwo)
    $('#frame-9-score').text(game.frames[8].score)

    $('#frame-10-roll-1').text(game.frames[9].rollOne)
    $('#frame-10-roll-2').text(game.frames[9].rollTwo)
    $('#frame-10-score').text(game.frames[9].score)

  }

  $("button").click(function () {
    console.log($(this).val());
    num = Number($(this).val())
    updateScores(num)
  })
})
