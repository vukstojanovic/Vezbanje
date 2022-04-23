import { useInput } from "./useInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add, del } from "./redux/actions/cartActions";
import nameSelector from "./redux/reducers/cartReducer";
import { connect } from "react-redux";

function Test() {
  const [itemName, itemNameObj, resetItemName] = useInput("");
  const itemList = useSelector((state) => state.cart.arr);
  // const nameList = useSelector(nameSelector);
  const dispatch = useDispatch();
  // const itemList = arr;
  const [currentId, setCurrentId] = useState(2);
  // console.log(nameList);

  function addNewItem() {
    dispatch(add({ id: currentId + 1, name: itemName }));
    // add({ id: currentId + 1, name: itemName });
    setCurrentId((prev) => prev + 1);
    resetItemName();
  }

  function removeLast() {
    dispatch(del());
    // del();
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

// function mapStateToProps(state) {
//   return {
//     arr: state.cart.arr,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     add: (obj) => dispatch(add(obj)),
//     del: () => dispatch(del()),
//   };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Test);

export default Test;
