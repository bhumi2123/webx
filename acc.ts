// Public class and members
class Car {
    // Public members are accessible from anywhere
    public brand: string;
    constructor(brand: string) {
    this.brand = brand;
    }
    // Public method
    public start(): string {
    return `${this.brand} is starting...`;
    }
    }
    // Protected class and members
    class Engine extends Car {
    // Protected members are accessible within the class and its subclasses
    protected horsepower: number;
    
    constructor(brand: string, horsepower: number) {
    super(brand);
    this.horsepower = horsepower;
    }
    // Protected method
    protected displayHorsepower(): string {
    return `${this.brand} has ${this.horsepower} horsepower.`;
    }
    }
    // Private class and members
    class CarDetails extends Engine {
    // Private members are only accessible within the class
    private color: string;
    constructor(brand: string, horsepower: number, color: string) {
    super(brand, horsepower);
    this.color = color;
    }
    // Public method accessing protected and private members
    public displayCarDetails(): string {
    return `\n${this.start()}\n ${this.displayHorsepower()}\n Color:
    ${this.color}`;
    }
    }
    
    // Creating an instance of CarDetails
    const myCar = new CarDetails("Toyota", 200, "Red");
    // Accessing public method
    const output = myCar.displayCarDetails();
    console.log(output);