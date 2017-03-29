minesweeper.service("mineFieldService",function(){
    this.createMinefield = function(){
        var minefield = {};
        minefield.rows = [];
        for(var i = 0; i < 9; i++) {
            var row = {};
            row.spots = [];
            for(var j = 0; j < 9; j++) {
                var spot = {};
                spot.isCovered = true;
                spot.content = "empty";
                spot.flag = "none";
                // 记录砖块的横纵坐标
                spot.x = i;
                spot.y = j;
                row.spots.push(spot);
            }

            minefield.rows.push(row);
        }
        this.placeManyRandomMines(minefield);
        this.calculateAllNumbers(minefield);
        return minefield;
    }
    
    this.placeRandomMine = function(minefield){
        var row = Math.round(Math.random() * 8);
        var column = Math.round(Math.random() * 8);
        var spot = this.getSpot(minefield, row, column);
        spot.content = "mine";
    }
    
    this.getSpot = function(minefield, row, column) {
        return minefield.rows[row].spots[column];
    }
    
    this.placeManyRandomMines = function (minefield) {
        for(var i = 0; i < 10; i++) {
            this.placeRandomMine(minefield);
        }
    }
    
    //计算每个方格中的数字
    this.calculateNumber = function(minefield, row, column) {
        var thisSpot = this.getSpot(minefield, row, column);

        // 如果方格中为地雷，则不可在方格中添加数字
        if(thisSpot.content == "mine") {
            return;
        }

        var mineCount = 0;

        // 如果不是第一行，则检查上一行
        if(row > 0) {
            // 如果不是第一列，则检查左边的列
            if(column > 0) {
                // 左上角
                var spot = this.getSpot(minefield, row - 1, column - 1);
                if(spot.content == "mine") {
                    mineCount++;
                }
            }

            // 正上方
            var spot = this.getSpot(minefield, row - 1, column);
            if(spot.content == "mine") {
                mineCount++;
            }

            // 如果不是最后一列，则这检查右侧的列
            if(column < 8) {
                // 右上角
                var spot = this.getSpot(minefield, row - 1, column + 1);
                if(spot.content == "mine") {
                    mineCount++;
                }
            }
        }

        // 如果不是第一列，则检查左侧列
        if(column > 0) {
            // 左侧
            var spot = this.getSpot(minefield, row, column - 1);
            if(spot.content == "mine") {
                mineCount++;
            }
        }

        // 如果不是最后一列，则检查右侧列
        if(column < 8) {
            // 右侧
            var spot = this.getSpot(minefield, row, column + 1);
            if(spot.content == "mine") {
                mineCount++;
            }
        }

        if(row < 8) {
            
            if(column > 0) {
                var spot = this.getSpot(minefield, row + 1, column - 1);
                if(spot.content == "mine") {
                    mineCount++;
                }
            }

            var spot = this.getSpot(minefield, row + 1, column);
            if(spot.content == "mine") {
                mineCount++;
            }

            if(column < 8) {
                var spot = this.getSpot(minefield, row + 1, column + 1);
                if(spot.content == "mine") {
                    mineCount++;
                }
            }
        }

        if(mineCount > 0) {
            thisSpot.content = mineCount;
        }
    }
    
    // 计算所有方格中的数字
    this.calculateAllNumbers = function(minefield) {
        for(var y = 0; y < 9; y++) {
            for(var x = 0; x < 9; x++) {
                this.calculateNumber(minefield, x, y);
            }
        }
    }
    // 游戏胜利检测
    this.hasWon = function(minefield) {
        for(var y = 0; y < 9; y++) {
            for(var x = 0; x < 9; x++) {
                var spot = this.getSpot(minefield, y, x);
                if(spot.isCovered && spot.content != "mine") {
                    return false;
                }
            }
        }
        return true;
    }
    
    this.unoverEmptySpot = function(minefield,spot){
        var x = spot.x;
        var y = spot.y;
        spot.isCovered = false;
        if(spot.content == "empty"){
            
            if(y-1 >= 0) {
                var topSpot = this.getSpot(minefield,x,y-1);
                if(topSpot.isCovered == true) {
                    this.unoverEmptySpot(minefield,topSpot);
                }
                
            }
            if(x-1 >= 0) {
               var leftSpot = this.getSpot(minefield,x-1,y);
               if(leftSpot.isCovered == true) {
                   this.unoverEmptySpot(minefield,leftSpot); 
               }
               
            }
            if(y+1 < 9) {
                var bottomSpot = this.getSpot(minefield,x,y+1);
                if(bottomSpot.isCovered == true) {
                    this.unoverEmptySpot(minefield,bottomSpot);
                }
            }
            if(x+1 < 9) {
               var rightSpot = this.getSpot(minefield,x+1,y);
               if(rightSpot.isCovered == true){
                   this.unoverEmptySpot(minefield,rightSpot); 
               }
               
            }
        }
    }
});