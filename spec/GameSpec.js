var Game = require('../src/Game.js')

describe('Game', function() {
  var frame1
  var frame2

  var game

  describe('#addRollToFrame', function() {
    it('sets a roll in the current frame', function() {
      frame1 = jasmine.createSpyObj('frame1', ['addRoll']);
      frames = [frame1]
      game = new Game(frames)
      game.addRollToFrame(4)
      expect(frame1.addRoll).toHaveBeenCalledWith(4);
    });

    it('moves on to the next frame when current frame is complete', function() {
      frame1 = jasmine.createSpyObj('frame1', ['addRoll', 'rollTwo']);
      frame2 = jasmine.createSpyObj('frame2', ['addRoll']);
      frames = [frame1, frame2]
      game = new Game(frames)

      game.addRollToFrame(4)
      expect(frame2.addRoll).toHaveBeenCalledWith(4);
    });
  });

});
