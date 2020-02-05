// Instructions to every other class
// on how they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number
    lng: number
  }
}

export class CustomMap {
  readonly googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(<Element>document.querySelector(divId), {
      zoom: 1,
      center: {
        lat: 74.6973,
        lng: -94.8297
      }
    })
    // console.log(this.googleMap)
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      }
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: 'Hi how are ya?'
      })

      infoWindow.open(this.googleMap, marker)
    })
  }
}