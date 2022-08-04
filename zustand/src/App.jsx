import "./App.css";
import People from "./components/People";
import Input from "./components/Input";
import { useEffect, useRef, useState } from "react";
import { useThemeStore } from "./store";
import { useForm, Controller } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

export default function App() {
  const toggleDarkMode = useThemeStore((state) => state.toggleDarkMode);
  const dark = useThemeStore((state) => state.dark);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [rating, setRating] = useState(true);
  const myForm = useRef(null);

  function submitData(data) {
    console.log(data);
  }

  function onEnterPress(e) {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit(submitData)
  }

  if (rating) {
    return (
      <div className="App">
        <form onSubmit={handleSubmit(submitData)} ref={myForm}>
          <textarea type="text" name="address" {...register("address")} onKeyDown={(e) => onEnterPress(e)} />
          <Controller
            control={control}
            name="star"
            render={({ field: { onChange, value } }) => (
              <ReactStars
                count={5}
                size={24}
                activeColor="#ffd700"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <button type="submit">Click me</button>
        </form>
      </div>
    )
  }