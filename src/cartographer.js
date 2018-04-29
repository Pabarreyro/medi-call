class Cartographer {
  constructor(map) {
    this.map = map;
    this.markers = [];
  }

  plotMarker(lat, long, id) {
    let coords = new maps.Latlng(lat, long);
    let marker = new maps.Marker({
      position: coords,
      map: this.map,
      label: id
    });

  }
}

export { Cartographer };
