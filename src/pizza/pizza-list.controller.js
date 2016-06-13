export class PizzaListController {
  constructor ($timeout) {
    console.log('START PizzaListController')
    
    this.$timeout = $timeout
    this.pizzas = [
      { name: 'Pizza 1', status: 0 },
      { name: 'Pizza 2', status: 0 },
      { name: 'Pizza 3', status: 0 },
      { name: 'Pizza 4', status: 0 },
      { name: 'Pizza 5', status: 0 }
    ]
  }
  
  addPizza () {
    this.pizzas.push({
      name: 'new pizza'
    })
  }

  cookPizza (pizza) {
    this.$timeout(() => {
      pizza.status = 1
    }, 1000)
  }
}
