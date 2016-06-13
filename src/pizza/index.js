import angular from 'angular'
import { PizzaListController } from './pizza-list.controller'

export default

  angular.module('dtang.pizza', [])
    .controller('PizzaListController', PizzaListController)
    .name
