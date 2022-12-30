$(document).ready(function () {
  js = [
    { img: 9091, price: "700 (Silver)" },
    { img: 9088, price: "700 (Silver)" },
    { img: 0002, price: "250" },
    { img: 7577, price: 120 },
    { img: 7589, price: 80 },
    { img: 7615, price: 160 },
    { img: 7618, price: 160 },
    { img: 7636, price: 400 },
    { img: 7642, price: 400 },
    { img: 7849, price: 275 },
    { img: 7850, price: 225 },
    { img: 7855, price: 285 },
    { img: 7882, price: 400 },
    { img: 7893, price: 275 },
    { img: 8541, price: 400 },
    { img: 8550, price: 225 },
    { img: 8772, price: 350 },
    { img: 8735, price: 225 },
    { img: 8759, price: 350 },
    { img: 8775, price: 225 },
    { img: 8699, price: 350 },
    { img: 8688, price: 435 },
    { img: 8691, price: 435 },
    { img: 8551, price: 450 },
    { img: 8783, price: 175 },
    { img: 8946, price: 110 },
    { img: 8951, price: 500 },
    { img: 8989, price: 100 },
  ];

  getData();
});

const getData = () => {
  axios
    .get("https://neev0511.github.io/JSON/single_rakhi.json")
    .then((response) => {
      const data = js;
      var i = 0;
      while (i < data.length) {
        $(".cards").append(`
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
