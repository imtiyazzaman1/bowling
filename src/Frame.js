function Frame () {
  this.rollOne = undefined
  this.rollTwo = undefined
  this.score = undefined
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
    throw new Error("Select the next frame. This frame is complete")
  }
}

Frame.prototype.calculateScore = function () {
  this.score = this.rollOne + this.rollTwo
}
console.log(123);
module.exports = Frame;
