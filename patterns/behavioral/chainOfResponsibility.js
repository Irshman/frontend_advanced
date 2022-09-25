// Chain of Responsibility
// Ланцюжок обов'язків - це поведінковий патерн проектування, який дозволяє передавати запити послідовно по ланцюжку обробників. 
// Кожен наступний оброблювач вирішує, чи може він обробити запит сам і чи варто передавати запит далі по ланцюгу.

function Request(amount) {
  this.amount = amount;
}

Request.prototype = {
  get(x) {
    return this;
  }
}

let req = new Request(121);
req.get(2).get(3).get(76)