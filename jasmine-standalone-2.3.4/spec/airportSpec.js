describe("Airport", function() {

  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane');
  });

  it("starts as an empty airport", function() {
    expect(airport.planes()).toEqual([]);
  });

  it("can recieve a plane", function() {
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
});
