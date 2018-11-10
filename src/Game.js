function Game (frames = [new Frame(), new Frame(), new Frame(), new Frame(), new Frame(),
  new Frame(), new Frame(), new Frame(), new Frame(), new Frame() ]) {
  this.frames = frames
  this.i = 0
  this.current_frame = this.frames[this.i]
}

Game.prototype.addRollToFrame = function (num) {
  if (this.current_frame.isFinishedRolling()) this._moveToNextFrame()

  if (this._isNotFirstFrame()) {

    if (this.frames[this.i - 1].isSpare) {
      this.frames[this.i - 1].addBonus(num)

    } else if (this.frames[this.i - 1].isStrike) {
      this.frames[this.i - 1].addBonus(num)
    }
  }

  if (this.frames[this.i - 2] !== undefined && this.frames[this.i - 2].isStrike) {
    this.frames[this.i - 2].addBonus(num)
  }

  this.current_frame.addRoll(num)
}

Game.prototype.calcScores = function () {
  this.totalScore = 0
  for (var i = 0; i < this.frames.length; i++) {
    this.frames[i].calculateScore()
    this._addToTotal(i)
  }
}

Game.prototype._addToTotal = function (i) {
  if (this.frames[i].score !== undefined) {
    this.totalScore += this.frames[i].score
  }
}

Game.prototype._moveToNextFrame = function () {
  this.i++
  this.current_frame = this.frames[this.i]
}

Game.prototype._isNotFirstFrame = function () {
  if (this.frames[this.i - 1] !== undefined) return true
};
