describe('Frame', function () {
  var frame
  beforeEach(function () {
    frame = new Frame()
  })

  describe('#addRoll', function () {
    it('adds the score for roll 1 to the frame', function () {
      frame.addRoll(3)

      expect(frame.rollOne).toEqual(3)
    })

    it('throws error if number is higher than 10', function () {
      expect(function () { frame.addRoll(11) })
        .toThrow(new Error('Number is higher than 10'))
    })

    it('adds the score for roll 2 to the frame', function () {
      frame.addRoll(3)
      frame.addRoll(4)

      expect(frame.rollTwo).toEqual(4)
    })

    it('throws error if second roll is higher than remainging pins', function () {
      frame.addRoll(5)

      expect(function () { frame.addRoll(6) })
        .toThrow(new Error('Score entered is higher than remaining pins'))
    })

    it('throws error if both rolls are complete', function () {
      frame.addRoll(1)
      frame.addRoll(4)

      expect(function () { frame.addRoll(1) })
        .toThrow(new Error('Select the next frame. This frame is complete'))
    })
  })

  describe('#addBonus', function () {
    it('adds bonus points to the frame', function () {
      frame.addBonus(8)
      frame.addBonus(2)

      expect(frame.bonus).toEqual([8, 2])
    })
  })

  describe('#calculateScore', function () {
    it('totals the score for the frame', function () {
      frame.addRoll(5)
      frame.addRoll(4)
      frame.calculateScore()

      expect(frame.score).toEqual(9)
    })

    it('includes any bonuses in the score', function () {
      frame.addRoll(6)
      frame.addRoll(4)
      frame.addBonus(6)
      frame.calculateScore()

      expect(frame.score).toEqual(16)
    })
  })

  describe('#isFinishedRolling', function() {
    it('returns true if both rolls are complete', function() {
      frame.addRoll(2)
      frame.addRoll(2)
      expect(frame.isFinishedRolling()).toEqual(true);
    });
  });
})
