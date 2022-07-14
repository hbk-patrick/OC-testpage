import { addItemToPickupCart, addItemToShippingCart } from './api';
window.alert("Hello, World!");
console.log('helloaaaa')

addItemToShippingCart().then((cartToken) => {
  window.alert(`Created Shipping Cart: ${cartToken}`);
})