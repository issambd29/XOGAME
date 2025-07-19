let background =document.body
function video(){
    background.style.backgroundImage="none"
    const video = document.createElement("video");
    video.src = "./vid&pho/vid.mp4";
    video.autoplay = true;
    video.muted = true; 
    video.style.position = "fixed";
    video.style.top = "0";
    video.style.left = "0";
    video.style.zIndex="-1"
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    document.body.appendChild(video);
}
let title = document.getElementById("title")
let turn = "X"
let squares = Array(10).fill("");
function stop(num1,num2,num3){
    title.innerHTML = `${squares[num1]} winner`;  
  document.getElementById("item"+num1).style.backgroundColor="black"
  document.getElementById("item"+num2).style.backgroundColor="black"
  document.getElementById("item"+num3).style.backgroundColor="black"
}
function the_winner(){
for(let i = 1; i < 10; i++){
    squares[i]=document.getElementById("item"+i).innerHTML
}

if(squares[1] == squares[2] && squares[2]==squares[3] && squares[1] !="" ){
    stop(1,2,3)
    video()
    // game.style.backgroundColor = "transparent";
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){ location.reload(); }, 4000);
}
else if(squares[4] == squares[5] && squares[5]==squares[6] && squares[5] !="" ){
    stop(4,5,6)
    video()
    setInterval(function() { title.innerHTML += "."; }, 1000);
    setTimeout(function(){ location.reload(); }, 4000);
}
else if(squares[7] == squares[8] && squares[8]==squares[9] && squares[8] !="" ){
    stop(7,8,9)
    video()
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){ location.reload(); }, 4000);
}
else if(squares[1] == squares[4] && squares[4]==squares[7] && squares[4] !="" ){
    stop(1,4,7)
    video()
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){ location.reload(); }, 4000);
}
else if(squares[2] == squares[5] && squares[5]==squares[8] && squares[8] !="" ){
    stop(2,5,8)
    video()
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){ location.reload(); }, 4000);
}
else if(squares[3] == squares[6] && squares[6]==squares[9] && squares[9] !="" ){
    stop(3,6,9)
    video()
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){ location.reload(); }, 4000);
}
else if(squares[1] == squares[5] && squares[5]==squares[9] && squares[9] !="" ){
    stop(1,5,9)
    video()
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){ location.reload(); }, 4000);
}
else if(squares[3] == squares[5] && squares[5]==squares[7] && squares[7] !="" ){
    stop(3,5,7)
    video()
    setInterval(function(){title.innerHTML+="."},1000)
    setTimeout(function(){ location.reload(); }, 4000);
}
else{
    let isDraw = true;
    for (let i = 1; i < 10; i++) {
        if (squares[i] == "") {
            isDraw = false;
            break;
        }
    }
    
    if (isDraw) {
        title.innerHTML = "Draw!";
        setInterval(function(){title.innerHTML+="."},1000)
        setTimeout(function(){ location.reload(); }, 4000);
    }
    }  
}


function game(id) {
    let element = document.getElementById(id);
    if (element.innerHTML === "") {
        element.innerHTML = turn;
        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }
        title.innerHTML = `Turn: ${turn}`;
        the_winner();
    }
}