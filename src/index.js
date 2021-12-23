module.exports = function reverse (n) {
    return Number(String(n).split('').filter((el) => el>=0).reverse().join(''));
}
