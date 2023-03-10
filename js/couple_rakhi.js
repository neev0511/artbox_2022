$(document).ready(function () {
  js = [
    {
      img: "0413",
      price: 650,
    },
    {
      img: "0481",
      price: 595,
    },
    {
      img: "0498",
      price: 450,
    },
    {
      img: "0528",
      price: 625,
    },
    {
      img: "0516",
      price: 250,
    },
    {
      img: 7756,
      price: 350,
    },
    {
      img: 7758,
      price: 350,
    },
    {
      img: 7799,
      price: 625,
    },
    {
      img: 7806,
      price: 285,
    },
    {
      img: 7818,
      price: 350,
    },
    {
      img: 7867,
      price: 400,
    },
    {
      img: 8507,
      price: 350,
    },
    {
      img: 8548,
      price: 350,
    },
    {
      img: 8559,
      price: 375,
    },
    {
      img: 8567,
      price: 525,
    },
    {
      img: 8621,
      price: 400,
    },
    {
      img: 8629,
      price: 650,
    },
    {
      img: 8635,
      price: 250,
    },
    {
      img: 8639,
      price: 275,
    },
    {
      img: 8644,
      price: 425,
    },
    {
      img: 8646,
      price: 450,
    },
    {
      img: 8653,
      price: 550,
    },
    {
      img: 8659,
      price: 350,
    },
    {
      img: 8662,
      price: 350,
    },
    {
      img: 8664,
      price: 350,
    },
    {
      img: 8669,
      price: 350,
    },
    {
      img: 8673,
      price: 350,
    },
    {
      img: 8683,
      price: 625,
    },
    {
      img: 8743,
      price: 600,
    },
    {
      img: 8750,
      price: 375,
    },
    {
      img: 7887,
      price: 300,
    },
    {
      img: 7861,
      price: 275,
    },
    {
      img: 7694,
      price: 350,
    },
    {
      img: 7834,
      price: 275,
    },
    {
      img: 8789,
      price: 275,
    },
    {
      img: 8966,
      price: 750,
    },
    {
      img: 8967,
      price: 595,
    },
    {
      img: 8984,
      price: 500,
    },
    {
      img: 9494,
      price: 950,
    },
    {
      img: 9742,
      price: 425,
    },
    {
      img: 9750,
      price: 550,
    },
  ];

  getData();
});

const getData = () => {
  axios
    .get("https://neev0511.github.io/JSON/couple_rakhi.json")
    .then((response) => {
      const data = js;
      // const data = response.data
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
                        <div class="price">???${data[i].price}</div>
                    </div>
                </div>
            `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
