// Basically hiding the complexity of a program 
class car {
    // PRIVATE: The complex engine mechanics under the hood
    #injectFuel() {
        console.log("Pumping gas into the engine");
    }
    #mixAirAndFuel() {
        console.log("Mixing fuel with oxygen...");
    }
    #igniteSpark() {
        console.log("spark plugs firing!");
    }

    // PUBLIC: The gas Pedal (what the driver uses)
    pressGasPedal() {
        // driver just uses the pedal but it trigger the whole engine process
        this.#injectFuel();
        this.#mixAirAndFuel();
        this.#igniteSpark();
        console.log("VROOM! the car is accelerating!");
    }
}
const myCar = new car();
myCar.pressGasPedal();

// you cannot reach into the engine while driving
// myCar.#igniteSpark(); this will gives the error and the code gets crash