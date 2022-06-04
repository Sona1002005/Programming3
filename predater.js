class Predater {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.energy = 20;
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
    chooseCell(charecter){
        this.getNewCoordinates();
        let found =[];
        for(let i in this.directions){
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x>=0 && x<matrix[0].length && y>=0 && y<matrix.length){
                if(matrix[y][x]== charecter){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }

    mul(){
        let found = this.chooseCell(0);
        let newCell = random(found); 
        if (newCell  /*&& this.energy >= 12*/){
            console.log(55);
            
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 3;


            grassEaterArr.push(new GrassEater(newX, newY));
            /*this.energy = 5;*/
            


        }
    }

    move(){
        let found = this.chooseCell(0);
        let newCell =random(found);

        if(newCell){
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 3;
            matrix[this.y][this.x]=0;

            this.x = newX;
            this.y = newY;
       
            this.energy--;

            if(this.energy <= 0){
                this.die();
            }
        }
    }
    eat(){
        let found = this.chooseCell(2);
        let newCell=random(found);

        if(newCell){
            this.energy+=5;
            let newX = newCell[0];
            let newY = newCell[1];

            for(let i in grassEaterArr){
                if(newX == grassEaterArr[i].x && newY == grassEaterArr[i].y){
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }
            matrix[newY][newX]=3;
            matrix[this.y][this.x] =0;

            this.x =newX;
            this.y =newY;
            
            if(this.energy>=50){
                this.mul();
            }
        }
        else{
            this.move();
        }
    }

    die(){
        for(let i in predaterArr){
            if(this.x == predaterArr[i].x && this.y == predaterArr[i].y){
                predaterArr.splice(i, 1);
                break;
            }
        }
        matrix[this.y][this.x]=0;
    }
}