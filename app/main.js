import { BicyclesController } from "./Controllers/BicyclesController.js";
import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
class App {
  // constructor(){
  //   this.carsController = new CarsController()
  // }

  carsController = new CarsController();
  housesController = new HousesController();
  bicyclesController = new BicyclesController();
}

const app = new App();

window["app"] = app;
