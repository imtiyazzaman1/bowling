var Frame = require('./Frame.js')

function Game(frames = [new Frame, new Frame, new Frame, new Frame, new Frame,
  new Frame, new Frame, new Frame, new Frame, new Frame, ])
{
  this.frames = frames
}

Game.prototype.addRollToFrame = function (num) {
  var current_frame = this.frames[0]
  current_frame.addRoll(num)
};


module.exports = Game
