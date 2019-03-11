// You're trying to make your fortune by trading Bitcoin. Suppose you want to automate this task. Write a function findMaxProfit that receives an array of today's Bitcoin prices. Your function should return the maximum profit you can make from a single buy and sell. You must buy first before selling; shorting is not allowed.
function findMaxProfit(prices) {
	//write code
	let maxProfit = 0;
	let currentProfit = 0;

	//loop through prices
	for (let i = 1; i < prices.length; i++) {
		let prevPrice = prices[i - 1];
		let price = prices[i];

		currentProfit = price - prevPrice;

		if (currentProfit > maxProfit) {
			maxProfit = currentProfit;
		}
	}

	//subtract previous price from current price to get current profit

	// compare current profit with max profit

	// if greater, update maxprofit
}

const bitcoinPrices = [1050, 270, 1540, 3800, 2];
findMaxProfit(bitcoinPrices); // should return 3530, which is the max profit you can make from these prices by buying at 270 and selling at 3800
