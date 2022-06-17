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
            matrix[newY][newX]=8;
            mushArr.push(new Mush(newY, newX));
            this.multiply=0;
        }
        this.multiply++
    }

}