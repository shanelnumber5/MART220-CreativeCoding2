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

function createParticles(x, y) {
    y.changeAnimation('bumpresult');
    x.animation.rewind();
    bumpresult.remove();

    for (let i = 0; i < 5; i++) {
        let p = new Particle(x, y);
        particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].update();
        particles[i].show();
        if (particles[i].finished()) {
            // remove this particle
            particles.splice(i, 1);
        }
    }


    /*//scoreboard
    function scoreboard(){
        if(collected.remove){
            score == score + 1;
    }

    }*/
}