var Game = require('../src/Game.js')

describe('Game', function() {
  var frame1
  var frame2

  var game

  beforeEach(function() {
    frame1 = jasmine.createSpyObj('frame1', ['addRoll']);
    frame2 = jasmine.createSpyObj('frame2', ['addRoll']);
    frames = [frame1, frame2]
    game = new Game(frames)

  });

  describe('#addRollToFrame', function() {
    it('sets a roll in the current frame', function() {
      game.addRollToFrame(4)
      expect(frame1.addRoll).toHaveBeenCalledWith(4);
    });
  });

});
