// Singleton

function Universe() {
  let instance = this;
  this.start_time = 0;
  this.bang = 'Big';

  Universe = function() {
    return instance;
  }
}

let uni1 = new Universe();
let uni2 = new Universe();
console.log(uni1 === uni2)