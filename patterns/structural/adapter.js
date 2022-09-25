// Adapter -це структурний патерн проектування, який дозволяє об'єктам з несумісними інтерфейсами працювати разом.

class OldCalculator {
  operations(a, b, operation) {
    switch (operation) {
      case 'add': return a + b
      case 'sub': return a - b
      default: return NaN
    }
  }
}

class NewCalculator {
  add(a, b) {
    return a + b
  }

  sub(a, b) {
    return a - b
  }
}

class CalculatorAdapter {
  constructor() {
    this.calc = new NewCalculator()
  }

  operations(a, b, operation) {
    switch (operation) {
      case 'add': return this.calc.add(a, b)
      case 'sub': return this.calc.sub(a, b)
      default: return NaN
    }
  }
}

