class Mush{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.multiply=0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x    , this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y    ],
            [this.x + 1, this.y    ],
            [this.x - 1, this.y + 1],
            [this.x    , this.y + 1],
            [this.x + 1, this.y + 1]
        ]; 
    }
    chooseCell(character){
        let found=[];
        for(let i in this.directions){
            let x=this.directions[i][0];
            let y=this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                found.push(this.directions[i]);
            }
        }
        return found;
    }
    mul(){
        var newCell = random(this.chooseCell(0));
        if(newCell && this.multiply>=8 ){
            var newX = newCell[0];
            var newY = newCell[1];
            
            if(matrix[newY][newX]==1){
                for(let i in grassArr){
                    if(newX == grassArr[i].x && newY == grassArr[i].y){
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[newY][newX]==2){
                for(let i in grassEaterArr){
                    if(newX == grassEaterArr[i].x && newY == grassEaterArr[i].y){
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[newY][newX]==3){
                for(let i in predaterArr){
                    if(newX == predaterArr[i].x && newY == predaterArr[i].y){
                        predaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[newY][newX]==5){
                for(let i in volcanoArr){
                    if(newX == volcanoArr[i].x && newY == volcanoArr[i].y){
                        volcanoArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[newY][newX]==6){
                for(let i in destructorArr){
                    if(newX == destructorArr[i].x && newY == destructorArr[i].y){
                        destructorArr.splice(i, 1);
                        break;
                    }
                }
            }
            matrix[newY][newX]=8;
            mushArr.push(new Mush(newY, newX));

            this.multiply=0;
        }
        
        this.multiply++
    }

}