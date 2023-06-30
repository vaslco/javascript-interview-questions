function maxProfit(prices, fee) {
  let cash = 0;
  let hold = Number.NEGATIVE_INFINITY;

  for (let price of prices) {
    cash = Math.max(cash, hold + price - fee);
    hold = Math.max(hold, cash - price);
  }

  return cash;
}
