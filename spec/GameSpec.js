var Game = require('../src/Game.js')

describe('Game', function() {
  var game
  beforeEach(function() {
    game = new Game()
  });

  describe('#addRollToFrame', function() {
    it('sets a roll in the current frame', function() {
      game.addRollToFrame(4)

      expect(game.frames[0].rollOne).toEqual(4);
    });

    it('moves on to the next frame when current frame is complete', function() {
      game.addRollToFrame(4)
      game.addRollToFrame(4)
      game.addRollToFrame(4)

      expect(game.frames[0].rollOne).toEqual(4);
      expect(game.frames[0].rollTwo).toEqual(4);
      expect(game.frames[1].rollOne).toEqual(4);
    });
  });
});
