class Square {
    constructor(x, y, width, height, color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    setColor(color) {
        this.color = color;
    }
    get theX() {
        return this.x;
    }

    get theY() {
        return this.y;
    }
    get theWidth() {
        return this.width;
    }
    get theHeight() {
        return this.height;
    }

    get theColor() {
        return this.color;
    }
}
