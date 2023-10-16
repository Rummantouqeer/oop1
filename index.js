"use strict";
class Person {
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer < 1) {
            this.personality = "Extravert";
        }
        else {
            this.personality = "Introvert";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
function main() {
    let input;
    console.log("Type 1 if you like to talk to others and type 2 if you want to keep to yourself");
    input = process.stdin.read();
    let myPerson = new Person();
    myPerson.askQuestion(parseInt(input));
    console.log("You are: " + myPerson.getPersonality());
}
main();
