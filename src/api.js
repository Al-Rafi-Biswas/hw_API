let div = document.getElementById("div");

div.style.border = "2px solid red";
div.style.margin = "5px";
div.style.display = "flex";
div.style.flexDirection = "column";
div.style.alignItems = "center";

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    data.products.map((item) => {
      div.innerHTML += ` <div id="product" class="border border-red-500 rounded-lg shadow-xl p-3 m-4">
          <img src="${item.thumbnail}" class="w-[300px] h-[250px] rounded-lg m-3">
          <h2 class="text-center text-[24px] text-red-500">${item.title}</h2>
          <h4 class="text-red-500 m-3 text-center font-bold">Price: $${item.price}</h4>
        </div> `;
    });
  });

// let div = document.getElementById("div");

// div.style.border = "2px solid red";
// div.style.margin = "5px";
// div.style.display = "flex";
// div.style.flexDirection = "column";
// div.style.alignItems = "center";

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((data) => {
//     data.products.map((item) => {
//       div.innerHTML += `
//         <div id="product" class="border border-red-500 rounded-lg shadow-xl p-3 m-2">
//           <img src="${item.thumbnail}" class="w-[300px] h-[250px] rounded-lg m-3">
//           <h2 class="text-center text-[24px] text-red-500">${item.title}</h2>
//           <h4 class="text-red-500 m-3 text-center">Price: $${item.price}</h4>
//         </div>
//       `;
//     });
//   });
