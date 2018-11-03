function Frame () {
  this.rollOne = 0
  this.rollTwo = 0
  this.score = 0
}

Frame.prototype.addRollOne = function (num) {
  this.rollOne = num
}

Frame.prototype.addRollTwo = function (num) {
  this.rollTwo = num
}

Frame.prototype.calculateScore = function () {
  this.score = this.rollOne + this.rollTwo
}

module.exports = Frame
