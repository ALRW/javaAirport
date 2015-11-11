describe("Weather", function(){

  var weather;

  beforeEach(function(){
    weather = new Weather();
  });

  it("can be stormy", function(){
    spyOn(Math, 'random').and.returnValue(0.9);
    expect(weather.isStormy).toEqual(true);
  });
  it("can be clear", function(){
    spyOn(Math, 'random').and.returnValue(0.8);
    expect(weather.isStormy).toEqual(false);
  });
});
