minesweeper.controller("MinesweeperController",function($scope,mineFieldService){
    $scope.minefield  = mineFieldService.createMinefield();
    $scope.isWinMessageVisible = false;
    $scope.isLostMessageVisible = false;
    // 重新开始游戏
    $scope.restart = function(){
        $scope.minefield = mineFieldService.createMinefield();
        $scope.isWinMessageVisible = false;
        $scope.isLostMessageVisible = false;
    }
    
    $scope.uncoverSpot = function(spot){
        // 如果游戏胜利或失败，则需要重新开始
        if($scope.isLostMessageVisible || $scope.isWinMessageVisible){
            return;
        }
        spot.isCovered = false; 
        mineFieldService.unoverEmptySpot($scope.minefield,spot);
        if(spot.content == "mine") {
            $scope.isLostMessageVisible = true;
        } else {
            if(mineFieldService.hasWon($scope.minefield)) {
                $scope.isWinMessageVisible = true;
            }
        }
    }
    // 响应鼠标右键单击事件，设置旗帜
    $scope.setFlag = function(spot){
        if(spot.flag == "none") {
            spot.flag = "mine";
        } else if (spot.flag == "mine"){
            spot.flag = "suspect";
        } else {
            spot.flag = "none";
        }
    }
});