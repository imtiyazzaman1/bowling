function Frame () {
  this.rollOne = undefined
  this.rollTwo = undefined
  this.score = undefined
  this.bonus = 0
}

Frame.prototype.addRoll = function (num) {
  if (num > 10) {
    throw new Error('Number is higher than 10')
  }

  if (this.rollOne === undefined) {
    this.rollOne = num
  } else if (this.rollTwo === undefined) {
    if (num > (10 - this.rollOne)) {
      throw new Error('Score entered is higher than remaining pins')
    }
    this.rollTwo = num
  } else {
    throw new Error('Select the next frame. This frame is complete')
  }
}

Frame.prototype.addBonus = function (num) {
  this.bonus += num
}

Frame.prototype.calculateScore = function () {
  this.score = this.rollOne + this.rollTwo + this.bonus
}
module.exports = Frame
