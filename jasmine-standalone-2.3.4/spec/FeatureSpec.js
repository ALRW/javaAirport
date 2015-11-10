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
});
