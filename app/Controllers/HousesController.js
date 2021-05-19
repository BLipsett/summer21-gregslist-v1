import { ProxyState } from "../AppState.js";
import { housesService } from "../Services/HouseService.js";

export class HousesController {
  constructor() {
    ProxyState.on("houses", this.drawHouses);
  }

  drawHouses() {
    let template = "";
    ProxyState.houses.forEach((house) => {
      template += /*html*/ `
            <div class="col-lg-4 listing my-3">
                <div class="card">
                    <div>
                        <img src="${house.img}" height="200" />
                    </div>
                    <div class="card-body">
                        <h5>${house.description}</h5>
                        <p>Sq Ft.${house.size}<p>
                        <P>Beds: ${house.bedrooms}</p>
                        <P>Baths: ${house.bathrooms}</p>
                        <p>Acres: ${house.acreage}</p>
                        <h5>$${house.price}</h5>
                    </div>
                </div>

                
            </div>
            <div>
            <button class="fab" onclick="app.housesController.toggleForm()">
              +
            </button>
            </div>
            `;
    });
    document.getElementById("listings").innerHTML = template;
    document.getElementById("car-form").classList.add("d-none");
  }

  addHouse(event) {
    event.preventDefault();
    let form = event.target;
    let formData = {
      img: form.img.value,
      description: form.description.value,
      bedrooms: form.bedrooms.value,
      bathrooms: form.bathrooms.value,
      size: form.squareFootage.value,
      acreage: form.acres.value,
      price: form.price.value,
    };

    housesService.addHouse(formData);
    form.reset();
    this.toggleForm();
  }

  toggleForm() {
    document.getElementById("house-form").classList.toggle("d-none");
  }
}
