function splitAndGetPrice(priceString) {
    return parseInt(priceString.split(' ')[1]);
}

module.exports = {splitAndGetPrice};