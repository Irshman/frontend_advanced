// Command

class MyMath {
  constructor(initValue = 0) {
    this.number = initValue
  }

  square() {
    return this.number ** 2
  }

  cube() {
    return this.number ** 3
  }
}

class Command {
  constructor(subject) {
    this.subject = subject
    this.commandsExecuted = []
  }

  executed(command) {
    this.commandsExecuted.push(command)
    return this.subject[command]()
  }
}

const x = new Command(new MyMath(2))
console.log(x.executed('square'))