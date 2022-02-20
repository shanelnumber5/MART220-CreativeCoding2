class imageSwings {

    constructor(swing, swingX, swingY) {
        this.swing = swing;
        this.swingX = swingX;
        this.swingY = swingY;
    }

    getImage1() {
        var myImage1 = loadImage(this.swing);
        return myImage1;
    }
    getswingX() {
        return this.swingX;
    }
    getswingY() {
        return this.swingY;
    }
}

class imageCourt {

    constructor(court, courtX, courtY) {
        this.court = court;
        this.courtX = courtX;
        this.courtY = courtY;
    }

    getImage2() {
        var myImage2 = loadImage(this.court);
        return myImage2;
    }
    getcourtX() {
        return this.courtX;
    }
    getcourtY() {
        return this.courtY;
    }
}

class imageMerry {

    constructor(merry, merryX, merryY) {
        this.merry = merry;
        this.merryX = merryX;
        this.merryY = merryY;
    }

    getImage3() {
        var myImage3 = loadImage(this.merry);
        return myImage3;
    }
    getmerryX() {
        return this.merryX;
    }
    getmerryY() {
        return this.merryY;
    }
}

class imageChild {

    constructor(child, childX, childY) {
        this.child = child;
        this.childX = childX;
        this.childY = childY;
    }

    getImage4() {
        var myImage4 = loadImage(this.child);
        return myImage4;
    }
    getchildX() {
        return this.childyX;
    }
    getchildY() {
        return this.childY;
    }
}