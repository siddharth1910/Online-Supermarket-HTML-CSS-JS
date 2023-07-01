

// const createElementFromString = (string) => {
//   const el = document.createElement('div');
//   el.innerHTML = string;
//   return el.firstChild;
// };

// const productEl = document.getElementById('product-card');


// const productCards = async () => {
//   productEl.innerHTML = '';
//   for (let i = 0; i < 9; i++) {
//       const productEl = createElementFromString(
    //     `<div class="card shadow-sm">
    //     <div class="thumnail">
    //       <div style="text-align: center;">
    //         <a href="item.html"><img src="images/product.png" alt="Apple"></a>
    //     </div>
    //     </div>
    //     <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-1 border-bottom"></div>
    //     <div class="card-body">
    //       <strong>APPLE</strong>
    //       <p class="card-text">1 kg of Freshly grown, locally sourced apples from the plains. Delivered to your doorstep</p>
    //       <div class="d-flex justify-content-between align-items-center">
    //         <div class="btn-group">
    //           <button type="button" class="btn btn-sm btn-outline-secondary"><i class ="fa fa-shopping-cart"></i></button>
    //           <button type="button" class="btn btn-sm btn-outline-secondary"><i class ="fa fa-heart-o"></i></button>
    //         </div>
    //         <strong>Rs. 50</strong>
    //       </div>
    //     </div>
    //   </div>`
//       );
//       productEl.appendChild(productEl);
//   }
// };

// const main = async () => {
//   await productCards();
// };

// main();