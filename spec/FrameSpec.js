var Frame = require('../src/Frame.js')

describe('Frame', function () {
  var frame
  beforeEach(function () {
    frame = new Frame()
  })

  describe('#add_roll_1', function () {
    it('adds the score for roll 1 to the frame', function () {
      frame.addRollOne(3)

      expect(frame.rollOne).toEqual(3)
    })
  })

  describe('#add_roll_2', function () {
    it('adds the score for roll 2 to the frame', function () {
      frame.addRollTwo(6)

      expect(frame.rollTwo).toEqual(6)
    })

    it('throws error if value does not match remaining pins ', function() {
      frame.addRollOne(5)

      expect(function () { frame.addRollTwo(6) })
      .toThrow(new Error('Number is higher than remaining pins'));
    });
  })

  describe('#addRolls', function () {
    it('totals the score for the frame', function () {
      frame.addRollOne(5)
      frame.addRollTwo(4)
      frame.calculateScore()

      expect(frame.score).toEqual(9)
    })
  })
})
