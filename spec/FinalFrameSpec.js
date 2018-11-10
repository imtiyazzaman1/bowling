describe('Final Frame', function() {
  var finalFrame

  beforeEach(function() {
    finalFrame = new FinalFrame()
  });

  describe('#addRoll', function() {
    it('sets roll three if there is spare', function() {
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)
      finalFrame.addRoll(5)
      console.log(finalFrame);
      expect(finalFrame.rollThree).toEqual(5);
    });
  });
});
