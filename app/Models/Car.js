export class Car {
  constructor({ id, make, model, year, description, price, imgUrl }) {
    this.id = id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.description = description;
    this.price = price;
    this.img = imgUrl;
  }

  get carsTemplate() {
    return `
    <div class="col-lg-4 listing my-3">
                <div class="card">
                    <div> 
                        <img src="${this.img}" height="200" /> 
                    </div>
                    <div class="card-body">
                        <p>
                            <b>${this.make} ${this.model}</b>
                        </p>
                        <p>
                            <em>${this.year}</em>
                        </p>
                        <p>
                            <em>${this.price}</em>
                        </p>
                        <p>
                            <em>${this.description}</em>
                        </p>
                    <button onclick="app.carsController.deleteCar('${this.id}')">Delete Me</button>
                    </div>
                </div>
                <button class="fab" onclick="app.carsController.toggleForm()">
              +
            </button>
            </div>
        </div>
    </div>
    `;
  }
}
