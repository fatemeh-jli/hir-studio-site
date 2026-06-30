const CART_KEY = "cart";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  qty: number;
  image: string;
};

// گرفتن سبد
export const getCart = (): CartItem[] => {
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
};

// ذخیره سبد
export const setCart = (cart: CartItem[]) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));

  // مهم: برای sync
  window.dispatchEvent(new Event("cart_updated"));
};

// اضافه کردن محصول
export const addToCart = (product: any) => {
  const cart = getCart();

  const existing = cart.find((i) => i.id === product.id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: 1,
      image: product.img,
    });
  }

  setCart(cart);
};

// حذف
export const removeFromCart = (id: number) => {
  const cart = getCart().filter((i) => i.id !== id);
  setCart(cart);
};

// تغییر تعداد
export const updateQty = (id: number, delta: number) => {
  const cart = getCart();

  const item = cart.find((i) => i.id === id);

  if (item) {
    item.qty = Math.max(1, item.qty + delta);
  }

  setCart(cart);
};