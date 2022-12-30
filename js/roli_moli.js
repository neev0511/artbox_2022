$(document).ready(function () {
  js = [
    { img: 8793, price: 220 },
    { img: 8839, price: 200 },
    { img: 8853, price: 170 },
    { img: 8857, price: 80 },
    { img: 8901, price: 185 },
    { img: 8829, price: 170 },
    { img: 8915, price: 495 },
    { img: 8939, price: 600 },
  ];
  getData();
});

const getData = () => {
  axios
    .get("https://neev0511.github.io/JSON/roli_moli.json")
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
