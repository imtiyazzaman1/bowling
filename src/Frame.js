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
    this._checkIfSpare()

    if (!this.isSpare) {
      this._setAsComplete()
    }
  }
}

Frame.prototype.addBonus = function (num) {
  if (this.isComplete) {
    return
  }
  this.bonus.push(num)
  if (this.isSpare) {
    this._setAsComplete()
  }
}

Frame.prototype.calculateScore = function () {
  if (!this.isComplete) {
    return
  }
  this.score = this.rollOne + this.rollTwo

  if (this.bonus.length) {
    var bonus = this.bonus.reduce(_sumArray)
    this.score += bonus
  }
}

Frame.prototype.isFinishedRolling = function () {
  return this.rollTwo !== undefined
};

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
}

Frame.prototype._checkIfSpare = function () {
  if (this.rollOne + this.rollTwo === 10) {
    this.isSpare = true
  }
}

function _sumArray (total, num) {
  return total + num
}

module.exports = Frame
