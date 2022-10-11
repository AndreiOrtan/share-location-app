import "./styles/app.css";
import "./styles/my-place.css";
import "./styles/share-place.css";
import { Modal } from "./src/components/modal";
import { Map } from "./src/components/map";

class PlaceFinder {
  constructor() {
    const locateBtn = document.getElementById("locate-btn");

    locateBtn.addEventListener("click", this.getLocationHandler.bind(this));
  }

  getMap(coords) {
    if (this.map) {
      this.map.render(coords);
    } else {
      this.map = new Map(coords);
    }
  }

  getLocationHandler() {
    if (!navigator.geolocation) {
      alert("Location Feature is not available!");
      return;
    }
    const modal = new Modal("loading-modal-content");
    modal.show();
    navigator.geolocation.getCurrentPosition(
      (succes) => {
        modal.hide();
        const coords = {
          lat: succes.coords.latitude,
          lng: succes.coords.longitude,
        };
        this.getMap(coords);
      },
      (fail) => {}
    );
  }
}
new PlaceFinder();
