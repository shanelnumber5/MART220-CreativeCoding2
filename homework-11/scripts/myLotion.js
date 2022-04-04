class myLotion {

    constructor(radius, height, detailX, detailY, locationX, locationY) {
        this.radius = radius;
        this.height = height;
        this.detailX = detailX;
        this.detailY = detailY;
        this.locationX = locationX;
        this.locationY = locationY;
    }

    show() {
        cylinder(this.radius, this.height, this.detailX, this.detailY);
    }

    translateCylinder() {
        translate(this.locationX, this.locationY);
    }

    rotateCylinder(amount) {
        rotateX(amount);
        rotateY(amount);
    }


}