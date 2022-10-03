const FazzFood = (price, codeDiscount, distance, tax) => {
  if (typeof price !== "number") return "Invalid Price";
  else if (typeof distance !== "number") return "Invalid Distance";
  else if (typeof tax !== "boolean") return "Invalid Tax";
  const coupon = ["FAZZFOOD50", "DITRAKTIR60"];
  if (codeDiscount) {
    if (codeDiscount !== coupon[0] && codeDiscount !== coupon[1])
      return "Invalid! Coupon Not Found";
  }
  let results = "";
  let shipCost = "";
  let priceTax = "";
  let subTotal = "";
  if (codeDiscount) {
    let discount = "";
    if (codeDiscount == coupon[0]) {
      if (price > 49000) {
        discount = 0.5 * price;
        if (discount > 50000) {
          discount = 50000;
          results = price - discount;
        }
        results = price - discount;
      } else {
        return "Order price must be at least Rp 50.000 for this coupon";
      }
    } else if (codeDiscount == coupon[1]) {
      if (price > 24000) {
        discount = 0.6 * price;
        if (discount > 30000) {
          discount = 30000;
          results = price - discount;
        }
        results = price - discount;
      } else {
        return "Order price must be at least Rp 25.000 for this coupon";
      }
    }
  }
  if (distance < 2) {
    shipCost = 5000;
  } else {
    shipCost = (distance - 2) * 3000 + 5000;
  }
  if (tax == true) {
    priceTax = (5 * price) / 100;
  } else {
    priceTax = 0;
  }
  if (results == 0) {
    subTotal = price + shipCost + priceTax;
    results = "-";
  } else {
    subTotal = results + shipCost + priceTax;
  }

  return `Price : ${price}
Discount : ${results}
Shipping Cost : ${shipCost}
Tax : ${priceTax}
SubTotal : ${subTotal}`;
};

console.log(FazzFood(75000, "FAZZFOOD50", 5, true));
