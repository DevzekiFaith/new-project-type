import Image from "next/image";

export default function Home() {
  // DECLARE THE INTERFACE OF PROPERTIES//

  interface Vehicle {
    make: String;
    model: string;
    year: number;
    start(): void;
  }

  // CREATE A NEW VARIABLE A OBJECT TO HOLD THE INTERFACE PROPERTIES//

  const myVehicle: Vehicle = {
    make: "Toyota",
    model: "Lexus",
    year: 2024,
    start() {
      console.log("Engine started");
    },
  };

  myVehicle.start();

  class car implements Vehicle {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    start() {
      console.log("Car Engine started");
    }
  }

  const myCar = new car("Bmw", "Bmw", 2024);
  myCar.start();


  return (
    <main className=" bg-green-500">
      <div>
        <h1 className="text-pink-500">This the Vehicle method for the car</h1>
      </div>
    </main>
  );
}
