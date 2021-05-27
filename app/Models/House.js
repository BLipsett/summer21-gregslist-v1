export class House {
  constructor({
    description,
    levels,
    bedrooms,
    bathrooms,
    year,
    price,
    imgUrl,
  }) {
    // (this.id = id),
    (this.description = description),
      (this.levels = levels),
      (this.bedrooms = bedrooms),
      (this.bathrooms = bathrooms),
      (this.year = year),
      (this.price = price),
      (this.imgUrl = imgUrl);
  }

  get houseTemplate() {
    return `
    <div class="col-lg-4 listing my-3">
                <div class="card">
                    <div>
                        <img src="${this.imgUrl}" height="200" />
                    </div>
                    <div class="card-body">
                        <h5>${this.description}</h5>
                        <p>Sq Ft.${this.levels}<p>
                        <P>Beds: ${this.bedrooms}</p>
                        <P>Baths: ${this.bathrooms}</p>
                        <p>Acres: ${this.year}</p>
                        <h5>$${this.price}</h5>
                    </div>
                </div>

                
            </div>
            <div>
            <button class="fab" onclick="app.housesController.toggleForm()">
              +
            </button>
            </div>
    `;
  }
}
