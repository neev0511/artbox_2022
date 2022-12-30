$(document).ready(function () {
  js = [
    {
      bigImg: 7801,
      smlImg1: 8699,
      smlImg2: 0,
      smlImg3: 0,
      price: 350,
    },
    {
      bigImg: 8538,
      smlImg1: 7636,
      smlImg2: 0,
      smlImg3: 0,
      price: 385,
    },
    {
      bigImg: 8766,
      smlImg1: 8768,
      smlImg2: 8759,
      smlImg3: 8772,
      price: 385,
    },
    {
      bigImg: 9003,
      smlImg1: 9034,
      smlImg2: 0,
      smlImg3: 0,
      price: 495,
    },
    {
      bigImg: 9043,
      smlImg1: 9059,
      smlImg2: 0,
      smlImg3: 0,
      price: 495,
    },
    {
      bigImg: 9055,
      smlImg1: 9057,
      smlImg2: 9013,
      smlImg3: 9014,
      price: 1100,
    },
    {
      bigImg: 7741,
      smlImg1: 7573,
      smlImg2: 0,
      smlImg3: 0,
      price: 100,
    },
  ];

  getData();
});

const getData = () => {
  axios
    .get("https://neev0511.github.io/JSON/featured.json")
    .then((response) => {
      const data = js;
      var i = 0;
      while (i < data.length) {
        $(".cards").append(`
        <div class="featured-card" style="width: 18rem">
        <img
          class="featured-card-img-top"
          src="images/IMG_${data[i].bigImg}.jpg"
          alt="Card image cap"
          id="feature${data[i].bigImg}"
        />
        <div class="other-img">
          <img
            src="images/IMG_${data[i].smlImg1}.jpg"
            class="featured-card-img-bottom"
            onclick="feature('${data[i].smlImg1}','${data[i].bigImg}')"
            id="feature${data[i].smlImg1}"
          />
          <img
            src="images/IMG_${data[i].smlImg2}.jpg"
            class="featured-card-img-bottom"
            onclick="feature(${data[i].smlImg2},'${data[i].bigImg}')"
            id="feature${data[i].smlImg2}"
          />
          <img
            src="images/IMG_${data[i].smlImg3}.jpg"
            class="featured-card-img-bottom"
            onclick="feature('${data[i].smlImg3}','${data[i].bigImg}')"
            id="feature${data[i].smlImg3}"
          />
        </div>
        <div class="featured-card-body">
          <div class="price" style="margin-top: 10px">₹${data[i].price}</div>
        </div>
        </div>
        
              `);
        i++;
      }
    })
    .catch((error) => console.error(error));
};
function feature(small_img_name, big_id) {
  if (small_img_name === 0) return;
  var x = "#feature" + small_img_name;
  var y = "#feature" + big_id;
  var a = document.querySelector(x);
  var b = document.querySelector(y);
  var c = a.src;
  a.src = b.src;
  b.src = c;
}
