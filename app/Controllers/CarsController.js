import { ProxyState } from "../AppState.js";
import { carsService } from "../Services/CarsService.js";

export class CarsController {
  constructor() {
    ProxyState.on("cars", this.drawCars);
    carsService.getCars();
  }
  drawCars() {
    let template = "";
    ProxyState.cars.forEach((car) => (template += car.carsTemplate));

    document.getElementById("listings").innerHTML = template;
    document.getElementById("house-form").classList.add("d-none");
  }

  addCar(event) {
    event.preventDefault();
    console.log(event);
    let form = event.target;
    let formData = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value,
    };
    console.log(formData);
    carsService.addCar(formData);
    form.reset();
    this.toggleForm();
  }

  deleteCar(id) {
    console.log(id);
    carsService.deleteCar(id);
  }

  toggleForm() {
    document.getElementById("car-form").classList.toggle("d-none");
  }
}
