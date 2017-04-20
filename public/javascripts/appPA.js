angular.module('appPIED', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('agenda', {
			url: '/agenda',
			templateUrl: 'views/agenda.html',
			controller: 'ctrlAgenda'
		})
		.state('editar',{
			url:'/editar/{id}',
			templateUrl: 'views/editar.html'
		});

		$urlRouterProvider.otherwise('agenda');

	})
	.controller('ctrlAgenda', function($scope){
		$scope.tarea = {}
		$scope.tareas = [];

		$scope.prioridades = ['Baja', 'Normal', 'Alta'];

		$scope.agendar = function() {
			$scope.tareas.push({
				nombre: $scope.tarea.name,
				prioridad: parseInt($scope.tarea.priority),
				fecha: $scope.tarea.date
			})

			$scope.tarea.name = '';
			$scope.tarea.priority = '';
			$scope.tarea.date = '';
		}

		$scope.masPrioridad() = function(tarea) {
			tarea.prioridad += 1;

		}

		$scope.menosPrioridad() = function(tarea) {
			tarea.prioridad -= 1;
			
		}
	})


