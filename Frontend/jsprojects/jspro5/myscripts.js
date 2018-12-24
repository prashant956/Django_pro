var restart = document.querySelector("#b")
//grabs all the squares
var squares = document.querySelectorAll("td")
// clear all the squares
function clearBoard() {
  for (var i=0; i  < squares.length; i++) {
    squares[i].textContent = '';
   }
}
restart.addEventListener('click',clearBoard);


//check the square markar


function changeMarker(){
  if(this.textContent ===''){
    this.textContent = 'X';
  }else if(this.textContent = 'X'){
    this.textContent ='O';
  }else{
  this.textContent = '';
}

for(var i=0; i<squares.length;i++){
  squares[i].addEventListener('click',changeMarker)
}

var cellOne = document.querySelector('#one')

cellone.addEventListener('click',function(){
  if(cellOne.textContent ==='') {
    cellOne.textContent = 'X';
  }else if(cellOne.textContent ==='X'){
    cellOne.textContent = 'O'
  }else {
    cellOne.textContent = '';
  }
})


//for loop to add event listeneres to all the squares
