export default class RandomSpawn {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    randomSpawn() {
        const { minHeight, maxHeight } = this.height;
        const { minWidth, maxWidth } = this.width;
        
        const randHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
        const randWidth =  Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth; 

        return {x: randHeight, y: randWidth}
    }
}