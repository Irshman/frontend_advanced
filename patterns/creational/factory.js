// Factory  

function Factory() {
  this.createEmployee = function(type) {
    let employee;
    if(type === 'fulltime') {
      employee = new FullTime();
    }
    if(type === 'parttime') {
      employee = new FullTime();
    }
    if(type === 'temporary') {
      employee = new FullTime();
    }
    if(type === 'contractor') {
      employee = new FullTime();
    }
    return employee
  }
}

function FullTime() {
  this.hourly = '12$'
}

function PartTime() {
  this.hourly = '13$'
}

function Temporary() {
  this.hourly = '50$'
}

function Contractor() {
  this.hourly = '16$'
}

let factory = new Factory();
factory.createEmployee('fulltime')