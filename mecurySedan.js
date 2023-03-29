//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

class Car extends VehicleModule{
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            console.log("engine started");
            return this.started = true;
        } else {
            console.log("engine cannot start!");
            return this.started = false;
        }
    }

    checkService(){
        if (this.mileage > 30000)
        this.scheduleService = true;
        return this.scheduleService
    }
    loadPassanger(num){
        if (this.maxPassenger > this.passanger){
            if((num + this.passanger) <= this.maxPassenger){
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not enough space for all");

            }
        } else {
            console.log(this.model + " " + this.make + " full");
        }
    }
}
//this shows how to call from this module...
let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000)

myCar.start()
myCar.loadPassenger(5)
myCar.stop()
myCar.checkService()

console.log(myCar)