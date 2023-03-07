// Task 1: Code a Person class
class Person{
    constructor(name = "Tom", age = 20, energy = 100){
        this.name = name
        this.age = age
        this.energy = energy
    }

    sleep(){
        this.energy += 20
    }

    doSomethingFun(){
        this.energy -= 20
    }

}

// Task 2: Code a Worker class

class Worker extends Person{
    constructor(name, age, energy, xp = 0, hourlyWage = 10){
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
    }

    goToWork(){
        this.xp += 10
    }

}

// Task 3: Code an intern object, run methods
function intern() {
    let bob = new Worker('Bob', 21, 110)
    bob.goToWork()
    return bob
}

// Task 4: Code a manager object, methods
function manager() {
    let manager = new Worker('Alice', 30, 120, 100, 30)
    manager.doSomethingFun()
    return manager
}