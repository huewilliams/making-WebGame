// input.value : x
// bomber : y
function oper(input, bomber, time) {
    return Math.floor(Number(input) / 25 * bomber + (time * 3 * bomber * 0.001 * input));
}

module.exports = oper();