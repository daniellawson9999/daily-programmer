//random approach
if(process.argv.length != 3){
  console.log("try node program 6");
  process.exit(1);
}
const gridsize = parseInt(process.argv[2]);
let counter = 1;
let solution = randomGrid(gridsize);
//try random grids until one works
while(!(legal(solution))){
  counter++;
  solution = randomGrid(gridsize)
}
//log the solution and the number of times it has to run
console.log(solution,counter);


//generate a random grid
function randomGrid(size){
  let grid = Grid(size);
  for(let i = 0; i < size; i++){
    for(let j = 0; j < size; j++){
      grid[i][j] = random();
    }
  }
  return grid;
}

//create a grid
function Grid(size){
    return new Array(size).fill().map(()=>new Array(size).fill());
}
//see if a grid is legal
function legal(grid){
  //loop for each type of square, each time looking for a valid
  for(let t = 2; t <= grid.length; t++){
    //determine the number / index of square to look for
    //i and j represent row/col
    n = grid.length - t + 1;
    for(let i = 0; i < n; i++){
      for(let j = 0; j < n; j++){
        let sub = getSubGrid(grid,i,j,t);
        if(!legalCorners(sub)){
          return false;
        }
       }
    }
  }
  return true;
}
//gets the sub grid of a grid at row,col with size n
function getSubGrid(grid, row, col, n){
  let sub = Grid(n);
  for(let i = row; i < row + n; i++){
    for(let j = col; j < col + n; j++){
      sub[i-row][j-col] = grid[i][j];
    }
  }
  return sub;
}
//checks for legal corners
function legalCorners(grid){
  let n = grid.length-1;
  let sum = grid[0][0] + grid[0][n] + grid[n][0] + grid[n][n];
  return sum != 4 && sum != 0;
}
//generate 1 or 0, "randomly"
function random(){
  return Math.floor(Math.random()*2)
}
