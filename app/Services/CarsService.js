import { ProxyState } from "../AppState.js";
import { Car } from "../Models/Car.js";

let url = "https://bcw-sandbox.herokuapp.com/api/cars/";

class CarsService {
  async getCars() {
    let res = await axios.get(url);
    ProxyState.cars = res.data.map((car) => new Car(car));
  }

  async addCar(formData) {
    let res = await axios.post(url, formData);
    let newCar = new Car(res.data);

    ProxyState.cars = [newCar, ...ProxyState.cars];
  }

  async deleteCar(id) {
    await axios.delete(url + id);
    ProxyState.cars = ProxyState.cars.filter((car) => car.id != id);
  }
}

// NOTE singleton
export const carsService = new CarsService();
