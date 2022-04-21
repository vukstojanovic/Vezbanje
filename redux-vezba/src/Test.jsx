import { useInput } from "./useInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add, del } from "./redux/actions/cartActions";
import nameSelector from "./redux/reducers/cartReducer";

function Test() {
  const [itemName, itemNameObj, resetItemName] = useInput("");
  const itemList = useSelector((state) => nameSelector(state));
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(2);
  console.log(itemList);

  function addNewItem() {
    dispatch(add({ id: currentId + 1, name: itemName }));
    setCurrentId((prev) => prev + 1);
    resetItemName();
  }

  function removeLast() {
    dispatch(del());
  }

  return (
    <div>
      <p>
        <input type="text" {...itemNameObj} />
        <button onClick={addNewItem}>Add to list</button>
      </p>
      <p>
        <button onClick={removeLast}>Remove last</button>
      </p>
      <ul>
        {itemList.map((item, index) => {
          const { name } = item;
          return <li key={index}>{name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Test;
