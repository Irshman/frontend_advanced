// Observer (PubSub) - це поведінковий патерн проектування, який створює механізм підписки, що дозволяє одним об'єктам стежити та реагувати на події, що відбуваються в інших об'єктах.

function Click() {
  this.handler = [];
}

Click.prototype = {
  subscribe(fn) {
    this.handler.push(fn);
  },

  unsubscribe(fn) {
    return this.handler.filter(v => v === fn)
  },

  fire(fn) {
    this.handler.forEach(v => {
      if(v === fn) {
        v()
      }
    })
  }
}