function Game (frames = [new Frame(), new Frame(), new Frame(), new Frame(), new Frame(),
  new Frame(), new Frame(), new Frame(), new Frame(), new Frame() ]) {
  this.frames = frames
  this.i = 0
  this.current_frame = this.frames[this.i]
  this.totalScore = 0
}

Game.prototype.addRollToFrame = function (num) {
  if (this.current_frame.isFinishedRolling()) {
    this.i++
    this.current_frame = this.frames[this.i]
  }

  if (this.frames[this.i - 1] !== undefined) {
    if (this.frames[this.i - 1].isSpare) {
      this.frames[this.i - 1].addBonus(num)
    }
  }

  this.current_frame.addRoll(num)
}

Game.prototype.calcScores = function () {
  for (var i = 0; i < this.frames.length; i++) {
    if (this.frames[i].rollTwo === undefined) {
      continue
    }
    this.frames[i].calculateScore()
    this.totalScore += this.frames[i].score
  }
}

Game.prototype.print = function () {
  return 'this is a game'
}
