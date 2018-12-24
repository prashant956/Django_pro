var player1=prompt("Player one: Enter Your Nmae, you will be Blue")
var PlayerColor = 'rgb(86, 151, 255)';

var player2 =prompt("Player Two: Enter Your Nmae, you will be Red")
var player2Color = 'rgb(237, 45, 73)';

var game_on = true;
var table =$('table tr');

function reportWin(rownum,colnum) {
   console.log("You won starting at this row,col");
   console.log(rowNum);
   console.log(colNum);
}

function changeColor(rowIndex,colIndex,color){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function changeColor(rowIndex,colIndex){
  return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkBottom(colIndex){
  var colorReport = returnColor(5,colIndex);
  for (var row =5; row > -1; row--){
     colorReport =returnColor(row,colIndex);
     if (colorReport ==='rgb(128, 128, 128)'){
       return row
     }
  }
}

function colorMatchCheck(one,two,three,four){
  return(one === two && one === three && one === four && one ! =='rgb(128, 128, 128,)' && one !== undefined)
}




// check for horizontal wins
function horizontalWinCheck() {
  for (var row =0; row<6;row++) {
    for(var col = 0; col<4; col++) {
      if(colorMatchCheck(return(row,col),returnColor(row,col+1),returnColor(row+1,col))){
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}

//vartical wins checkBottom
function verticalWinCheck() {
  for (var col =0; col<7;col++) {
    for(var row = 0; row<3; row++) {
      if(colorMatchCheck(return(row,col),returnColor(row+1,col),returnColor(row,col+1))){
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else{
        continue;
      }
    }
  }
}

// check for diagonal wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

    //Start with player 1
var currentPlayer = 1;
var currentPlayer = player1;
var currentPlayer = Player1Color;

$('h3').text(player1+"it is your turn, pick a column to drop in!")


$('.board button').on('click',function(){

  var col =$(this).closest('td').index();

  var bottomAvail = checkBottom(col);

  changeColor(bottomAvail,col,currentColor);

  if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    $('h1').text(currentName+"You have won!");
    $('h3').fadeOut('fast');
    $('h2').fadeOut('fast');
  }

  if(currentPlayer === 1){
    currentName = player1;
    $('h3').text(currentName+"it is your turn.")
  }else {
    currentName = player2;
    $('h3').text(currentName+"it is your turn")
    currentColor = player2color;
  }
})
