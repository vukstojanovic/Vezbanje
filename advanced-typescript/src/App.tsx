import logo from "./logo.svg";
import "./App.css";

function App() {
  // 1. in operator

  interface Fish {
    swim: () => void;
  }

  interface Bird {
    fly: () => void;
  }

  const pet: Fish | Bird = {
    // swim: () => console.log("swim"),
    fly: () => console.log("fly"),
  };

  function activatePet() {
    if ("swim" in pet) {
      pet.swim();
    } else if ("fly" in pet) {
      pet.fly();
    }
  }

  activatePet();

  // 2. type predicates

  type Duck = {
    name: "duck";
  };

  type Rabbit = {
    name: "rabbit";
  };

  const duckOrRabbit: Rabbit | Duck = { name: "duck" };

  function isRabbit(animal: Duck | Rabbit) {
    return animal.name === "rabbit";
  }

  if (isRabbit(duckOrRabbit)) {
    console.log("rabbit is here!!!");
  } else {
    console.log("rabbit is not here!!!");
  }

  // 3. lookup types

  type Route = {
    origin: {
      city: string;
      state: string;
      departureFee: number;
    };
    destination: {
      city: string;
      state: string;
      arrivalFee: number;
    };
  };

  type Origin = Route["origin"];
  type Destination = Route["destination"];

  function displayOriginData(obj: Origin) {
    console.log(obj.departureFee);
  }

  displayOriginData({
    city: "Nis",
    state: "Juzna republika",
    departureFee: 200,
  });

  // 4. generics

  enum TaskType {
    feature = "feature",
    bug = "bug",
  }

  type Task<T = TaskType> = {
    name: string;
    type: T;
  };

  const whatever: Task = { name: "testing", type: TaskType.feature };
  whatever.type = TaskType.bug;

  type FeatureTask = Task<TaskType.feature>;

  const feature: FeatureTask = {
    name: "consoleLogging",
    type: TaskType.feature,
  };

  // my attempts

  // function<T1, T2>(arr1: T1, arr2: T2) {
  //   return arr1 + arr2
  // }

  // 5. extract

  type Trip =
    | {
        origin: {
          uuid: string;
          city: string;
          state: string;
        };
      }
    | {
        originUuid: string;
      };

  type TripWithOriginRef = Extract<Trip, { origin: { uuid: string } }>;
  type TripWithOriginUuidRef = Extract<Trip, { originUuid: string }>;

  const nestedUuid: TripWithOriginRef = {
    origin: {
      uuid: "hello",
      city: "Nis",
      state: "Srbija",
    },
  };

  const nonNestedUuid: TripWithOriginUuidRef = {
    originUuid: "someText",
  };

  // 6. conditional types

  type Diesel = {
    type: "petroleum" | "bio" | "synthetic";
  };

  type Gasoline = {
    type: "hybrid" | "conventional";
  };

  type Bus = {
    engine: Diesel;
  };

  type Car = {
    engine: Gasoline;
  };

  type Engine<T> = T extends { engine: unknown } ? T["engine"] : never;

  type BusEngine = Engine<Bus>;

  const busEngine: BusEngine = {
    type: "petroleum",
  };

  const carEngine: Engine<Car> = {
    type: "hybrid",
  };

  type Bicycle = {
    power: "limbs";
  };

  type NoEngine = Engine<Bicycle>;

  // const noEngine: NoEngine = throw Error()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
