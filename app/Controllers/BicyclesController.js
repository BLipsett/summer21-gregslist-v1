import { ProxyState } from "../AppState.js";

export class BicyclesController {
  constructor() {
    ProxyState.on("bicycles", this.drawBicycles);
  }

  drawBicycles() {
    let template = "";
    ProxyState.bicycles.forEach((b) => {
      template += /*html*/ `
            <div class="col-lg-4 listing my-3">
                <div class="card">
                    <div>
                        <img src="${b.img}" height="200" />
                    </div>
                    <div class="card-body">
                        <h5>${b.brand}<h5>
                        <p>${b.type}<p>
                        <p>${b.price}<p>
                        <p>${b.description}<p>
                    </div>
                </div>
            </div>
            
          `;
    });
    document.getElementById("listings").innerHTML = template;
  }

  addBicycle;
}
