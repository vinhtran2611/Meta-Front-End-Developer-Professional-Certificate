class Animal {
    // constructor: color, energy
    constructor(color, energy){
        this.color = color
        this.energy = energy
    }
    // isActive()
        // if energy > 0, energy -=20, console log energy
        // else if energy <= 0, sleep()
    ifActive(){
        if(this.energy > 0){
            this.enerry -= 20
            console.log(this.energy)
        }else if(this.energy <= 0){
            this.sleep()
        }
    }
    // sleep()
        // energy += 20
        // console.log energy
    sleep(){
        this.energy += 20
        console.log(this.energy)
    }
}
class Cat extends Animal {
    // constructor: sound, canJumpHigh, canClimbTrees, color, energy
    constructor(sound, canJumpHigh, canClimbTrees, color, energy){
        super(color, energy)
        this.sound = sound
        this.canJumpHigh = canJumpHigh
        this.canClimbTrees = canClimbTrees
    }
    // makeSound()
        // console.log sound
    makeSound(){
        console.log(this.sound)
    }
}
class Bird extends Animal {
    // constructor: sound, canFly, color, energy
    constructor(sound, canFly, color, energy){
        super(color, energy)
        this.sound = sound
        this.color = color
    }
    // makeSound()
        // console.log sound
    makeSound(){
        console.log(this.sound)
    }
}
class HouseCat extends Cat {
    // constructor: houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy
    constructor(houseCatSound, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, canClimbTrees, energy)
        this.houseCatSound = houseCatSound
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(houseCatSound)
    makeSound(option){
        if(option){
            super.makeSound()
        }else{
            console.log(this.sound)
        }
    }
}
class Tiger extends Cat {
    // constructor: tigerSound, sound, canJumpHigh, canClimbTrees, color, energy
    constructor(tigerSound, sound, canJumpHigh, canClimbTrees, color, energy){
        super(sound, canJumpHigh, canClimbTrees, color, energy)
        this.tigerSound = tigerSound
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // console.log(tigerSound)
    makeSound(option){
        if(option){
            super.makeSound()
        }else{
            console.log(this.tigerSound)
        }
    }
}
class Parrot extends Bird {
    // constructor: canTalk, sound, color, energy
    constructor(canTalk, sound, color, canFly, energy){
        super(sound, canFly, color, energy)
        this.canTalk = canTalk
    }
    // makeSound(option)
        // if (option)
            // super.makeSound()
        // if (canTalk)
            // console.log("talking!")
    makeSound(option){
        if(option){
            super.makeSound()
        }
        if(this.canTalk){
            console.log(this.canTalk)
        }
    }
}