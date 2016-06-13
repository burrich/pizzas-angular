import angular from 'angular'
import PizzaModule from './pizza'

angular.module('dtang', [
  PizzaModule
])

angular.bootstrap(document, ['dtang'])
