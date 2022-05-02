import { useInput } from "./useInput";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { add, del } from "./redux/actions/cartActions";
import { openModal, closeModal } from "./redux/actions/modalActions";
import nameSelector from "./redux/reducers/cartReducer";
import { connect } from "react-redux";
import Modal from "./Modal";

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

  function handleOpenModal() {
    dispatch(openModal());
  }

  return (
    <div className="test">
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
      <div>
        <button onClick={handleOpenModal}>Open Modal</button>
        <Modal />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        incidunt deserunt laboriosam neque deleniti placeat! Excepturi ipsum
        nostrum mollitia veniam facere dignissimos? Unde atque earum voluptate
        rem corrupti tempore ut. Quia quaerat, unde neque harum qui itaque,
        tenetur delectus odio iusto ex recusandae repellat fuga, minus alias
        illo magni aliquid iste at porro! Laboriosam impedit aperiam et.
        Voluptatem, dolores nam! Porro reiciendis pariatur error? Officia rem
        accusantium debitis, exercitationem possimus eos, cupiditate assumenda
        pariatur temporibus perspiciatis ratione? Voluptatum, dignissimos odit.
        Accusantium commodi nam excepturi rerum similique distinctio
        necessitatibus nihil laboriosam. Quis qui repellendus magni eaque dicta
        odit nobis cupiditate quasi quaerat mollitia, suscipit minima dolorum
        vel eum necessitatibus facilis quo rerum sint, asperiores culpa, quia
        repellat esse consectetur? Sit, dolor. Velit nam a, exercitationem quam
        quaerat cumque et, molestias autem beatae quisquam id doloribus, libero
        numquam quo quae sapiente. Fuga suscipit nobis cum autem minima veniam
        ipsa voluptatum deserunt fugiat! A deserunt aut modi. Modi, quia minus.
        Maiores sapiente asperiores, commodi eum, inventore harum dolore alias
        ea ullam eligendi iure. Laudantium fugiat modi repellat officia maxime,
        mollitia commodi veniam perferendis! Deleniti modi ut facilis eligendi
        esse dolore dicta magni? Consequatur eum mollitia fuga perferendis quos
        excepturi pariatur ut. Incidunt, ipsam earum distinctio inventore
        veritatis delectus officia iste tempora rem quibusdam. Placeat debitis,
        odio provident quidem consequatur et dolor, ipsa iste at reiciendis
        corrupti? Quam nostrum repellat architecto aliquid aperiam magnam
        perferendis. Nulla harum obcaecati qui numquam ducimus debitis doloribus
        quam. Eos officiis a cupiditate ipsum earum impedit. Sit fuga itaque ea
        illo atque, iure perferendis dolor quis debitis et ad aspernatur, vel,
        deleniti ducimus! Dignissimos deserunt explicabo consequatur magni est!
        Officia sequi sint perferendis, molestiae ipsam quaerat expedita
        laboriosam, itaque ullam repudiandae veniam quibusdam dolorem cumque
        eligendi suscipit maxime voluptate magnam architecto ea corporis
        adipisci. Magni sunt temporibus eligendi autem?
      </p>
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
