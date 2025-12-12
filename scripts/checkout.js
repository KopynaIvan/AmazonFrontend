import {renderOrderSummary} from './checkout/orderSummary.js'
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProductsFetch, loadProducts } from '../data/products.js';
import { loadCart } from '../data/cart.js';


async function loadPage() {
    try {
        await loadProductsFetch();
     new Promise((resolve) => {
    loadCart(() => {
        resolve();
    });
    })
    
} catch (error) {
    console.log('pisuuuuuuuuuuuuuun')
}
    
  renderOrderSummary();
  renderPaymentSummary()

}

loadPage()


// Promise.all([
//     loadProductsFetch(),
//    new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     })

// ]).then((values) => {
//     
// })

// new Promise((resolve) => {
    
//     loadProducts(() =>{
//         resolve('value1')
//     })

// }).then((value) => {
//     console.log(value)

//     return new Promise((resolve) => {
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() => {
//     
// });


// loadProducts(() => {
//     loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary()
//     })
// })
