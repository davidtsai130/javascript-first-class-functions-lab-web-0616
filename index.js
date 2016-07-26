function countdown(callback) {
  window.setTimeout(callback, 2000)
}

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function createMultiplier(n) {
  return function multiplierValue(value) {
    return n * value
  }
}

function multiplier(a, b) {
  return a * b
}

var doublerWithBind = multiplier.bind(2)
var triplerWithBind = multiplier.bind(3)

      