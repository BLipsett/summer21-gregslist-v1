import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";
let url = "https://bcw-sandbox.herokuapp.com/api/houses/";

class HousesService {
  async getHouses() {
    let res = await axios.get(url);
    ProxyState.houses = res.data.map((h) => new House(h));
  }

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
