module.exports = function makeExchange(currency) {
    const maxLimit = 10000;

		const coins = {
			H: 50,
			Q: 25,
			D: 10,
			N: 5,
			P: 1
		};

		let countAmountCoins = (data, obj) => {
			let result = {};
			let numH, numQ, numD, numN, numtP;

			numH = Math.floor(data / obj.H);
			if (numH > 0) {result.H = numH};
			data =  data % obj.H;
			numQ = Math.floor(data / obj.Q);
			if (numQ > 0) {result.Q = numQ};
			data =  data % obj.Q;
			numD = Math.floor(data / obj.D);
			if (numD > 0) {result.D = numD};
			data =  data % obj.D;
			numN = Math.floor(data / obj.N);
			if (numN > 0) {result.N = numN};
			data =  data % obj.N;
			numP = Math.floor(data / obj.P);
			if (numP > 0) {result.P = numP};
			data =  data % obj.P;
			return result;
		};

		if (currency <= 0) {
			return {};
		} else if (currency > maxLimit ) {
			return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
		} else {
			return countAmountCoins(currency, coins);
		};
}
