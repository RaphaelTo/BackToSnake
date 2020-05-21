export default class RandomSpawn {
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
    
    randomSpawnPowerUp() {
       return Math.floor(Math.random() * 6) + 1  
    }

    RandomSpawnEnnemy() {
        return Math.floor(Math.random() * 6) + 1  
    }
}