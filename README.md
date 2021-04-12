# ES6-Project-3
Design and implement an elevator system for a building.

You've been hired by a construction firm to help build the "brain" for a set of elevators in a new building. Your task is to write the code that will control the elevators, and tell each elevator which floor to travel to next.

Building Description

The building is 10 stories tall and the floors are numbered 0 - 10 inclusive. The lobby is floor 0, and the penthouse is floor 10. The building contains one basement (floor -1).

The building contains 2 elevators: A and B.

Elevator A: Goes to all floors except the penthouse (floor 10).

Elevator B: Goes all the way up (including 10) but does not go to the basement (-1).


Calling the Elevators

The residents of the building can call the elevators by clicking the call buttons located next to the elevator shafts on their floor:

Floors 1 - 9 contain two buttons to call the elevators: An "up" button and a "down" button.

Floor 10 contains only a "down" button

Floor -1 contains only an "up" button.


Riding In the Elevators

Once inside of the elevators, a passenger can click the number of the floor that they wish to travel to.

It takes each elevator 1 second to travel past each floor. For example: traveling from floor 0 to floor 4 would take 4 seconds.

There is an emergency button inside each elevator. When that is pushed, the elevators go to their nearest floor and open their doors. The doors remain open until a reset button is pushed inside of the elevator.

Design Goals

The goal of your code is to design a system that will get passengers from their starting floor, to their destination floor as quickly as possible. The timer on each passenger starts the moment they request the elevator. There are an unknown number of passengers in the building, on unknown floors, and they will be requesting to go in random directions (up or down) to random floors, at random times.

If you think elevator A or B should take an action, you should log that action to the console. The actions available to you are:

1. Move to a different floor
2. Open doors
3. Close doors
