// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract structs_demo {

    struct Car {
        string model;
        uint year;
        address owner;
    }

    Car public car;
    Car[] public cars;
    
    mapping(address => Car[]) public carsByOwner;

    function someApplications() external {
        Car memory toyota = Car("Toyota", 1998, msg.sender);
        Car memory lambo = Car({year: 1998, model: "Lamborghini", owner: msg.sender});
        Car memory tesla;

        tesla.model = "Tesla";
        tesla.year = 1983;
        tesla.owner = msg.sender;

        cars.push(toyota);
        cars.push(lambo);
        cars.push(tesla);

        cars.push(Car('Ferrari', 2020, msg.sender));

        Car storage _car = cars[0];
        _car.year = 1990;
        delete _car.owner;

        delete cars[1];
    }
}