// Facade
// Фасад - це структурний патерн проектування, 
// який надає простий інтерфейс до складної системи класів, бібліотеки або фреймворку


//* Example 1
function Mortgage(name) {
  this.name = name;
}

Mortgage.prototype = {
  applyFor: function(amount) {
    let result = 'approved'

    if(!new Bank().verify(this.name, amount)) {
      return "denied"
    } else if(!new Credit().get(this.name)) {
      return "denied"
    } else if(!new Background().check(amount)) {
      return "denied"
    }

    return '....'
  }
}

function Bank() {
  this.verify = function(name, amount) {
    return true
  }
}

function Credit() {
  this.get = function(name) {
    return true
  }
}

function Background() {
  this.check = function(amount) {
    return true
  }
}

var mort = new Mortgage('Bob');
mort.applyFor(10000);

//* Example 2 