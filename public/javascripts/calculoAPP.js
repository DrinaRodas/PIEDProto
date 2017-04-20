angular.module('appPIED', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('calculadora', {
			url: '/calculadora',
			templateUrl: 'views/calculadora.html',
			controller: 'ctrlCalculo'
		});

		$urlRouterProvider.otherwise('calculadora');

	})
	.controller('ctrlCalculo', function($scope){
		$scope.calculo = {}
		$scope.calculos = [];

		$scope.calcular = function() {
			$scope.calculos.push({
				Base: $scope.calculo.base,
				Número: parseInt($scope.calculo.numero),
			})

			$scope.calculo.base = '';
			$scope.calculo.numero = '';
		}
	})