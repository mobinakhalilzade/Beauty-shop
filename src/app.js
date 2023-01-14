function getCategories() {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
      const categories = document.getElementById("categories");
      let html = "";
      json.forEach((item, index) => {
        let segment = `<div class="border-4 rounded-t-full border-darkPink pt-16 px-5 pb-5 bg-pink">
        <img width="200" class="h-[250px]" src="../assets/images/category-${index+1}.png"/>
        <label>${item}</label>
        </div>`;
        html += segment;
      });
      categories.innerHTML = html;
    });
}

function getAllProducts() {
  return [{ categoryName: "Blush" }, { categoryName: "Bronzer" }];
}

getAllProducts();
getCategories();
