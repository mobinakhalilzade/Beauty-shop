function getAllProducts() {
  let products = document.getElementById("products");
  let html = "";
  fetch("http://makeup-api.herokuapp.com/api/v1/products.json")
    .then((res) => res.json())
    .then((json) => {
      const arr = json.splice(900);
      arr.forEach((el, i) => {
        console.log(el);
        let segment = `<div class="rounded border-2 border-pink
        shadow text-black p-4 hover:bg-lightPink cursor-pointer">
       <img src="${el.api_featured_image}" alt="${
          el.product_type
        }" class="mx-auto" height="200">
       <h3 class="my-4 text-darkPink">${el.product_type} ${i + 1}</h3>
       <p class="text-base text-truncate-2">${el.description}</p>
       <small class="text-pink">
       ${el.created_at}
       </small>
       <button class="text-white bg-pink mt-5">Add to Cart</button>
       </div>`;
        html += segment;
      });
      products.innerHTML = html;
    });
}

// api_featured_image
// :
// "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/031/original/data?1514061112"
// brand
// :
// "covergirl"
// category
// :
// null
// created_at
// :
// "2016-10-01T18:11:21.909Z"
// currency
// :
// null
// description
// :
// "A breakthrough in no-clump mascara! Get 200% more volume and zero \nclumps. Features an innovative double-sided brush with lash-loading and \nclump-combing zones to crush clumps.Features: 200% more volume, zero clumpsInnovative curved brushSuper-volumized, beautifully separated lashes"
// id
// :
// 31
// image_link
// :
// "https://d3t32hsnjxo7q6.cloudfront.net/i/df2f212e8449edcaff4876f592c4311e_ra,w158,h184_pa,w158,h184.jpeg"
// name
// :
// "CoverGirl LastBlast Clump Crusher Mascara "
// price
// :
// "9.99"
// price_sign
// :
// null
// product_api_url
// :
// "http://makeup-api.herokuapp.com/api/v1/products/31.json"
// product_colors
// :
// []
// product_link
// :
// "https://well.ca/products/covergirl-lastblast-clump-crusher_74593.html"
// product_type
// :
// "mascara"
// rating
// :
// 4.5
// tag_list
// :
// []
// updated_at
// :
// "2017-12-23T20:31:52.154Z"
// website_link
// :
// "https://well.ca"

getAllProducts();
