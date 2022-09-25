// Proxy (Memoization) - це структурний патерн проектування, що дозволяє підставляти замість реальних об'єктів спеціальні об'єкти-замінники.
// Ці об'єкти перехоплюють виклики до оригінального об'єкта, дозволяючи зробити щось до або після передачі оригіналу.

function GeoCoder() {
  this.getLatLng = function(address) {
    if(address === "Amsterdam") {
      return 1;
    } else if(address === "Paris") {
      return 2;
    } else if(address === "Kyiv") {
      return 3;
    }
    return 0
  }
}

function GeoProxy() {
  let geoCoder = new GeoCoder();
  let geoCache = {};

  return {
    getLatLng: function(address) {
      if(!geoCache[address]) {
        geoCache[address] = geoCoder.getLatLng(address);
      }

      return geoCache[address]
    }
  }
}

let geo = new GeoProxy();
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');
geo.getLatLng('Kyiv');