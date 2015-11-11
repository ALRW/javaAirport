describe(":Feature Test", function() {

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
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
