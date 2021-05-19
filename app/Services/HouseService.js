import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService {
  addHouse(formData) {
    let newHouse = new House(
      formData.description,
      formData.size,
      formData.bedrooms,
      formData.bathrooms,
      formData.acreage,
      formData.price,
      formData.img
    );
    ProxyState.houses = [newHouse, ...ProxyState.houses];
  }
}

export const housesService = new HousesService();
