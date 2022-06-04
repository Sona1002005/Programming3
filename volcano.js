class Volcano {
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
            [this.x + 1, this.y + 1],
            [this.x    , this.y - 2],
            [this.x    , this.y + 2],
            [this.x + 2, this.y    ],
            [this.x - 2, this.y    ],
        ]; 
        this.outcordinates=[
            [this.x - 1, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x    , this.y - 2],
            [this.x    , this.y + 2],
            [this.x + 2, this.y    ],
            [this.x - 2, this.y    ],
        ]
    }
    erupt(){
        this.multiply++;
        if(this.multiply>4){
        for(let i in this.directions){
            let x = this.directions[i][0];
            let y = this.directions[i][1];
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
            else if(matrix[y][x]==5){
                for(let i in predaterArr){
                    if(x == predaterArr[i].x && y == predaterArr[i].y){
                        predaterArr.splice(i, 1);
                        break;
                    }
                }
            }
            console.log("here");
            matrix[y][x]=4;
        }
        }   
        if(this.multiply>6 && this.multiply<8){
            for(let i in this.directions){
                let x = this.directions[i][0];
                let y = this.directions[i][1];
                matrix[y][x]=0;
                this.multiply=0;
            }
        }
        // else{
        //     for(let i in this.directions){
        //         let x = this.directions[i][0];
        //         let y = this.directions[i][1];
        //         matrix[y][x]=0;
        //         this.multiply=0;
        //     }   
        // }
    }
}