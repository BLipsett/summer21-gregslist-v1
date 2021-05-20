import { Car } from "./Models/Car.js";
import { House } from "./Models/House.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { Bicycle } from "./Models/Bicycles.js";

class AppState extends EventEmitter {
  /** @type {Car[]} */
  cars = [
    new Car("Honda", "Accord", 10000, "rusty", 500, "//placehold.it/500x500"),
  ];

  /** @type {House[]} */
  houses = [
    new House("New-Englander", 1500, 2, 2, 2, 275000, "//placehold.it/500x500"),
    new House("Mid-Century", 1500, 2, 2, 2, 275000, "//placehold.it/500x500"),
  ];

  /** @type {Bicycle[]} */
  bicycles = [new Bicycle("Mountain", "Specialized", 800, "goes fast")];
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
