import logo from "./logo.svg";
import "./App.css";
import { useUniqueKeys } from "./useUniqueKeys";
import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";

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

  // 7. Try out useUniqueKeys hook

  const tasks = [
    { number: "one" },
    { number: "two" },
    { number: "one" },
    { number: "four" },
  ];

  const orders = [
    { number: "two" },
    { number: "five" },
    { number: "one" },
    { number: "six" },
  ];

  const obj = useUniqueKeys(tasks, orders);
  console.log(obj);

  // 8. utility types

  // 8.1 Partial, Required, Readonly

  interface Starship {
    name: string;
    enableHyperjump: boolean;
  }

  function updateStarship(id: number, object: Partial<Starship>) {}

  updateStarship(1, { name: "New name" });

  const readonlyStarship: Readonly<Starship> = {
    name: "readonlyStarship",
    enableHyperjump: true,
  };
  // readonlyStarship.enableHyperjump = false

  // 8.2 Pick, Omit, Exclude, Extract

  type StarshipNameOnly = Pick<Starship, "name">;
  type StarshipEnableHyperjumpOnly = Omit<Starship, "enableHyperjump">;

  type AvailableDrinks = "Coffee" | "Tea" | "Orange juice" | "Lemonade";
  const JohnsDrink: AvailableDrinks = "Coffee";

  type DrinksJaneDoesntLike = "Coffee" | "Orange juice";
  type DrinksJaneLikes = "Tea" | "Lemonade";
  // const JanesDrink: Exclude<AvailableDrinks, DrinksJaneDoesntLike> = "Tea";
  const JanesDrink: Extract<AvailableDrinks, DrinksJaneLikes> = "Tea";

  // 8.3 NonNullable, ReturnType

  interface StarshipProperties {
    color?: "red" | "green" | "blue";
  }

  function paintStarship(
    id: number,
    color: NonNullable<StarshipProperties["color"]>
  ) {
    return {
      id,
      color,
      hello: "there",
    };
  }

  paintStarship(1, "red");

  type PaintStarshipReturn = ReturnType<typeof paintStarship>;

  // 9. Mapped types

  type Properties = "propA" | "propB";

  type MyMappedType<T> = {
    [P in keyof T]: T[P];
  };

  type MyNewType = MyMappedType<{ a: "a"; b: "b" }>;

  type Pick1<T, Properties extends keyof T> = {
    [P in Properties]: T[P];
  };

  type PickA = Pick1<{ a: "a"; b: "b" }, "a" | "b">;

  const pickObj: PickA = { b: "b", a: "a" };

  interface ArbitraryObject {
    [key: string]: string;
  }

  const arbObj: ArbitraryObject = {};
  arbObj.name = "Vuk";
  arbObj.lastName = "Stojanovic";
  arbObj[1] = "number";

  const someRecord: Record<string, string> = {};
  someRecord.name = "Vuk";
  someRecord.lastName = "Stojanovic";
  someRecord[1] = "hello";

  // 9. Indexed access types

  interface User {
    id: number;
    name: string;
    address: {
      street: string;
      city: string;
      country: string;
    };
  }

  type UserProperties = keyof User;

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }

  const user = {
    name: "Vuk",
    age: 29,
  };

  getProperty(user, "name");

  document.addEventListener("click", (e) => {});
  document.addEventListener("keypress", (e) => {});

  interface MyMouseEvent {
    x: number;
    y: number;
  }

  interface MyKeyboardEvent {
    key: string;
  }

  interface MyEvents {
    click: MyMouseEvent;
    keypress: MyKeyboardEvent;
  }

  function handleEvent<K extends keyof MyEvents>(
    eventName: K,
    callback: (e: MyEvents[K]) => void
  ) {
    if (eventName === "click") {
      callback({ x: 1, y: 2 } as MyEvents[K]);
    } else if (eventName === "keypress") {
      callback({ key: "y" } as MyEvents[K]);
    }
  }

  // 10. Conditional types

  type StringOrNot<T> = T extends string ? string : never;

  type AUnion = string | boolean | never;

  type InferSomething<T> = T extends `prefix-${infer U}` ? U : never;
  type Inferred = InferSomething<"prefix-Value">;

  type InferSomething2<T> = T extends { a: infer A; b: infer B }
    ? A & B
    : never;
  type Inferred2 = InferSomething2<{
    a: { someAProp: 1 };
    b: { someBProp: "B" };
  }>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ParentComponent>
          <ChildComponent
            text="bla bla bla bla bla"
            name="Vuk"
            age={29}
            date="Now"
          />
        </ParentComponent>
      </header>
    </div>
  );
}

export default App;
