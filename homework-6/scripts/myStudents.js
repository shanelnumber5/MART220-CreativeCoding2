class myStudents {
    constructor(speedX, speedY, diameter, R, G, B, X, Y) {
        this.speedX = speedX
        this.speedY = speedY
        this.diameter = diameter
        this.R = R
        this.G = G
        this.B = B
        this.X = X
        this.Y = Y
    }
    setspeedX(speedX) {
        this.speedX = speedX
    }
    setspeedY(speedY) {
        this.speedY = speedY
    }
    setX(X) {
        this.X = X
    }
    setY(Y) {
        this.Y = Y
    }
    draw() {
        fill(this.R, this.G, this.B)
        circle(this.X, this.Y, this.diameter)
    }
    getX() {
        return this.X
    }
    getY() {
        return this.Y
    }
    getspeedX() {
        return this.speedX
    }
    getspeedY() {
        return this.speedY
    }
}