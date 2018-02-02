app.controller('myctrl',function($scope){

$scope.txtDate = new Date();
$scope.getApprox = function()
{
  $scope.ans = $scope.txtDate.setDate($scope.txtDate.getDate()+$scope.numDate);
}
});