function Frame () {
  this.rollOne = undefined
  this.rollTwo = undefined
  this.score = undefined
  this.bonus = []
  this.isComplete = false
  this.isSpare = false
  this.isStrike = false
}

Frame.prototype.addRoll = function (num) {
  this._checkIfComplete()

  if (this.rollOne === undefined) {
    this._checkNumber(num)
    this.rollOne = num
  } else if (this.rollTwo === undefined) {
    this._checkNumber(num)
    this.rollTwo = num

    if (this.rollOne + this.rollTwo == 10) {
      this.isSpare = true
    }

    if (!this.isSpare) {
      this._setAsComplete()
    }
  } else {

  }
}

Frame.prototype.addBonus = function (num) {
  this.bonus.push(num)
  if (this.isSpare) {
    this._setAsComplete()
  }
}

Frame.prototype.calculateScore = function () {
  if (!this.isComplete) {
    throw new Error('Frame is not complete')
  }

  this.score = this.rollOne + this.rollTwo
  if (!this.bonus.length) {
    return
  } else {
    var bonus = this.bonus.reduce(_sumArray)
    this.score += bonus
  }
}

Frame.prototype._setAsComplete = function () {
  this.isComplete = true
}

Frame.prototype._checkNumber = function (num) {
  if (num > 10) {
    throw new Error('Number is higher than 10')
  } else if (num > (10 - this.rollOne)) {
    throw new Error('Score entered is higher than remaining pins')
  }
}

Frame.prototype._checkIfComplete = function () {
  if (this.isComplete) {
    throw new Error('Select the next frame. This frame is complete')
  }
};

function _sumArray(total, num) {
  return total + num
}

module.exports = Frame
