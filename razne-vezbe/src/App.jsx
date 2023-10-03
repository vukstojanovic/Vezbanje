import "./App.css";
import ReactUse from "./ReactUse";
import { Rating } from "react-simple-star-rating";

function App() {
  return (
    <div className="App">
      <ReactUse />
      <div className="single-product">
        <img
          src="https://progameguides.com/wp-content/uploads/2020/02/fortnite-back-bling-banana-briefcase-1.jpg"
          alt="banana-backpack"
        />
        <div>
          <div className="upper">
            <p className="name">Banana Briefcase</p>
            <p className="details">Price: 180$ - Rare</p>
          </div>
          <div className="lower">
            <Rating
              initialValue={3.5}
              size={25}
              allowFraction
              fillColor="#530ff1"
            />
            <p>
              RATING <span>3.5</span>/5 FROM 200 VOTES.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
