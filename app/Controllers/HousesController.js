import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HouseService.js";

export class HousesController {
  constructor() {
    housesService.getHouses();
    ProxyState.on("houses", this.drawHouses);
  }

  drawHouses() {
    let template = "";
    ProxyState.houses.forEach((house) => (template += house.houseTemplate));

    document.getElementById("listings").innerHTML = template;
    document.getElementById("car-form").classList.add("d-none");
  }

  addHouse(event) {
    event.preventDefault();
    let form = event.target;
    let formData = {
      imgUrl: form.imgUrl.value,
      description: form.description.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      levels: form.levels.value,
      year: form.year.value,
      price: form.price.value,
    };

    housesService.addHouse(formData);
    form.reset();
    this.toggleForm();
  }

  toggleForm() {
    console.log("toggle me");
    document.getElementById("house-form").classList.toggle("d-none");
  }
}
