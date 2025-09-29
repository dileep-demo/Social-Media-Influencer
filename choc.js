function maxChocolates(totalMoney, chocCost, cashbackPerWrapper) {
    let chocolates = Math.floor(totalMoney / chocCost);
    let wrappers = chocolates;

    while (wrappers >= (chocCost / cashbackPerWrapper)) {
        let extraChocolates = Math.floor(wrappers * cashbackPerWrapper / chocCost);
        chocolates += extraChocolates;
        wrappers =  extraChocolates;
    }

    return chocolates;
}

const totalMoney = 50;
const chocCost = 2;
const cashbackPerWrapper = 0.5;

console.log("Total chocolates you can buy:", maxChocolates(totalMoney, chocCost, cashbackPerWrapper));
