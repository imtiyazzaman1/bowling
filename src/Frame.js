function Frame () {
  this.rollOne = undefined
  this.rollTwo = undefined
  this.score = undefined
  this.bonus = 0
  this.isComplete = false
}

Frame.prototype.addRoll = function (num) {
  if (this.rollOne === undefined) {
    this._checkNumber(num)
    this.rollOne = num
  } else if (this.rollTwo === undefined) {
    this._checkNumber(num)
    this.rollTwo = num
  } else {
    throw new Error('Select the next frame. This frame is complete')
  }
}

Frame.prototype.addBonus = function (num) {
  this.bonus += num
}

Frame.prototype.calculateScore = function () {
  if (!this.isComplete) {
    throw new Error('Frame is not complete')
  }
  this.score = this.rollOne + this.rollTwo + this.bonus
}

Frame.prototype.setAsComplete = function () {
  this.isComplete = true
}

Frame.prototype._checkNumber = function (num) {
  if (num > 10) {
    throw new Error('Number is higher than 10')
  } else if (num > (10 - this.rollOne)) {
    throw new Error('Score entered is higher than remaining pins')
  }
}
module.exports = Frame
