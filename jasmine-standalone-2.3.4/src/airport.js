function Airport (weather) {
  this.weather = weather || new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar;
};

Airport.prototype.clearForLanding = function(plane) {
  if(this.weather.isStormy()) {
  throw new Error("Fuck it's stormy!");
}
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  if(this.weather.isStormy()){
  throw new Error("Fuck it's stormy!");
}
  this._hangar = [];
};
// Airport.prototype.isStormy = function(){
//   return false;
// };
