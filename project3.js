// Elevator class
class Elevator {
    name;
    allowedFloors = [];
    currentFloor;
    emergencyPressed = false;
    resetPressed = false;
    upOrDown;

    // Pass in the elevator name and allowable floors when the class is instantiated
    constructor(name, allowedFloors) {
        this.name = name;
        this.allowedFloors = allowedFloors;
        // The elevator starts in the lobby
        this.currentFloor = 0;
        console.log(`Elevator ${this.name} goes to floors: ${this.allowedFloors}`);
    }

    // Method to call the elevator, passing in the starting floor and an up or down direction
    callElevator(startingFloor, directionButton) {
        let elapsedTime = Math.abs(this.currentFloor - startingFloor);
        console.log(`Moving from floor ${this.currentFloor} to ${startingFloor} took ${elapsedTime} seconds.`)
        // Set the current floor to be the starting floor
        this.currentFloor = startingFloor;
        this.upOrDown = directionButton;
        console.log("Opening Doors");
        console.log(`In elevator ${this.name} at floor ${this.currentFloor}, ${this.upOrDown} button was pressed`);
        return elapsedTime;
    }

    // Retrieve where the elevator currently is
    getFloor() {
        console.log("In getFloor()");
        return this.currentFloor;
    }

    // Travel to the passed in floor
    goFloor(destinationFloor) {
        // Ensure that this elevator can travel to the requested destination floor
        if (this.allowedFloors.includes(destinationFloor) === false) {
            console.log(`Elevator ${this.name} cannot travel to floor ${destinationFloor}`);
            return 0;
        } else {
            console.log("Closing Doors");
            let elapsedTime = Math.abs(this.currentFloor - destinationFloor);
            console.log(`Moving from floor ${this.currentFloor} to ${destinationFloor} took ${elapsedTime} seconds.`)
            console.log("Opening Doors");
            return elapsedTime;
        }
    }

    // Handle an Emergency button press
    emergencyButton() {
        console.log("Emergency Button was pressed");
        this.resetPressed = false;
        this.emergencyPressed = true;
        // travel to the nearest floor and open the doors
        console.log("Opening Doors");
    }

    // Handle a Reset Button press
    resetButton() {
        console.log("Reset Button was pressed");
        this.resetPressed = true;
        this.emergencyPressed = false;
        // close the doors
        console.log("Closing Doors");
    }
}

// Floor class
class Floor {
    floorNumber;
    floorName;
    callButtons = [];
    
    // Pass in the floor info that this class will represent
    constructor(floorNumber, floorName) {
        this.floorNumber = floorNumber;
        this.floorName = floorName;

        // Populate the callButtons array depending on what floor we are on
        if (this.floorNumber === -1) {
            this.callButtons.push("up");
        } else if (this.floorNumber === 10) {
            this.callButtons.push("down");
        } else {
            this.callButtons.push("up");
            this.callButtons.push("down");
        }
        console.log(`Floor ${this.floorName} has ${this.callButtons} buttons`);
    }
}

// Person class
class Person {
    myId;
    myElevator;
    myTravelTime;

    constructor(id) {
        this.myId = id;
        this.myTravelTime = 0;
    }

    callAnElevator(elevatorName, startingFloor, direction) {
        if (elevatorName === "A") {
            // Instantiate the elevator A object
            let elevatorA = new Elevator("A", [-1,0,1,2,3,4,5,6,7,8,9]);
            this.myElevator = elevatorA;
        } else {
            // Instantiate the elevator B object
            let elevatorB = new Elevator("B", [0,1,2,3,4,5,6,7,8,9,10]);
            this.myElevator = elevatorB;
        }

        return(this.myElevator.callElevator(startingFloor, direction));
    }

    moveToFloor(destinationFloor) {
        return(this.myElevator.goFloor(destinationFloor));
    }

    pressEmergencyButton() {
        this.myElevator.emergencyButton();
    }

    pressResetButton() {
        this.myElevator.resetButton();
    }

    setElapsedTime(elapsedTime) {
        this.myTravelTime += elapsedTime;
    }

    getElapsedTime() {
        return this.myTravelTime;
    }
}

// Create the building which is an array of floors
const building = [];

// Instantiate the floor objects and add them to the building
const floorBasement = new Floor(-1, "Basement");
building.push(floorBasement);
const floorLobby = new Floor(0, "Lobby");
building.push(floorLobby);
const floorOne = new Floor(1, "One");
building.push(floorOne);
const floorTwo = new Floor(2, "Two");
building.push(floorTwo);
const floorThree = new Floor(3, "Three");
building.push(floorThree);
const floorFour = new Floor(4, "Four");
building.push(floorFour);
const floorFive = new Floor(5, "Five");
building.push(floorFive);
const floorSix = new Floor(6, "Six");
building.push(floorSix);
const floorSeven = new Floor(7, "Seven");
building.push(floorSeven);
const floorEight = new Floor(8, "Eight");
building.push(floorEight);
const floorNine = new Floor(9, "Nine");
building.push(floorNine);
const floorPenthouse = new Floor(10, "Penthouse");
building.push(floorPenthouse);

console.log("The building has the following floors");
building.forEach(function(floor) {
    console.log(floor);
});


let travelTime;
// Create a person
const newPerson = new Person(1);
newPerson.setElapsedTime(0);

// Call an elevator, passing in what elevator (A or B), what floor the person is currently on, and whether the up or down button was pressed
travelTime = newPerson.callAnElevator("A", building[2].floorNumber, "up");
//Set the elapsed time to the length of time it took the elevator to arrive
console.log(`Adding travel time of ${travelTime} seconds for Person ${newPerson.myId}.`);
newPerson.setElapsedTime(travelTime);

// Move to a new floor, passing in the destination floor
travelTime = newPerson.moveToFloor(building[10].floorNumber);
console.log(`Adding travel time of ${travelTime} seconds for Person ${newPerson.myId}.`);
newPerson.setElapsedTime(travelTime);

// Report the total travel time
console.log(`Total travel time for Person ${newPerson.myId} is ${newPerson.getElapsedTime()} seconds.`);

// Press the Emergency Button
newPerson.pressEmergencyButton();

//Press the Reset Button
newPerson.pressResetButton();






