import { Pizza } from './pizza'

export function pizzaToppingsFilter () {
  return function (pizza) {
    if (!(pizza instanceof Pizza)) return ''
    return pizza.toppings2string()
  }
}
