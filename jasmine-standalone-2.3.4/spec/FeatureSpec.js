describe(":Feature Test", function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });
  describe("under normal conditions", function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    });
    it("can instruct a plane to land", function() {
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it("can instruct a plane to take off", function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.planes()).toEqual([]);
      expect(airport.planes()).not.toContain(plane);
    });
});
  describe("under stormy conditions", function() {
      it("prevent takeoff when weather is stormy", function(){
      spyOn(Math, 'random').and.returnValue(0);
      plane.land(airport);
      spyOn(airport.weather, 'isStormy').and.returnValue(true);
      expect(function(){plane.takeOff();}).toThrowError("Fuck it's stormy!");
      expect(airport.planes()).toContain(plane);
    });

    it("prevent landing when weather is stormy", function(){
      spyOn(Math, 'random').and.returnValue(1);
      expect(function(){plane.land(airport);}).toThrowError("Fuck it's stormy!");
      expect(airport.planes()).toEqual([]);
    });
  });

});
