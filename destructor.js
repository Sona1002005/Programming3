class Destructor{
    constructor(x,y){
        this.x=x;
        this.y=y;

    }
    getNewCoordinates(){
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
    chooseCell(){
        this.getNewCoordinates();
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

    move(){
        for(let i in this.directions){
            let x=this.directions[i][0];
            let y=this.directions[i][1];
            if(x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
            if(matrix[y][x]==1){
                for(let i in grassArr){
                    if(x == grassArr[i].x && y == grassArr[i].y){
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[y][x]==2){
                for(let i in grassEaterArr){
                    if(x == grassEaterArr[i].x && y == grassEaterArr[i].y){
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[y][x]==3){
                for(let i in predaterArr){
                    if(x == predaterArr[i].x && y == predaterArr[i].y){
                        predaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if(matrix[y][x]==5){
                for(let i in volcanoArr){
                    if(x == volcanoArr[i].x && y == volcanoArr[i].y){
                        volcanoArr.splice(i, 1);
                        break;
                    }
                }
            }
                matrix[y][x]=0;

        }
    }
        let found = this.chooseCell();
        let newCell =random(found);

        if(newCell){
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 6;
            matrix[this.y][this.x]=0;

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

            this.x = newX;
            this.y = newY;
       

        }
    }



}