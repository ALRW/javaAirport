describe("Airport", function() {

  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = { isStormy: function(){}};
    airport = new Airport(weather);
    plane = jasmine.createSpy('plane');

  });

  it("starts as an empty airport", function() {
    expect(airport.planes()).toEqual([]);
  });

  it("can recieve a plane", function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it("can release a plane", function() {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
  // it("can check for stormy conditions", function(){
  //   expect(airport.weather.isStormy()).toBeFalsy();
  // });
  describe("under stormy conditions", function(){
    it("throws and error during takeoff", function(){
      // airport.clearForLanding(plane);
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function(){airport.clearForTakeOff(plane);}).toThrowError("Fuck it's stormy!");
    });
    it("throws and error if landing", function(){
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function(){airport.clearForLanding(plane);}).toThrowError("Fuck it's stormy!");
    });
  });
});
