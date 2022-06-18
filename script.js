/*var matrix = [
    [0,0,1,0,0,0,0,0,0,0,0,0,0,3,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],
    [0,1,0,0,5,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,2,0,0,0,0,3,0,1,0],
    [0,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,2],
    [1,1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,1,5,0,0,0,0,5,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,5,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,3,0,0,3,0,0,0,0,3,0,0,3,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,3,0],
    [0,0,0,0,2,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,3,0,0,1,0,0,2,0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,1,0,0,0],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,6,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,1,0,0,3,0,0,0,0,6,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0],
    [1,1,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0],
    [0,0,1,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,1,0,3,0],
    [0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,1,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
    [0,2,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
    [0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,0,0,5,0,0,0,0,2,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2],
    [0,3,0,0,3,0,0,0,0,3,0,0,3,0,1,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0],
    [0,0,0,0,2,0,0,1,0,0,0,1,0,0,0,0,0,0,0,3,0,0,0,0,1,0,0,0,0,0],
    [0,0,1,0,0,0,0,3,0,0,0,0,0,0,0,0,0,1,0,0,0,3,0,0,0,0,0,2,0,0],
    [0,0,1,0,3,0,0,1,0,0,2,0,0,1,0,0,6,1,0,0,0,0,0,0,0,0,0,1,3,0]
];*/

row=50;
column=50;

function generator(row, column, char1, char2, char3, char4, char5, char6, char7){
    let matrix=[];
    for(let i=0; i<row; i++){
        matrix[i]=[];
        for(let j=0; j<column; j++){
            matrix[i][j]=0;
        }
    }
    
    for(let i=0; i<=char1; i++){
        let randX=Math.floor(Math.random() * (row));
        let randY=Math.floor(Math.random() * (column));
        matrix[randX][randY]=1;
    }
    for(let i=0; i<=char2; i++){
        let randX=Math.floor(Math.random() * (row));
        let randY=Math.floor(Math.random() * (column));
        matrix[randX][randY]=2;
    }
    for(let i=0; i<=char3; i++){
        let randX=Math.floor(Math.random() * (row));
        let randY=Math.floor(Math.random() * (column));
        matrix[randX][randY]=3;
    }
    /*for(let i=0; i<=char4; i++){
        let randX=Math.floor(Math.random() * (row));
        let randY=Math.floor(Math.random() * (column));
        matrix[randX][randY]=4;
    }*/
    for(let i=0; i<=char5; i++){
        let randX=Math.floor(Math.random() * (row-4)+2);
        let randY=Math.floor(Math.random() * (column-4)+2);
        matrix[randX][randY]=5;
    }
    for(let i=0; i<=char6; i++){
        let randX=Math.floor(Math.random() * (row));
        let randY=Math.floor(Math.random() * (column));
        matrix[randX][randY]=6;
    }
    for(let i=0; i<=char7; i++){
        let randX=Math.floor(Math.random() * (row));
        let randY=Math.floor(Math.random() * (column));
        matrix[randX][randY]=8;
    }
   
    return matrix;
    
}
var matrix=generator(row, column, 10, 20, 50, 10, 10, 10, 10);
console.log(matrix, "++++++++++++");

var frm;
var side=20;
// var matrix=[];  
var grassArr=[];
var grassEaterArr=[];
var predaterArr=[];
var volcanoArr=[];
var destructorArr=[];
var mushArr=[];

function setup() {

//    function matrixGenerator(matrixSize, grassCount, grassEaterCount){
//         for(let i=0; i<matrixSize; i++){
//             matrix[i]=[];
//             for(let j=0; i<matrixSize; j++){
//                 matrix[i][j]=0;
//             }
//         }
//         for(let i=0; i<grassCount; i++){
//             let x=Math.floor(random(matrixSize));
//             let y=Math.floor(random(matrixSize));
//             matrix[y][x]=1;
//         }
//         for(let i=0; i<grassEaterCount; i++){
//             let x=Math.floor(random(matrixSize));
//             let y=Math.floor(random(matrixSize));
//             matrix[y][x]=2;
//         }
//     }
//     matrixGenerator(20,40,20);

    frameRate(3);
    createCanvas(matrix.length *side , matrix[0].length*side);

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 1){
                const gr = new Grass(x,y)
                grassArr.push(gr);
            }
            else if(matrix[y][x]==2){
                grassEaterArr.push(new GrassEater(x,y));
            }
            else if(matrix[y][x]==3){
                predaterArr.push(new Predater(x,y));
            }
            else if(matrix[y][x]==5){
                volcanoArr.push(new Volcano(x,y));
            }
            else if(matrix[y][x]==6){
                destructorArr.push(new Destructor(x,y));
            }
            else if(matrix[y][x]==8){
                mushArr.push(new Mush(x,y));
            }
            
        }
        
    }
}

function draw(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x]==1){
                fill("green");
            }
            else if(matrix[y][x]==2){
                fill("yellow");
            }
            else if(matrix[y][x]==3){
                fill("red");
            }
            else if(matrix[y][x]==4){
                fill("#ff5005");
            }
            else if(matrix[y][x]==5){
                fill("#ff5005");
            }
            else if(matrix[y][x]==6){
                fill("blue");
            }
            else if(matrix[y][x]==7){
                fill("purple");
            }
            else if(matrix[y][x]==8){
                fill("black");
            }
            else{
                fill("white");
            }
            rect(x * side, y * side, side, side);
            if(matrix[y][x]==5){
                textSize(25);
                text("🌋",((x * side)+3), ((y * side)+25))
              
            }
            
        }
        
    }
    for(let i in grassArr){
        grassArr[i].mul();
    }
    for(let i in grassEaterArr){
        grassEaterArr[i].eat();
    }
    for(let i in predaterArr){
        predaterArr[i].eat();
    }
    for(let i in volcanoArr){
        volcanoArr[i].erupt();
    }
    for(let i in destructorArr){
        destructorArr[i].move();
    }
    for(let i in mushArr){
        mushArr[i].mul();
    }

    console.log(frameCount);
    if(frameCount%60==0){
        frm=frameCount;
        for(i=0; i<row; i++){
            for(j=0; j<column; j++ ){
                matrix[i][j]=7;
            }
        }
        grassArr=[];
        grassEaterArr=[];
        predaterArr=[];
        volcanoArr=[];
        destructorArr=[];
        mushArr=[];
    }
    if(frameCount==frm+20){
        matrix=generator(row, column, 10, 20, 50, 10, 10, 10, 10);
        for (let y = 0; y < matrix.length; y++) {
            for (let x = 0; x < matrix[y].length; x++) {
                if(matrix[y][x] == 1){
                    const gr = new Grass(x,y)
                    grassArr.push(gr);
                }
                else if(matrix[y][x]==2){
                    grassEaterArr.push(new GrassEater(x,y));
                }
                else if(matrix[y][x]==3){
                    predaterArr.push(new Predater(x,y));
                }
                else if(matrix[y][x]==5){
                    volcanoArr.push(new Volcano(x,y));
                }
                else if(matrix[y][x]==6){
                    destructorArr.push(new Destructor(x,y));
                }
                else if(matrix[y][x]==8){
                    mushArr.push(new Mush(x,y));
                }
                
            }
            
        }
    }
    
}


const btn = document.getElementById('btn');

btn.addEventListener('click', function handleClick() {
  btn.textContent = 'Button clicked';
});


