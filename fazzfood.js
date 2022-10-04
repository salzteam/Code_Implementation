const FazzFood = (price, codeDiscount, distance, tax) => {
  if (typeof price !== "number") return "Invalid Price";
  else if (typeof distance !== "number") return "Invalid Distance";
  else if (typeof tax !== "boolean") return "Invalid Tax";
  const coupon = ["FAZZFOOD50", "DITRAKTIR60"];
  if (codeDiscount) {
    if (typeof codeDiscount !== "string")
      return "Invalid! Coupun Must Be a String";
  }
  let results = 0,
    shipCost = 5000,
    priceTax = 0,
    discount = 0;
  if (codeDiscount) {
    if (coupon.includes(codeDiscount)) {
      if (price > 49000) {
        discount = 0.5 * price;
        if (discount > 50000) {
          discount = 50000;
          results = price - discount;
        }
        results = price - discount;
      }
    } else if (coupon.includes(codeDiscount)) {
      if (price > 24000) {
        discount = 0.6 * price;
        if (discount > 30000) {
          discount = 30000;
          results = price - discount;
        }
        results = price - discount;
      }
    }
  }
  if (distance > 2) {
    shipCost = (distance - 2) * 3000 + 5000; // Menghitung Ongkir
  }
  if (tax) {
    priceTax = 0.05 * price; // Menghitung Pajak
  }
  return `====== FazzFood Delivery ======
Price         : ${price}
Discount      : - ${results}
Shipping Cost : ${shipCost}
Tax           : ${priceTax}
========================= +
SubTotal      : ${price - results + shipCost + priceTax}`; // Menghitung Subtotal
};
console.log(FazzFood(75000, "DITRAKTIR60", 5, true));
