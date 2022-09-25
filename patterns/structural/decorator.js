// Decorator це структурний патерн проектування, який дозволяє динамічно додавати об'єктам нову функціональність, обертаючи їх у корисні «обгортки».

//* Example 1 
function User(name) {
  this.name = name;
  this.say = function() {
    console.log(`Hello ${this.name}`)
  }
}

function DecoratedUser(user, street, city) {
  this.user = user;
  this.name = user.name;
  this.street = street;
  this.city = city;
  this.say = function() {
    return this.street
  }
}

let user = new User('Bob')
let decoratedUser = new DecoratedUser(user, 'Broadway', 'New York')

//* Example 2

// Початковий класс 
class Server {
  constructor(ip, port) {
    this.ip = ip
    this.port = port
  }

  get url() {
    return `https://${this.ip}:${this.port}`
  }
}

// Декоратор (Обов'язково має приймати наш початковий класс та повертати його )
function aws(server) {
  server.isAWS = true
  server.awsInfo = function() {
    return server.url
  }
  return server 
}

function azure(server) {
  server.isAzure = true
  server.port += 500
  return server 
}

const serv1 = aws(new Server('15.12.24.98', 8080))
console.log(serv1.isAWS)
console.log(serv1.awsInfo())

const serv2 = azure(new Server('15.12.24.98', 8080))
console.log(serv2.isAzure)
console.log(serv2.url)