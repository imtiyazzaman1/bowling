function FinalFrame() {
  this.bonus = []
  this.rollThree = undefined
}

FinalFrame.prototype = new Frame()

FinalFrame.prototype.addRoll = function (num) {
  this._checkIfComplete()

  if (this.rollOne === undefined) {
    this._checkNumber(num)
    this._checkIfStrike(num)
    this.rollOne = num

  } else if (this.rollTwo === undefined) {
    this._checkRemainingPins(num)
    this.rollTwo = num
    this._checkIfSpare()

    if (!this.isSpare && !this.isStrike) {
      this._setAsComplete()
    }
  } else if (this.rollThree === undefined && !this.isComplete) {
    if (this.isSpare || this.isStrike) {
      this.bonus.push(num)
    }
    this._setRollThree(num)
    this._setAsComplete()
  }
};

FinalFrame.prototype._checkIfStrike = function (num) {
  if (num === 10) {
    this.isStrike = true
  }
};

FinalFrame.prototype._checkRemainingPins = function (num) {
  if (this.rollOne !== 10) {
    this._checkNumber(num)
  }
};

FinalFrame.prototype._setRollThree = function (num) {
  if (this.isSpare || this.isStrike && this.rollTwo !== undefined) {
    this.rollThree = num
  }
};
