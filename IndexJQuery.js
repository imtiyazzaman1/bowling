console.log('jquery');
$( document ).ready(function () {
  var frame1 = new Frame();
  var frame2 = new Frame();
  var frame3 = new Frame();
  var frame4 = new Frame();
  var frame5 = new Frame();
  var frame6 = new Frame();
  var frame7 = new Frame();
  var frame8 = new Frame();
  var frame9 = new Frame();
  var frame10 = new Frame();

  var frames = [frame1, frame2, frame3, frame4, frame5,
    frame6, frame7, frame8, frame9, frame10
  ]

  var i = 0

  function updateScores(num) {
    var current_frame = frames[i]

    if (current_frame.rollTwo !== undefined) {
      i++
      current_frame = frames[i]
    }
    current_frame.addRoll(num)

    for (var j = 0; j < frames.length; j++) {
      if (!frames[j].isComplete) {
        continue;
      }
      frames[j].calculateScore()
    }

    updateText()
  }

  function updateText() {
    $('#frame-1-roll-1').text(frame1.rollOne)
    $('#frame-1-roll-2').text(frame1.rollTwo)
    $('#frame-1-score').text(frame1.score)

    $('#frame-2-roll-1').text(frame2.rollOne)
    $('#frame-2-roll-2').text(frame2.rollTwo)
    $('#frame-2-score').text(frame2.score)

    $('#frame-3-roll-1').text(frame3.rollOne)
    $('#frame-3-roll-2').text(frame3.rollTwo)
    $('#frame-3-score').text(frame3.score)

    $('#frame-4-roll-1').text(frame4.rollOne)
    $('#frame-4-roll-2').text(frame4.rollTwo)
    $('#frame-4-score').text(frame4.score)

    $('#frame-5-roll-1').text(frame5.rollOne)
    $('#frame-5-roll-2').text(frame5.rollTwo)
    $('#frame-5-score').text(frame5.score)

    $('#frame-6-roll-1').text(frame6.rollOne)
    $('#frame-6-roll-2').text(frame6.rollTwo)
    $('#frame-6-score').text(frame6.score)


    $('#frame-7-roll-1').text(frame7.rollOne)
    $('#frame-7-roll-2').text(frame7.rollTwo)
    $('#frame-7-score').text(frame7.score)

    $('#frame-8-roll-1').text(frame8.rollOne)
    $('#frame-8-roll-2').text(frame8.rollTwo)
    $('#frame-8-score').text(frame8.score)

    $('#frame-9-roll-1').text(frame9.rollOne)
    $('#frame-9-roll-2').text(frame9.rollTwo)
    $('#frame-9-score').text(frame9.score)

    $('#frame-10-roll-1').text(frame10.rollOne)
    $('#frame-10-roll-2').text(frame10.rollTwo)
    $('#frame-10-score').text(frame10.score)

  }

  $("button").click(function () {
    console.log('clicked');
    console.log($(this).val());
    num = Number($(this).val())
    updateScores(num)
    console.log(frame1);
  })
})
