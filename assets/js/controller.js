angular.module('app', ['ngTouch'])
.controller('clientCtrl', ['$scope', mainController]);

function mainController ($scope) {
	$scope.prev = function(){
		curActiveClient = $('.clients-belt').find('.active-client'),
		position = $('.clients-belt').children().index(curActiveClient),
		clientNum = $('.client-unit').length;
		if (position === 0) {
		  $('.client-unit').removeClass('active-client').last().addClass('active-client');
		  $('.client-logo').removeClass('active-client').last().addClass('active-client');
		} else {
		  $('.active-client').removeClass('active-client').prev().addClass('active-client');  
		}
	};
	$scope.next = function(){
		curActiveClient = $('.clients-belt').find('.active-client'),
		position = $('.clients-belt').children().index(curActiveClient),
		clientNum = $('.client-unit').length;
		if(position < clientNum -1){
		  $('.active-client').removeClass('active-client').next().addClass('active-client');
		} else {
		  $('.client-unit').removeClass('active-client').first().addClass('active-client');
		  $('.client-logo').removeClass('active-client').first().addClass('active-client');
		}
	}
}