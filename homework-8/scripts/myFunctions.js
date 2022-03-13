//game area
function windowResized() {
    resizeCanvas(displayWidth - 40, displayHeight - 40);
}

//game timer
function timeIt() {
    timerValue++;
}

//the first parameter will be the sprite (individual or from a group)
//calling the function
//the second parameter will be the sprite (individual or from a group)
//against which the overlap, collide, bounce, or displace is checked
function collect(collector, collected) {
    //collector is another name for teacher
    //show the animation
    collector.changeAnimation('sad');
    collector.animation.rewind();
    //collected is the sprite in the group collectibles that triggered
    //the event
    collected.remove();
}
/*function bumpresult(collector, collected)
{
  //collector is another name for    {
        if(dist(teacher.position.x,teacher.position.y,cough.position.x,cough.position.y) < 250)
        {;
  createParticles(cough.position.x, cough.position.y);
  health -= 1;
  if(health <= 0)
  {
  cough.remove();
  cough = null;
}

//scoreboard
function scoreboard(){
    if(collected.remove){
        score == score + 1;
}

}
}*/