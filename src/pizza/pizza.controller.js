import { toppings } from './toppings'

export class PizzaController {
  constructor () {
    this.pizza = {
      name: '',
      toppings: []
    }

    this.toppings = toppings
  }

  savePizza (form) {
    if (form.$invalid) {
      alert('ERROR !')
      return
    }

    var keys = Object.keys(toppings)
    console.log('toppings', this.pizza.toppings)
    console.log('keys', keys)

    // transformation toppings -> ['eggs', 'mushrooms']
    this.pizza.toppings = this.pizza.toppings
      // .map((v, i) => {
      //   if (v) return keys[i]
      // })
      // .filter(v => v)
      .reduce((acc, v, i) => {
        if (v) acc.push(keys[i])
        return acc
      }, [])

    console.log('save', this.pizza.toppings)
  }
}
