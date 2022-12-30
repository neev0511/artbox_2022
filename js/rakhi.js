$(document).ready(function () {
  get_Kids_Rakhi();
  get_Single_Rakhi();
  get_Roli_Moli();
  get_Couples_Rakhi();
  get_Envelopes();
  console.log("Testing...");
});

const get_Roli_Moli = () => {
  axios
    .get("https://neev0511.github.io/JSON/roli_moli.json")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#roli-moli").append(`
                  <div class="card" style="width: 18rem">
                      <img
                          class="card-img-top"
                          src="images/IMG_${data[i].img}.jpg"
                          alt="Card image cap"
                      />
                      <div class="card-body">
                          <div class="price">₹${data[i].price}</div>
                      </div>
                  </div>
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
const get_Kids_Rakhi = () => {
  axios
    .get("https://neev0511.github.io/JSON/kids_rakhi.json")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#kids-rakhi").append(`
                  <div class="card" style="width: 18rem">
                      <img
                          class="card-img-top"
                          src="images/IMG_${data[i].img}.jpg"
                          alt="Card image cap"
                      />
                      <div class="card-body">
                          <div class="price">₹${data[i].price}</div>
                      </div>
                  </div>
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
const get_Single_Rakhi = () => {
  axios
    .get("https://neev0511.github.io/JSON/single_rakhi.json")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#single-rakhi").append(`
                  <div class="card" style="width: 18rem">
                      <img
                          class="card-img-top"
                          src="images/IMG_${data[i].img}.jpg"
                          alt="Card image cap"
                      />
                      <div class="card-body">
                          <div class="price">₹${data[i].price}</div>
                      </div>
                  </div>
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
const get_Couples_Rakhi = () => {
  axios
    .get("https://neev0511.github.io/JSON/couple_rakhi.json")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#couples-rakhi").append(`
                  <div class="card" style="width: 18rem">
                      <img
                          class="card-img-top"
                          src="images/IMG_${data[i].img}.jpg"
                          alt="Card image cap"
                      />
                      <div class="card-body">
                          <div class="price">₹${data[i].price}</div>
                      </div>
                  </div>
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
const get_Envelopes = () => {
  axios
    .get("https://neev0511.github.io/JSON/envelopes.json")
    .then((response) => {
      const data = response.data;
      var i = 0;
      while (i < 3) {
        $("#envelopes").append(`
                  <div class="card" style="width: 18rem">
                      <img
                          class="card-img-top"
                          src="images/IMG_${data[i].img}.jpg"
                          alt="Card image cap"
                      />
                      <div class="card-body">
                          <div class="price">₹${data[i].price}</div>
                      </div>
                  </div>
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
