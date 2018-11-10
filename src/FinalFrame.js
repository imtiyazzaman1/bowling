function FinalFrame() {
  this.rollThree = undefined
}

FinalFrame.prototype = new Frame()

FinalFrame.prototype.addRoll = function (num) {
  this._checkIfComplete()

  if (this.rollOne === undefined) {
    this._checkNumber(num)
    if (num === 10) this._setAsStrike()
    this.rollOne = num
  } else if (this.rollTwo === undefined) {
    this._checkNumber(num)
    this.rollTwo = num
    this._checkIfSpare()

    if (!this.isSpare) {
      this._setAsComplete()
    } else {
      this.rollThree = num
    }
  }
};
