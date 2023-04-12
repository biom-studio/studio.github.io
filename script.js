function enlarge(x){
  document.querySelector(".hidden").style.visibility="hidden";
  document.querySelector(".hidden-long").style.visibility="visible";
  if(x==1){
    document.querySelector(".showImg-large").src='01.png';
  }
  if(x==9){
    document.querySelector(".showImg-large").src='09.jpg';
  }
  if(x==5){
    document.querySelector(".showImg-large").src='05.jpg';
  }
}
function enlargeSmall(y){
  document.querySelector(".hidden-long").style.visibility="hidden";
  document.querySelector(".hidden").style.visibility="visible";
  if(y==7){
      document.querySelector(".showImg").src='07.png';
  }
  if(y==8){
      document.querySelector(".showImg").src='08.jpg';
  }
  if(y==2){
      document.querySelector(".showImg").src='2.jpg';
  }
  if(y==3){
      document.querySelector(".showImg").src='03.jpg';
  }
  if(y==4){
      document.querySelector(".showImg").src='04.jpg';
  }
  if(y==6){
      document.querySelector(".showImg").src='06.jpg';
  }
}

function closeIt(){
  document.querySelector(".hidden").style.visibility="hidden";
  document.querySelector(".hidden-long").style.visibility="hidden";
}
