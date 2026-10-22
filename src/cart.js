function addToCart(cart, product, quantity) {
  if (quantity === 0) {
    throw new RangeError('Cannot add a product with 0 quantity.');
  }

  if (quantity > product.stock) {
    throw new RangeError('Cannot add more product items than in stock.');
  }

  const productInCart = cart.find(({ id }) => id === product.id) || null;

  if (productInCart !== null) {
    productInCart.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }

  return cart;
}

function changeQuantity(cart, productId, newQuantity) {
  if (newQuantity === 0) {
    throw new RangeError('Cannot change product quantity to 0.');
  }

  const productInCart = cart.find(({ id }) => id === productId) || null;

  if (productInCart === null) {
    return cart;
  }

  if (newQuantity > productInCart.stock) {
    throw new RangeError('Cannot add more product items than in stock.');
  }

  productInCart.quantity = newQuantity;

  return cart;
}

function removeFromCart(cart, productId) {
  return cart.filter((p) => p.id !== productId);
}

function calculateCartSubtotal(cart) {
  return cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);
}

function calculateOrderTotal(cart, discountCode) {
  const minTotalForDiscount = 20_000;
  const activeDiscountCode = 'SAVE10';
  const discountPercent = 10;
  const deliveryPrice = 30_000;
  const minTotalForFreeDelivery = 50_000;

  const subtotal = calculateCartSubtotal(cart);
  const discount =
    discountCode === activeDiscountCode && subtotal >= minTotalForDiscount
      ? subtotal * (discountPercent / 100)
      : 0;
  const delivery = subtotal >= minTotalForFreeDelivery ? 0 : deliveryPrice;
  const total = subtotal - discount + delivery;

  return { subtotal, discount, delivery, total };
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
