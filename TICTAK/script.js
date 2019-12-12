function counter(){
  $("#instructions").hide();
var counter = 4;
setInterval(function() {
  counter--;
  if (counter >= 0) {
    id = document.getElementById("count");
    id.innerHTML = counter;
    $("#play").hide();
  }
  if(counter ==0)
    {
      $("#play").hide();
      $("table").show();
      $("#count").hide();
      $("#player1").show();

    
      $('#whichplayer1').show();
    }
}, 1000);
}
$(function(){
  $("table").hide();
  $("#replay").hide();
  $('#whichplayer1').hide();
 $("#game").hide();
 $("#player1").hide();
 

  });
  $("#play").click(function(){
   
     counter();
   });

  
var p1 ='O';
var p2='X';


   var i=0;
   var arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];

function player1(cellnumberi,cellnumberj){


      console.log(cellnumberi);

   if(i%2==0) {
    document.getElementById("whichplayer").innerHTML="player 2 move";
       p= 'x';
       arr[cellnumberi][cellnumberj]='x';
        

// alternating "x" and "o"
   }
   else
   {
    p= 'o';
    arr[cellnumberi][cellnumberj]='o';
     document.getElementById("whichplayer").innerHTML="player 1 move";


   }
   var cellpostion=cellnumberi+cellnumberj;
   // setting box id by concatenation
    document.getElementById(cellpostion).innerHTML=p;
    // implementing value to corresponding id and display value to the rfespective box
        i++;
        var tie_status;

    // check any linear condition which are same if its same delare the winner
    if((arr[0][0]=='x' && arr[0][1]=='x'&& arr[0][2]=='x'))
    {
      
        document.getElementById("00").style.backgroundColor= "green";
        document.getElementById("01").style.backgroundColor= "green";
        document.getElementById("02").style.backgroundColor= "green";
        console.log("player 1 win");
        gamestatus( "player 1 won");
}
     if(arr[0][0]=='x' && arr[1][0]=='x'&& arr[2][0]=='x'){
      // identify the winnwer mark by implementing same color to the corresponding row
      document.getElementById("00").style.backgroundColor= "blue";
      document.getElementById("10").style.backgroundColor= "blue";
      document.getElementById("20").style.backgroundColor= "blue";
      console.log("player 1 win");
      gamestatus( "player 1 won");

    }

      if(arr[0][0]=='x' && arr[1][1]=='x'&& arr[2][2]=='x')
      {
       
        // identify the winnwer mark by implementing same color to the corresponding row
        document.getElementById("00").style.backgroundColor= "blue";
        document.getElementById("22").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        console.log("player 1 win");
          console.log(arr[0][0]);
            console.log(arr[1][1]);
              console.log(arr[2][2]);
            gamestatus("player 1 won");


      }
      if(arr[0][2]=='x' && arr[1][1]=='x'&& arr[2][0]=='x')
      {
        // identify the winnwer mark by implementing same color to the corresponding row
        document.getElementById("02").style.backgroundColor= "blue";
        document.getElementById("20").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        
              gamestatus( "player 1 won");



      }
      if(arr[1][0]=='x' && arr[1][1]=='x'&& arr[1][2]=='x')
      {
        // identify the winnwer mark by implementing same color to the corresponding row
        document.getElementById("10").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        document.getElementById("12").style.backgroundColor= "blue";
        gamestatus( "player 1 won");


      }
      if(arr[2][0]=='x' && arr[2][1]=='x'&& arr[2][2]=='x'){
        document.getElementById("20").style.backgroundColor= "blue";
        document.getElementById("21").style.backgroundColor= "blue";
        document.getElementById("22").style.backgroundColor= "blue";
        gamestatus( "player 1 won");

      }
      if(arr[0][1]=='x' && arr[1][1]=='x'&& arr[2][1]=='x'){
        // identify the winnwer mark by implementing same color to the corresponding row
        document.getElementById("01").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        document.getElementById("21").style.backgroundColor= "blue";
        gamestatus( "player 1 won");

      }
      if(arr[0][2]=='x' && arr[1][2]=='x'&& arr[2][2]=='x')
      {
        // delcare winner name
        // identify the winnwer mark by implementing same color to the corresponding row
        document.getElementById("02").style.backgroundColor= "blue";
        document.getElementById("12").style.backgroundColor= "blue";
        document.getElementById("22").style.backgroundColor= "blue";
        gamestatus( "player 1 won");

      }

    if((arr[0][0]=='o' && arr[0][1]=='o'&& arr[0][2]=='o'))
    {
        document.getElementById("gamestatus").innerHTML="player 2 won!!!";
        document.getElementById("00").style.backgroundColor= "blue";
        document.getElementById("01").style.backgroundColor= "blue";
        document.getElementById("02").style.backgroundColor= "blue";
        gamestatus();

}
     if(arr[0][0]=='o' && arr[1][0]=='o'&& arr[2][0]=='o'){
      document.getElementById("00").style.backgroundColor= "blue";
      document.getElementById("10").style.backgroundColor= "blue";
      document.getElementById("20").style.backgroundColor= "blue";
      gamestatus( "player 2 won");
     
    }

      if(arr[0][0]=='o' && arr[1][1]=='o'&& arr[2][2]=='o')
      {
        document.getElementById("00").style.backgroundColor= "blue";
        document.getElementById("22").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        gamestatus("player 2 won");


      }
      if(arr[0][2]=='o' && arr[1][1]=='o'&& arr[2][0]=='o')
      {
        document.getElementById("02").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        document.getElementById("20").style.backgroundColor= "blue";
        gamestatus("player 2 won");


      }
      if(arr[1][0]=='o' && arr[1][1]=='o'&& arr[1][2]=='o')
      {
        document.getElementById("10").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        document.getElementById("12").style.backgroundColor= "blue";
        gamestatus("player 2 won");

      }
      if(arr[2][0]=='o' && arr[2][1]=='o'&& arr[2][2]=='o'){
        document.getElementById("20").style.backgroundColor= "blue";
        document.getElementById("21").style.backgroundColor= "blue";
        document.getElementById("22").style.backgroundColor= "blue";
        gamestatus("player 2 won");

      }
      if(arr[0][1]=='o' && arr[1][1]=='o'&& arr[2][1]=='o'){
        document.getElementById("01").style.backgroundColor= "blue";
        document.getElementById("11").style.backgroundColor= "blue";
        document.getElementById("21").style.backgroundColor= "blue";
        gamestatus("player 2 won");

      }
      if(arr[0][2]=='o' && arr[1][2]=='o'&& arr[2][2]=='o')
      {
        document.getElementById("02").style.backgroundColor= "blue";
        document.getElementById("12").style.backgroundColor= "blue";
        document.getElementById("22").style.backgroundColor= "blue";
        gamestatus("player 2 won");

      }

    if(i==9)
    {
      // if all boxes uses there is only chance for draw
        gamestatus("Draw !!!");

    }
}

  function gamestatus(p){
  var v=document.getElementById("gamestatus");
  $("#replay").show();
  $('#whichplayer1').hide();
 
  $('#game').show( document.getElementById("gamestatus").innerHTML=p );
 
  
  
  }
  
 
