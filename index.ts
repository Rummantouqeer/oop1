
class Person {
    private personality: string;

    constructor() {
        this.personality = "Mystery";
    }

    public askQuestion(answer: number): void {
        if (answer < 1) {
            this.personality = "Extravert";
        } else {
            this.personality = "Introvert";
        }
    }

    public getPersonality(): string {
        return this.personality;
    }
}

function main(): void {
    let input: string;
    console.log("Type 1 if you like to talk to others and type 2 if you want to keep to yourself");
    input = <string>process.stdin.read();
    let myPerson = new Person();
    myPerson.askQuestion(parseInt(input));
    console.log("You are: " + myPerson.getPersonality());
}

main();
