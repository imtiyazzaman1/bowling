var Frame = require('./Frame.js')

let i = 0

function Game(frames = [new Frame, new Frame, new Frame, new Frame, new Frame,
  new Frame, new Frame, new Frame, new Frame, new Frame, ])
{
  this.frames = frames
}

Game.prototype.addRollToFrame = function (num) {
  var current_frame = this.frames[i]
  if (current_frame.rollTwo !== undefined) {
    i++
    current_frame = this.frames[i]
  }
  current_frame.addRoll(num)
};


module.exports = Game
